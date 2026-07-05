---
title: "Compiling a Physics Engine into One Kernel: jit, grad and vmap in Practice"
date: 2026-07-05
draft: false
tags: ["JAX", "Differentiable Simulation", "XLA", "Scientific Machine Learning"]
summary: "A case study of jax-spring-sim: forces derived by autodiff from a single energy function, a rollout compiled into one XLA kernel, and measured numbers for what compilation and reverse-mode differentiation actually cost."
math: true
---

This is a case study of my [jax-spring-sim](https://github.com/erik2810/jax-spring-sim)
project, a particle-spring simulator built on JAX, with a
[WebGPU viewer](https://erik2810.github.io/jax-spring-sim/) for the results. It is the
companion piece to the
[differentiable digital twin write-up](/blog/differentiable-digital-twin-case-study/).
That post argued about how many times an optimiser has to call a solver. This one is about
the other tax: what each call costs, and what compiling the physics does to it.

## Executive summary

A simulator written in the eager style, where every array operation dispatches individually
from Python, spends most of its time on dispatch rather than physics. On my laptop CPU the
eager rollout of a 1,024-node cloth pays about 16,000 microseconds per step. The identical
step function, compiled once with `jax.jit` around a `jax.lax.scan` rollout, runs at 337
microseconds per step. Same physics, same hardware, 48 times faster. The gap narrows as the
system grows and arithmetic starts to dominate, but at 50,176 nodes it is still a factor of
seven.

The second measured result is about gradients. Reverse-mode differentiation through the
entire rollout, every integration step included, costs 2.3 to 2.4 times the forward pass,
and that multiple stays flat as the horizon grows from 25 to 200 steps. Those two numbers
together are the case for writing simulation in a compiled autodiff framework: each step is
cheap, and the gradient of everything costs a fixed small multiple of one rollout.

## Forces are a gradient, not a derivation

The design decision that shapes the whole engine: no force is ever written by hand. The
state is positions $\mathbf{x} \in \mathbb{R}^{N \times D}$ and velocities $\mathbf{v}$,
and the physics is specified once, as a scalar potential energy, a Hookean spring term over
the edges plus gravity:

$$U(\mathbf{x}) = \tfrac12 \sum_{e=(i,j)} k_e \big(\lVert \mathbf{x}_i - \mathbf{x}_j \rVert - L_e\big)^2 - \sum_i m_i\, \mathbf{g} \cdot \mathbf{x}_i .$$

The force field is one line:

```python
force = -jax.grad(total_energy)(pos, system)
```

In a hand-written engine you differentiate the spring energy analytically, get
$\mathbf{F}_e = -k_e(\lVert\mathbf{r}\rVert - L_e)\,\hat{\mathbf{r}}$, and repeat that
derivation for every new term. Here `jax.grad` returns the exact gradient to machine
precision, so a bending energy or a collision penalty is a one-line change with correct
forces for free. The test suite pins this down with `jax.test_util.check_grads`, the JAX
analogue of the `gradcheck` that guards the PyTorch twin.

Time stepping is semi-implicit Euler, a symplectic integrator, so energy behaviour stays
sane over long rollouts. Nothing about the physics is novel. That is the point: the
interesting decisions are all about how the computation is expressed.

## The rollout is a scan, not a loop

The second decision is that the time loop is not a Python loop. The whole rollout is a
`jax.lax.scan` under `jax.jit`, which hands XLA the entire program at once. XLA fuses it
into one compiled kernel, and, just as importantly, `scan` is the structure that
reverse-mode autodiff knows how to walk backwards efficiently.

What compilation buys is not subtle. Measured with the repo's
[profiling script](https://github.com/erik2810/jax-spring-sim/blob/main/benchmarks/profile_engine.py)
on an Apple Silicon CPU (Python 3.13, JAX 0.10), median of repeated runs after warm-up,
with `block_until_ready()` so the clock stops when the device is actually done:

| Grid | Nodes | Springs | Compile (s) | jit (us/step) | Eager (us/step) | Speedup |
|---|--:|--:|--:|--:|--:|--:|
| 32x32 | 1,024 | 3,906 | 0.16 | 336.9 | 16,071 | 48x |
| 100x100 | 10,000 | 39,402 | 0.33 | 816.9 | 16,384 | 20x |
| 224x224 | 50,176 | 199,362 | 1.05 | 2,686.1 | 17,651 | 7x |

The eager column is the tell. It barely moves, from 16,071 to 17,651 microseconds per step,
while the system grows by a factor of fifty. That cost is not physics; it is Python-level
dispatch of individual XLA operations, roughly constant per step regardless of how much
arithmetic each operation does. The jitted column is what the physics actually costs, and it
scales like $n^{0.53}$ over this range. So the speedup is largest exactly where simulators
spend most of their life: small and medium systems where per-op overhead would otherwise
dominate.

Compile time is the price of admission, 0.16 to 1.05 seconds here, paid once on the first
call. For a rollout of any length it amortises immediately.

## Differentiating through the whole trajectory

The rollout being one compiled, differentiable program means an inverse problem needs no new
machinery: `jax.value_and_grad` of a loss on the final state, with respect to every spring
rest length, backpropagated through all integration steps, then Adam. This is measured on
the 100x100 grid, 10,000 nodes:

| Horizon (steps) | Forward (ms) | Forward+backward (ms) | Ratio |
|--:|--:|--:|--:|
| 25 | 12.86 | 30.50 | 2.4x |
| 50 | 26.15 | 60.30 | 2.3x |
| 100 | 51.10 | 120.88 | 2.4x |
| 200 | 102.72 | 243.38 | 2.4x |

The ratio is the result. Backpropagating through the full trajectory costs a small constant
multiple of running it, and the multiple does not grow with the horizon: doubling the
horizon doubles both passes instead of blowing up the backward one. That is what makes
gradient descent through a simulator a practical optimisation method rather than a stunt,
and it is the execution-side half of the argument the
[digital twin post](/blog/differentiable-digital-twin-case-study/) makes in solver calls:
one backward pass replaces N re-simulations, and the backward pass itself is only ever
about 1.4 forward passes of extra work.

`jax.vmap` covers the remaining axis, batching: an ensemble of rollouts over different
initial conditions or parameters is the same compiled function mapped over a leading array
dimension, which is how parameter studies and batched inverse problems run without a Python
loop reappearing.

## Honest caveats

These are CPU numbers. JAX targets GPUs and TPUs through the same code, and the dispatch
argument gets stronger there, but I have not measured this engine on one, so I will not
quote speculative speedups. The physics is deliberately toy: Hookean springs and gravity,
not contact or friction, chosen so the cost structure stays legible. And the flat 2.4x
gradient ratio has a memory cost hiding behind it: `lax.scan` stores per-step residuals for
the backward pass, so gradient memory grows linearly with the horizon. The engine's
`simulate_final` keeps only the terminal state to hold that down.

The full methodology and the memory figures are in the repo's
[BENCHMARKS.md](https://github.com/erik2810/jax-spring-sim/blob/main/BENCHMARKS.md), and
`benchmarks/profile_engine.py --quick` reproduces the tables on any machine, including
inside the project's Docker image.
