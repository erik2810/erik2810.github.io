---
title: "Research"
subtitle: "Quantum Field Theory, Holography & the AdS/CFT Correspondence"
description: "Research overview — Erik Löffelholz"
layout: "single"
label: "[ Research Program ]"
math: true
---

## Research Identity

My research is rooted in **mathematical physics** — specifically **quantum field theory in curved backgrounds**, the **AdS/CFT correspondence**, and the **renormalization** of interacting theories. I study how bulk field theories in Anti-de Sitter space encode the data of a conformal field theory living on the boundary, and how interactions deform that dictionary.

My master's thesis and a follow-up article develop this program concretely for the **Sine-Gordon model in two-dimensional Euclidean Anti-de Sitter space** ($\text{EAdS}_2$), where vertex operators serve as the central observables.

Alongside this core direction I maintain an active, secondary interest in **geometric and differentiable machine learning** — energy-based modeling of geometric graphs and differentiable physics — which connects naturally to the variational and geometric structures that pervade field theory.

## Featured Work

<div class="publication">
    <p class="pub-status">Article — In Preparation / To Be Submitted to JHEP</p>
    <p class="pub-authors"><strong>Erik Löffelholz</strong></p>
    <p class="pub-title">Interacting Vertex Operators in Euclidean AdS₂: Connected Correlators, Holographic Renormalization and Anomalous Dimensions</p>
    <p class="pub-venue">Extends the free-field analysis of the thesis to the interacting theory. &middot; <a href="/assets/pdf/interacting-vertex-operators-eads2-abstract.pdf" target="_blank" rel="noopener">Read the abstract (PDF)</a></p>
</div>

<div class="publication">
    <p class="pub-status">M.Sc. Thesis — Universität Leipzig, 2024</p>
    <p class="pub-authors"><strong>Erik Löffelholz</strong> &middot; Supervisor: Prof. Dr. Stefan Hollands &middot; Second Examiner: Dr. Markus Fröb</p>
    <p class="pub-title">The Sine-Gordon Model in Hyperbolic Space and the AdS/CFT Correspondence</p>
    <p class="pub-venue">Faculty of Physics and Earth System Sciences. &middot; <a href="/assets/pdf/master-thesis-sine-gordon-ads-cft.pdf" target="_blank" rel="noopener">Read the thesis (PDF)</a></p>
</div>

<div class="publication">
    <p class="pub-status">Under Review — Bridges Conference 2026</p>
    <p class="pub-authors">Fabian Lander, <strong>Erik Löffelholz</strong>, Diaaeldin Taha, Steve Trettel, Anna Wienhard</p>
    <p class="pub-title">Illustrating Hyperbolic Surfaces with Mesh Embeddings</p>
    <p class="pub-venue">Regular Papers Track. &middot; Submitted 2026</p>
</div>

## Core Research Direction

<h3 id="ads-cft">Quantum Field Theory in Euclidean AdS₂</h3>

The AdS/CFT correspondence conjectures a duality between a field theory in $(d+1)$-dimensional Anti-de Sitter space and a $d$-dimensional conformal field theory on its boundary. I work in the two-dimensional Euclidean case, in the Poincaré patch with metric

$$ds^2 = \frac{L^2}{z^2}\left(dz^2 + dp^2\right), \qquad R = -\frac{2}{L^2},$$

where $z>0$ is the holographic radial direction and $p$ is the boundary coordinate. A free scalar of mass $m$ is dual to a boundary operator of scaling dimension fixed by the Breitenlohner–Freedman analysis,

$$\Delta = \tfrac{1}{2} + \sqrt{\tfrac{1}{4} + m^2 L^2}.$$

The observables of interest are **normal-ordered vertex operators** $V_\beta = {:}e^{i\beta\phi}{:}$, drawn from the Sine-Gordon interaction. Building the free massive bulk propagator and its boundary limit yields a **bulk-to-boundary dictionary** that maps these vertex operators to dual scalar primaries on the boundary CFT.

### Interacting Theory & Renormalization

Adding a Sine-Gordon bulk interaction and expanding the connected generating functional perturbatively produces UV and IR structure that must be regularized — I use a **heat-kernel** decomposition of the propagators to define a Gaussian measure and control the divergences. Renormalizing the two- and three-point functions of vertex operators yields an **anomalous dimension** of the dual operator,

$$\Delta \;\longrightarrow\; \Delta_1 = \Delta + \lambda\,\Delta^{(1)} + \mathcal{O}(\lambda^2),$$

