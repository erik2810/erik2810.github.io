---
title: "Solving Inverse Problems in Engineering via Hardware-Accelerated Differentiable Simulations"
date: 2026-07-03
draft: false
tags: ["Differentiable Simulation", "Inverse Problems", "Topology Optimization", "PyTorch"]
summary: "A case study of the Differentiable Digital Twin: minimising the compliance of a loaded structure by backpropagating through a finite-element solver, with measured solve counts against finite differences, CMA-ES and random search."
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

Both tables are from `ddtwin benchmark`, re-run for this post on an Apple Silicon laptop CPU
(PyTorch, float32). Every method sees the solver only as an oracle $\rho \mapsto C(\rho)$, and
the accounting unit is one static solve.

N = 60 design variables (6x10 grid):

| Method | Final loss | Static solves | Wall time | vs. autodiff |
|---|--:|--:|--:|--:|
| autodiff (Adam) | 0.354 | 120 | 1.12 s | 1.0x |
| finite-diff GD | 0.387 | 2,441 | 1.21 s | 1.1x |
| CMA-ES | 0.275 | 2,448 | 1.32 s | 1.2x |
| random search | 0.620 | 2,441 | 1.13 s | 1.0x |

N = 150 design variables (10x15 grid):

| Method | Final loss | Static solves | Wall time | vs. autodiff |
|---|--:|--:|--:|--:|
| autodiff (Adam) | 0.237 | 120 | 0.93 s | 1.0x |
| finite-diff GD | 0.273 | 6,041 | 5.67 s | 6.1x |
| CMA-ES | 0.204 | 6,042 | 6.30 s | 6.8x |
| random search | 0.533 | 6,041 | 5.56 s | 6.0x |

The number to read is the solve count, not the wall time. Autodiff reaches its design in a fixed
120 solves at both sizes. The black-box methods track $\text{steps} \times (N+1)$ exactly, so
growing $N$ from 60 to 150 widens the wall-clock gap from roughly parity to six or seven times,
and nothing about that trend saturates. Extrapolated to an industrial mesh with $10^5$ elements,
one finite-difference gradient costs a hundred thousand solves; the autodiff gradient still
costs about one.

Two honest caveats. At these toy sizes CMA-ES actually finds a slightly lower loss than Adam,
which surprised me the first time I saw it; evolution strategies are good at small, cheap
problems, and 150 variables is small. The gap in solve economics is what kills them at scale,
not the quality of their search. And this model is a truss FEM, not a continuum shell; the
point of the project is the optimisation architecture, and the physics is intentionally the
simplest thing that makes the architecture's cost structure measurable.

The project page has the write-up of the companion systems, including the
[JAX simulation engine](/projects/#sciml) whose own
[measured benchmarks](https://github.com/erik2810/jax-spring-sim/blob/main/BENCHMARKS.md) make
the same argument from the compilation side.
