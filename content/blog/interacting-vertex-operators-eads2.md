---
title: "Interacting Vertex Operators in Euclidean AdS₂"
date: 2026-06-10
draft: false
tags: ["Quantum Field Theory", "AdS/CFT", "Holographic Renormalization", "Renormalization Group"]
summary: "A follow-up to my thesis: connected correlators of interacting vertex operators in EAdS₂, holographic renormalization, and why the boundary theory shows ordinary anomalous scaling rather than logarithmic CFT structure."
math: true
---

This post outlines the article I am preparing for submission to JHEP, *Interacting Vertex Operators in Euclidean AdS₂* ([read the abstract](/assets/pdf/interacting-vertex-operators-eads2-abstract.pdf)). It extends the free-field analysis of my [thesis](/blog/sine-gordon-ads-cft/) to the **interacting** theory and resolves a question the thesis left open.

## Where the thesis left off

In the free theory, normal-ordered vertex operators $V_\beta = {:}e^{i\beta\phi}{:}$ in Euclidean Poincaré $\text{AdS}_2$ map cleanly to boundary primaries through the bulk-to-boundary dictionary. The interesting physics appears once we add a **Sine-Gordon-type bulk interaction** and ask what happens to the connected boundary correlators.

## Connected generating functional

Starting from the Gaussian scalar theory, the connected correlators are organized by a connected generating functional. For the two-point function this is schematically

$$\langle V_{\beta_1} V_{\beta_2} \rangle_c = e^{-\beta_1\beta_2\, G_\Delta(\vec{x}_1, \vec{x}_2)} - 1,$$

with $G_\Delta$ the bulk propagator. A Euclidean Gell-Mann–Low expansion then generates the perturbative corrections from the interaction, order by order in the coupling $\lambda$.

## Holographic renormalization

The first-order correction carries a logarithmic divergence from the internal AdS integration. The article performs **holographic renormalization explicitly**: a cutoff near the conformal boundary, a renormalization factor $Z(\epsilon)$ absorbing the divergence, and a counterterm fixed so the renormalized operator

$$\mathcal{O}^{\text{ren}}_{\Delta_1}(p) = \frac{1}{i\beta}\lim_{\epsilon\to 0}\sqrt{Z(\epsilon)}\,\lim_{z\to 0} z^{-\Delta_1} V_\beta(\vec{x})\big|_{z=\epsilon}$$

is finite. The renormalization scale $M$ is arbitrary, and tracking it gives a **beta function** and the renormalized **anomalous dimension** $\Delta_1 = \Delta + \lambda\,\Delta^{(1)} + \mathcal{O}(\lambda^2)$. I analyze the scheme dependence directly and compare the curved-space structure with the flat-space Sine-Gordon result.

## The main result: no logarithmic CFT

The thesis hinted that the logarithmic terms and the apparent multiplet $\widetilde{\mathcal{O}} = \{\hat{\mathcal{O}}, {:}\mathcal{O}^2{:}\}$ might signal a **logarithmic CFT** on the boundary. Working through the connected correlators and the renormalization group more carefully, the article shows the opposite:

> Despite the appearance of logarithmic terms, the resulting boundary theory exhibits **ordinary anomalous scaling** rather than logarithmic CFT structure.

In other words, the logarithms are reorganized into a conventional anomalous dimension once the renormalization is done consistently — the operator algebra does **not** develop the non-diagonalizable mixing that defines a genuine logarithmic CFT.

## Why it matters

This sharpens a recurring subtlety in holography: logarithms in AdS correlators are common, but they do not automatically imply logarithmic CFT structure. Pinning down exactly when interactions in curved backgrounds generate genuine logarithmic multiplets — and when they merely renormalize scaling dimensions — is the direction I want to push further, toward higher-point functions and the operator product expansion.

The numerical side of this program — differentiable Witten-diagram integration, neural surrogates, and a PINN for the Klein–Gordon equation — is implemented in [DiffQFT](https://erik2810.github.io/DiffQFT/).
