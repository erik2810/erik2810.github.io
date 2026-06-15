---
title: "Research"
subtitle: "Physics-Inspired Generative Modeling of Geometric Graphs"
description: "Research overview — Erik Löffelholz"
layout: "single"
label: "[ Research Program ]"
math: true
---

## Research Identity

My research interests lie at the intersection of **geometric and topological structures**, **physics-inspired modeling**, **differentiable systems** and **graph-based generative modeling in 3D**.

I am particularly interested in **how complex structure emerges from local constraints** — and how such generative principles can be modeled, simulated and ultimately learned.

Rather than treating machine learning as pure function approximation, I aim to integrate variational principles, energy-based modeling, structural priors and discrete–continuous hybrid systems into modern graph-based machine learning frameworks.

## Trajectory

<div class="timeline">
    <div class="timeline-entry">
        <div class="timeline-date">2018 — 2022</div>
        <div class="timeline-body">
            <h3>B.Sc. Physics — Universität Leipzig</h3>
            <p>Foundation in theoretical and mathematical physics.</p>
        </div>
    </div>
    <div class="timeline-entry">
        <div class="timeline-date">2021 — 2025</div>
        <div class="timeline-body">
            <h3>M.Sc. Mathematical Physics — Universität Leipzig</h3>
            <p>Quantum field theory on curved spacetimes, general relativity, advanced PDE and analysis,
            group theory and its applications to physics. Shaped my thinking around functional analysis,
            variational principles, symmetry and invariance, and structure formation under constraints.</p>
        </div>
    </div>
    <div class="timeline-entry">
        <div class="timeline-date">2025 — Present</div>
        <div class="timeline-body">
            <h3>Max Planck Institute for Mathematics in the Sciences</h3>
            <p>Transition from theoretical modeling to differentiable computational systems —
            translating mathematical structures into executable, optimizable code with Python,
            PyTorch, numerical methods and gradient-based optimization.</p>
        </div>
    </div>
    <div class="timeline-entry timeline-next">
        <div class="timeline-date">Next &gt;&gt;&gt;</div>
        <div class="timeline-body">
            <h3>Doctoral Research</h3>
            <p>Physics-inspired generative modeling of geometric graphs — seeking PhD positions
            at the interface of geometry, simulation, and machine learning.</p>
        </div>
    </div>
</div>

## Publications

<div class="publication">
    <p class="pub-status">Under Review — Bridges Conference 2026, Regular Papers Track</p>
    <p class="pub-authors">Fabian Lander, <strong>Erik Löffelholz</strong>, Diaaeldin Taha, Steve Trettel, Anna Wienhard</p>
    <p class="pub-title">Illustrating Hyperbolic Surfaces with Mesh Embeddings</p>
    <p class="pub-venue">Submitted 2026</p>
</div>

## Core Research Direction

### Physics-Inspired Generative Modeling of Geometric Graphs

My long-term research goal is to understand and model structured systems that combine:

- **Discrete topology** (graphs / meshes)
- **Continuous geometry** (3D embeddings)
- **Local interaction rules**
- **Emergent global structure**

This naturally leads to problems such as generative models for branching structures (e.g. trees, neurons), energy-based graph modeling, differentiable simulators for structured systems, metrics for geometric graphs, and hybrid discrete–continuous optimization.

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

<h2 id="hybrid-systems">Discrete–Continuous Hybrid Systems</h2>

I am deeply interested in modeling systems of the form:

$$E(G, X; \theta)$$

Where:

- $G$ is a discrete graph structure
- $X \in \mathbb{R}^{3n}$ are continuous 3D node embeddings
- $\theta$ are learnable neural parameters

### Possible Research Directions

<div class="topic-grid">
    <div class="topic-card">
        <span class="topic-index">T-01</span>
        <h3>Learning Energy Functionals</h3>
        <p>Learning energy functionals from structured 3D data.</p>
    </div>
    <div class="topic-card">
        <span class="topic-index">T-02</span>
        <h3>Growth-Based Generative Modeling</h3>
        <p>Generative modeling of branching structures via differentiable growth processes.</p>
    </div>
    <div class="topic-card">
        <span class="topic-index">T-03</span>
        <h3>Equivariant Geometric GNNs</h3>
        <p>Graph neural networks with built-in symmetries and geometric invariance.</p>
    </div>
    <div class="topic-card">
        <span class="topic-index">T-04</span>
        <h3>Structure-Aware Similarity Metrics</h3>
        <p>Rigorous metrics for comparing geometric graphs in embedding spaces.</p>
    </div>
    <div class="topic-card">
        <span class="topic-index">T-05</span>
        <h3>Differentiable Combinatorial Modeling</h3>
        <p>Optimization over hybrid discrete–continuous domains.</p>
    </div>
    <div class="topic-card">
        <span class="topic-index">T-06</span>
        <h3>Why Graph Machine Learning?</h3>
        <p>Graphs embedded in 3D space — neuronal morphologies, botanical trees — are neither purely
        geometric nor purely combinatorial. They require topological reasoning, geometric invariance,
        and hybrid learning. My background places me naturally at this interface.</p>
    </div>
</div>

## Research Philosophy

I am motivated by questions of the form:

- What structural principles generate complex systems?
- How can constraints produce emergent organization?
- Can we combine physics-inspired modeling with learnable components?
- How do we rigorously compare structured geometric objects?

These questions unify my work across physics, simulation, and machine learning — and they define the direction I aim to pursue in doctoral research.
