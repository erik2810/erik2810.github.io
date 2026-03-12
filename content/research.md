---
title: "Research"
subtitle: "Physics-Inspired Generative Modeling of Geometric Graphs"
description: "Research overview — Erik Löffelholz"
layout: "single"
math: true
---

## Research Identity

My research interests lie at the intersection of **geometric and topological structures**, **physics-inspired modeling**, **differentiable systems** and **graph-based generative modeling in 3D**.

I am particularly interested in **how complex structure emerges from local constraints** — and how such generative principles can be modeled, simulated and ultimately learned.

Rather than treating machine learning as pure function approximation, I aim to integrate variational principles, energy-based modeling, structural priors and discrete–continuous hybrid systems into modern graph-based machine learning frameworks.

---

## Academic Background

### Master's Degree in Mathematical Physics

Selected coursework:

- Quantum Field Theory on Curved Spacetimes
- General Relativity
- Advanced PDE and Analysis
- Group Theory and its Applications to Physics
- Mathematical Physics

This background shaped my thinking around functional analysis and variational principles, symmetry and invariance, continuous–discrete interactions and structure formation under constraints.

---

## Transition to Computational Modeling

After completing my master's degree, I spent nearly a year contributing at the **Max Planck Institute for Mathematics in the Sciences**, focusing on developing strong practical skills in Python, PyTorch, Git, JavaScript, numerical methods and gradient-based optimization.

This period marked the transition from theoretical modeling to **differentiable computational systems** — learning to translate mathematical structures into executable, optimizable code.

---

## Core Research Direction

### Physics-Inspired Generative Modeling of Geometric Graphs

My long-term research goal is to understand and model structured systems that combine:

- **Discrete topology** (graphs / meshes)
- **Continuous geometry** (3D embeddings)
- **Local interaction rules**
- **Emergent global structure**

This naturally leads to problems such as generative models for branching structures (e.g. trees, neurons), energy-based graph modeling, differentiable simulators for structured systems, metrics for geometric graphs, and hybrid discrete–continuous optimization.

---

<h2 id="simulator">Mesh-Based Differentiable Physics Simulator</h2>

I am currently developing a **mesh-based physics simulator** implemented entirely in PyTorch.

The simulator uses mesh topology to initialize a particle–spring system, encodes structural relationships as interaction rules, models physical forces via energy-based formulations, and is **fully differentiable**.

### Conceptual Pipeline

1. **Mesh topology** &rarr; graph representation
2. **Graph edges** &rarr; spring connections
3. **Energy formulation** &rarr; forces
4. **Continuous dynamics** &rarr; emergent structure
5. **Backpropagation** through dynamics

> Structured topology + continuous dynamics + differentiable computation.

This project reflects my core interest and directly connects to hybrid generative graph modeling in 3D. It serves as a **proof of capability** for the kind of discrete–continuous, physics-informed systems I aim to study at the PhD level.

---

<h2 id="hybrid-systems">Discrete–Continuous Hybrid Systems</h2>

I am deeply interested in modeling systems of the form:

$$E(G, X; \theta)$$

Where:

- $G$ is a discrete graph structure
- $X \in \mathbb{R}^{3n}$ are continuous 3D node embeddings
- $\theta$ are learnable neural parameters

### Possible Research Directions

- **Learning energy functionals** from structured 3D data.
- **Growth-based generative modeling** of branching structures.
- **Equivariant geometric graph neural networks** with built-in symmetries.
- **Structure-aware similarity metrics** for geometric graphs.
- **Differentiable combinatorial modeling** over discrete–continuous domains.

---

## Why Graph Machine Learning?

Graphs embedded in 3D space — such as neuronal morphologies or botanical trees — are neither purely geometric objects nor purely combinatorial ones.

They require topological reasoning, geometric invariance, structural priors and hybrid discrete–continuous learning.

My background in mathematical physics combined with differentiable simulation places me naturally at this interface.

---

## Research Philosophy

I am motivated by questions of the form:

- What structural principles generate complex systems?
- How can constraints produce emergent organization?
- Can we combine physics-inspired modeling with learnable components?
- How do we rigorously compare structured geometric objects?

These questions unify my work across physics, simulation, and machine learning — and they define the direction I aim to pursue in doctoral research.