extracted via explicit **holographic renormalization**, including an analysis of scheme dependence.

### The Logarithmic-CFT Question

The thesis observed that the appearance of logarithmic terms and apparent multiplets $\widetilde{\mathcal{O}} = \{\hat{\mathcal{O}}, {:}\mathcal{O}^2{:}\}$ hints at a **logarithmic CFT** structure on the boundary. The follow-up article sharpens this: a careful treatment of the connected correlators and the renormalization group shows that — despite the logarithms — the boundary theory exhibits **ordinary anomalous scaling rather than genuine logarithmic CFT structure**. Resolving exactly when curved-space interactions do or do not generate logarithmic multiplets is a central thread of my ongoing work.

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
            <p>Thesis on the Sine-Gordon model in hyperbolic space and AdS/CFT, supervised by
            Prof. Dr. Stefan Hollands. Coursework in quantum field theory on curved spacetimes,
            general relativity, advanced PDE and analysis, and group theory.</p>
        </div>
    </div>
    <div class="timeline-entry">
        <div class="timeline-date">2025 — 2026</div>
        <div class="timeline-body">
            <h3>Max Planck Institute for Mathematics in the Sciences</h3>
            <p>Computational and geometric research — discrete differential geometry, mesh embeddings
            into curved spaces, and differentiable simulation — sharpening the numerical and geometric
            toolset that complements analytic field theory.</p>
        </div>
    </div>
    <div class="timeline-entry timeline-next">
        <div class="timeline-date">Next &gt;&gt;&gt;</div>
        <div class="timeline-body">
            <h3>Industry R&D & ML Engineering</h3>
            <p>Bringing a mathematical-physics foundation to applied machine learning and
            differentiable simulation — open to fully remote ML engineering, R&amp;D, and quantitative
            research roles across the EU.</p>
        </div>
    </div>
</div>

## Research Topics

<div class="topic-grid">
    <div class="topic-card">
        <span class="topic-index">T-01</span>
        <h3>AdS/CFT in Two Dimensions</h3>
        <p>Holographic duality between bulk fields in EAdS₂ and boundary conformal operators.</p>
    </div>
    <div class="topic-card">
        <span class="topic-index">T-02</span>
        <h3>Vertex Operators & the Sine-Gordon Model</h3>
        <p>Normal-ordered vertex operators as observables of an integrable bulk theory in hyperbolic space.</p>
    </div>
    <div class="topic-card">
        <span class="topic-index">T-03</span>
        <h3>Holographic Renormalization</h3>
        <p>Regularizing bulk integrals and extracting renormalized boundary correlators and scheme dependence.</p>
    </div>
    <div class="topic-card">
        <span class="topic-index">T-04</span>
        <h3>Anomalous Dimensions & RG</h3>
        <p>Interaction-induced corrections to scaling dimensions and the resulting renormalization-group flow.</p>
    </div>
    <div class="topic-card">
        <span class="topic-index">T-05</span>
        <h3>Logarithmic CFT vs. Ordinary Scaling</h3>
        <p>When do curved-space interactions generate logarithmic multiplets — and when only ordinary anomalous scaling?</p>
    </div>
    <div class="topic-card">
        <span class="topic-index">T-06</span>
        <h3>Geometric & Differentiable ML</h3>
        <p>Secondary direction: energy-based modeling of geometric graphs and differentiable physics in 3D.</p>
    </div>
</div>

<h2 id="geometric-ml">Secondary Direction: Geometric & Differentiable ML</h2>

Parallel to the field-theory program, I work on **energy-based modeling of geometric graphs** and **differentiable physics**. Graphs embedded in 3D space — neuronal morphologies, botanical trees — are neither purely geometric nor purely combinatorial, and modeling them couples discrete topology with continuous geometry. Concretely this has included a from-scratch graph ML framework for spatial tree generation, mesh-based differentiable simulators, and computational work on mesh embeddings into curved spaces (the basis for the Bridges 2026 submission above). The variational and geometric structures here are the same ones that organize field theory, which is what keeps the two directions connected for me.

## Research Philosophy

I am motivated by questions of the form:

- How does bulk geometry shape the boundary data of a quantum field theory?
- What survives renormalization, and what structure does the renormalization group reveal?
- When do interactions in curved space generate genuinely new operator structure?
- How can geometric and variational principles be made computational?

These questions unify my work across field theory, geometry, and simulation — and they shape the rigor I bring to applied R&D and machine-learning engineering.
