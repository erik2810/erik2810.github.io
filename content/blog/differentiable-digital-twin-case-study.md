---
title: "Solving Inverse Problems in Engineering via Hardware-Accelerated Differentiable Simulations"
date: 2026-07-03
draft: false
tags: ["Differentiable Simulation", "Inverse Problems", "Topology Optimization", "PyTorch"]
summary: "A case study of the Differentiable Digital Twin: minimising the compliance of a loaded structure by backpropagating through a finite-element solver, with measured solve counts against finite differences, CMA-ES and random search. Updated with a matrix-free sparse solver that holds memory flat where the dense matrix alone would need gigabytes."
math: true
---

This is a case study of my [Differentiable Digital Twin](https://github.com/erik2810/differentiable-digital-twin)
project: a structural optimiser that finds a stiff material layout by backpropagating through a
physics solver, plus a [WebGPU player](https://erik2810.github.io/differentiable-digital-twin/)
that replays the result in the browser. The benchmark numbers below are from my laptop CPU. That is
deliberate. The argument is about how many solver calls each method needs, and that accounting
does not change when you move to bigger silicon; it only gets more expensive to ignore.

## Executive summary

Classical engineering optimisation treats the simulator as a black box. Pick a design, simulate,
score, adjust, repeat. Every method built on that contract, whether finite differences, CMA-ES or
plain random search, pays the same structural tax: to learn how $N$ design parameters affect the
objective, it must perturb and re-simulate on the order of $N$ times per optimisation step. Real
structural design spaces put $N$ in the tens of thousands to millions, which is how a single
optimisation campaign turns into weeks of cluster time.

A differentiable simulator changes the contract. Reverse-mode automatic differentiation (the
adjoint method, in classical terms) returns the sensitivity of the objective to every design
variable at once, in one backward pass whose cost does not depend on $N$. In this project that
means the optimiser reaches a design 4.6 times stiffer than a uniform slab, at the same material
budget, in about 200 solver calls and roughly two seconds. The black-box baselines need thousands
of calls for the same problem, and their call count grows linearly with the design resolution.

## The mathematics

The structure is a 2D linear-elastic truss: a clamped panel of nodes joined by axial members,
loaded at the tip. The design variable is a per-node material density $\rho \in (0,1)$, the
fraction of stiff material allocated there. Density maps to member stiffness through a SIMP
interpolation (Bendsøe and Sigmund's Solid Isotropic Material with Penalisation):

$$k(\rho) = k_{\min} + (k_{\max} - k_{\min})\,\rho^{p}, \qquad p = 3 .$$

The exponent $p > 1$ makes intermediate densities structurally inefficient, so the optimum drifts
toward a crisp material-or-void layout, which is what a manufacturing process can actually build.
The densities themselves are parameterised as $\rho = \sigma(\theta)$ with unconstrained logits
$\theta$, so the optimiser never has to project back into the unit interval.

Each solver call assembles the global stiffness matrix and solves the static equilibrium system

$$K(\rho)\,u = f,$$

for the nodal displacements $u$ under the load $f$. The objective is the compliance

$$C = f \cdot u,$$

the work done by the load, equal to the stored strain energy. Minimising compliance at a fixed
material budget is the canonical topology-optimisation problem, and it is how production
structural optimisation is actually posed.

The differentiable part is a single design decision: the solve runs through
`torch.linalg.solve`, which PyTorch knows how to differentiate. For compliance the adjoint method
gives a closed-form sensitivity, $\partial C / \partial \rho_e = -u_e^{\top} (\partial K_e /
\partial \rho_e)\, u_e$, which people have derived by hand for decades. Here autodiff computes
exactly that quantity and nobody ever writes it down. Adding a new objective or a new physical
term does not require re-deriving anything; the backward pass is generated from the forward
code.

The gradient over all $N$ densities therefore costs one extra solve:

$$\nabla_\rho C = \text{one backward pass}, \qquad \text{vs.} \qquad \nabla_\rho C \approx \left[ \frac{C(\rho + \epsilon e_i) - C(\rho)}{\epsilon} \right]_{i=1}^{N} = N{+}1 \ \text{re-simulations}.$$

## The engineering pipeline

The optimiser is a Python package (`ddtwin`) with a CLI, built and shipped as a container. The
Dockerfile is a two-stage build: a builder stage resolves the locked environment with uv (CPU
PyTorch wheels, so the image stays slim), and the runtime stage carries only the virtual
environment and the web assets, running as a non-root user. `docker run ddtwin optimise` produces
a finished, replayable result.

The interface between the Python engine and the browser is two files, and keeping it that small
was the point:

- `positions.bin`, raw little-endian float32 of shape (frames, N, 3): the node trajectory of the
  optimised structure relaxing under load. Binary keeps it about six times smaller than JSON and
  parses straight into a typed array. It is the same binary-buffer convention I use everywhere
  else in my portfolio where numerical state crosses into a browser.
- `scene.json`: topology and metadata. Grid shape, spring edges, render faces, the optimised
  density field for the material colour map, boundary conditions, the load vector, and the full
  optimisation history.

The player itself is a dependency-light WebGPU app (Three.js, with a WebGL2 fallback for browsers
without WebGPU) that streams through the trajectory buffer and colours the structure by its
optimised density field. The compute stays in Python where the autodiff lives; the browser only
ever sees tensors that are already results.

## Quality assurance

A differentiable simulator has one failure mode that ordinary simulators do not: the physics can
look right while the gradients are silently wrong, and the optimiser will happily descend a wrong
landscape. The test suite treats that as the primary risk.

The core test is a `torch.autograd.gradcheck` of the compliance right through the linear solve,
in float64, against finite differences. Around it sit invariant tests that pin down the physics:
pinned and out-of-plane degrees of freedom must not move, stiffer material must lower compliance,
solutions must stay finite and actually deform, the material budget constraint must hold after
optimisation, and densities must stay inside the unit interval. The export path has its own test
that the binary trajectory and the JSON metadata stay mutually consistent.

CI runs on every push: ruff lint and format check, mypy, and the pytest suite including the
gradcheck, on a uv-locked environment, the same lockfile the Docker image builds from. None of
this is exotic. It is the ordinary discipline of production software applied to code whose most
dangerous bug is a plausible-looking gradient.

## Measured results

Both tables are from `ddtwin benchmark`, most recently re-measured in July 2026 on an Apple
Silicon laptop CPU (PyTorch, float32). The final losses and solve counts are deterministic
(seeded), so re-running moves only the wall clock. Every method sees the solver only as an
oracle $\rho \mapsto C(\rho)$, and the accounting unit is one static solve.

N = 60 design variables (6x10 grid):

| Method | Final loss | Static solves | Wall time | vs. autodiff |
|---|--:|--:|--:|--:|
| autodiff (Adam) | 0.354 | 120 | 1.29 s | 1.0x |
| finite-diff GD | 0.387 | 2,441 | 1.48 s | 1.1x |
| CMA-ES | 0.273 | 2,448 | 1.69 s | 1.3x |
| random search | 0.620 | 2,441 | 1.47 s | 1.1x |

N = 150 design variables (10x15 grid):

| Method | Final loss | Static solves | Wall time | vs. autodiff |
|---|--:|--:|--:|--:|
| autodiff (Adam) | 0.237 | 120 | 1.09 s | 1.0x |
| finite-diff GD | 0.273 | 6,041 | 5.74 s | 5.3x |
| CMA-ES | 0.204 | 6,042 | 6.44 s | 5.9x |
| random search | 0.533 | 6,041 | 5.81 s | 5.3x |

The number to read is the solve count, not the wall time. Autodiff reaches its design in a fixed
120 solves at both sizes. The black-box methods track $\text{steps} \times (N+1)$ exactly, so
growing $N$ from 60 to 150 widens the wall-clock gap from roughly parity to five or six times,
and nothing about that trend saturates. Extrapolated to an industrial mesh with $10^5$ elements,
one finite-difference gradient costs a hundred thousand solves; the autodiff gradient still
costs about one.

Two honest caveats. At these toy sizes CMA-ES actually finds a slightly lower loss than Adam,
which surprised me the first time I saw it; evolution strategies are good at small, cheap
problems, and 150 variables is small. The gap in solve economics is what kills them at scale,
not the quality of their search. And this model is a truss FEM, not a continuum shell; the
point of the project is the optimisation architecture, and the physics is intentionally the
simplest thing that makes the architecture's cost structure measurable.

## Scaling the solver: writing the adjoint down

Added in July 2026. Everything above runs through a dense solve: assemble the full
$(3N, 3N)$ stiffness matrix, hand it to `torch.linalg.solve`, and let autodiff differentiate
through the factorisation. That is the right default at small $N$, and it is also a memory
ceiling. The matrix grows $O(N^2)$ no matter what, and for this mesh it is more than 99
percent zeros.

The project now has a second path (`SimConfig(sparse=True)`, or `--sparse` on the CLI) that
never builds the matrix at all. A matrix-free operator applies $K$ member by member in $O(E)$,
a Jacobi-preconditioned conjugate-gradient solve replaces the factorisation, and the backward
pass is one more CG solve on the same operator. There is a small irony in how it gets its
gradients. The dense path's selling point was that autodiff computes the adjoint sensitivity
and nobody ever writes it down. Go matrix-free and that free lunch ends: PyTorch has no
differentiable sparse solve, so the adjoint finally had to be written out by hand, per member

$$\frac{\partial L}{\partial k_e} = -\big(\hat d_e \cdot (\lambda_a - \lambda_b)\big)\,
\big(\hat d_e \cdot (u_a - u_b)\big), \qquad K \lambda = \frac{\partial L}{\partial u},$$

inside a custom `autograd.Function`. The same `gradcheck` that guards the dense path now
guards the hand-written one, and the two paths agree on displacement, compliance, and gradient
to $10^{-10}$.

Measured on the same laptop (`scripts/profile_memory.py`, float32), peak process memory of one
forward plus backward pass:

| Nodes | Dense stiffness matrix | Dense peak RSS | Sparse peak RSS |
|---|--:|--:|--:|
| 960 | 33 MB | 315 MB | 213 MB |
| 2,880 | 299 MB | 917 MB | 216 MB |
| 11,200 | 4.5 GB | not attempted | 225 MB |

The sparse column is flat because its $O(N)$ working set is small next to the PyTorch runtime
itself. The 11,200-node mesh runs in the same 225 MB where the dense path would need 4.5 GB
for the matrix alone, before autograd holds its copies for the backward pass. Past a few
thousand nodes the CG solve is also faster than the dense factorisation, 0.16 s against 0.61 s
per solve at 2,880 nodes, because LU factorisation costs $O(N^3)$ and the matrix-free
iteration does not.

The honest limit of the new path is conditioning: CG iteration counts grow as the mesh gets
finer and the stiffness contrast gets sharper, so pushing past roughly $10^5$ nodes would want
a real preconditioner (incomplete Cholesky or multigrid) rather than the Jacobi diagonal.
That is the next rung of the ladder, not a wall.

The project page has the write-up of the companion systems, including the
[JAX simulation engine](/projects/#sciml) whose own
[measured benchmarks](https://github.com/erik2810/jax-spring-sim/blob/main/BENCHMARKS.md) make
the same argument from the compilation side.
