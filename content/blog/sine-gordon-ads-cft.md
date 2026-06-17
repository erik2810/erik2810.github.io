---
title: "The Sine-Gordon Model in Hyperbolic Space and AdS/CFT"
date: 2025-02-01
draft: false
tags: ["Quantum Field Theory", "AdS/CFT", "Sine-Gordon"]
summary: "An overview of my master's thesis: building a bulk-to-boundary dictionary for vertex operators of the Sine-Gordon model in two-dimensional Euclidean Anti-de Sitter space."
math: true
---

This post summarizes the central thread of my [master's thesis](/assets/pdf/master-thesis-sine-gordon-ads-cft.pdf): what does the AdS/CFT correspondence look like when the bulk theory is the **Sine-Gordon model**, living in two-dimensional Euclidean Anti-de Sitter space?

## The setting

The AdS/CFT correspondence, proposed by Maldacena, conjectures a duality between a theory in $(d+1)$-dimensional Anti-de Sitter space and a $d$-dimensional conformal field theory on its boundary. I work in the simplest non-trivial case, $\text{EAdS}_2$, in the Poincaré patch:

$$ds^2 = \frac{L^2}{z^2}\left(dz^2 + dp^2\right), \qquad R = -\frac{2}{L^2}.$$

Here $z>0$ is a radial coordinate and the conformal boundary sits at $z \to 0$. The conformal factor $L^2/z^2$ means proper distances diverge as one approaches the boundary — which is exactly where the holographic data lives.

## Scalar fields and the dictionary

A free scalar of mass $m$ in the bulk is dual to a boundary operator whose scaling dimension is fixed by the Breitenlohner–Freedman analysis,

$$\Delta = \tfrac{1}{2} + \sqrt{\tfrac{1}{4} + m^2 L^2}.$$

The technical heart of the free theory is the **massive bulk propagator** and its boundary limit. Constructing it — via a spectral representation and a heat-kernel decomposition — gives a precise **bulk-to-boundary dictionary**: a recipe translating bulk correlation functions into boundary CFT correlators.

## Vertex operators

The Sine-Gordon interaction is built from **normal-ordered vertex operators**

$$V_\beta(\vec{x}) = {:}e^{i\beta\phi(\vec{x})}{:},$$

which are the natural observables of the theory. In the free theory their correlators follow from Wick contractions, and pushing them toward the boundary reproduces the expected CFT structure — each $V_\beta$ corresponds to a dual scalar primary.

## Perturbation theory and anomalous dimensions

Turning on the interaction, the connected two- and three-point functions of vertex operators acquire corrections. An internal AdS loop integral produces a logarithmic IR divergence — a generic feature of integration over AdS — which I regularize with a cutoff $\epsilon$ a small distance from the boundary. Renormalizing then shifts the scaling dimension of the dual operator,

$$\Delta \;\longrightarrow\; \Delta_1 = \Delta + \lambda\,\Delta^{(1)} + \mathcal{O}(\lambda^2),$$

the **anomalous dimension**. The same dictionary built from the two-point function turns out to also prescribe the three-point function, which closes the analysis at this order.

## The logarithmic-CFT hint

A striking feature is that the corrections suggest the vertex operator splits into a primary $\mathcal{O}$ and a **logarithmic multiplet** $\widetilde{\mathcal{O}} = \{\hat{\mathcal{O}}, {:}\mathcal{O}^2{:}\}$ — the signature of a logarithmic CFT. Whether this structure is genuine or an artifact of the scheme is precisely the question I take up in the [follow-up article](/blog/interacting-vertex-operators-eads2/).

An interactive companion to this work — differentiable Witten-diagram integration and a PINN for the Klein–Gordon equation on AdS — lives in the [DiffQFT project](https://erik2810.github.io/DiffQFT/).
