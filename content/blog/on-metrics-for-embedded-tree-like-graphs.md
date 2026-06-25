---
title: "On Metrics for Embedded Tree-Like Graphs"
date: 2026-03-01
draft: false
tags: ["Geometric Graphs", "Metrics", "Graph ML"]
summary: "Preliminary thoughts on how to compare tree-like structures embedded in 3D space by combining topological and geometric information into a single distance."
math: true
---

How do we compare two trees embedded in three-dimensional space?

This comes up in a few problems I care about: evaluating generative models for branching structures, defining loss functions for graph prediction, and pinning down what it means for two geometric graphs to be "similar."

## The problem

A tree-like graph $T = (V, E)$ embedded via $X: V \to \mathbb{R}^3$ carries two kinds of information. There is the topological structure (branching pattern, depth, degree sequence) and the geometric embedding (edge lengths, angles, curvature of paths).

Standard graph distances like graph edit distance ignore geometry. Standard geometric distances like Hausdorff ignore topology. Neither one captures the whole structure on its own.

## Desiderata

A good metric $d(T_1, T_2)$ for embedded trees should do four things. It should be zero exactly when the trees are isomorphic with identical embeddings. It should respect topological invariance, so small geometric perturbations give small distances. It should make structural differences costly, so adding or removing a branch moves the distance a lot. And it should be computable, at least approximately, to be usable in an ML pipeline.

## Directions

A few approaches look promising:

- Persistence-based methods: use topological data analysis to extract persistence diagrams from the embedded tree, then compare diagrams with Wasserstein or bottleneck distance.
- Spectral methods: compare Laplacian spectra of the trees, optionally weighted by geometric information.
- Optimal transport on trees: define a transport plan between the node distributions of two trees that respects both topology and geometry.
- Energy-based comparison: define an energy functional $E(T, X)$ and compare trees through their energy landscapes.

Each one trades off expressiveness, computational cost, and differentiability. That last property matters most to me, since it decides whether the metric can sit inside a learning pipeline.

## Next steps

I want to formalize these ideas and test them on synthetic branching structures. The goal is a metric that is mathematically clean and also works as a loss function for geometric graph generation.

*This is an ongoing research note. More to follow.*
