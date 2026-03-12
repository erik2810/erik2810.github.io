---
title: "On Metrics for Embedded Tree-Like Graphs"
date: 2026-03-01
draft: false
tags: ["Geometric Graphs", "Metrics", "Graph ML"]
summary: "Preliminary thoughts on how to rigorously compare tree-like structures embedded in 3D space — combining topological and geometric information into a single distance measure."
math: true
---

How do we compare two trees embedded in three-dimensional space?

This question sits at the heart of several problems I care about: evaluating generative models for branching structures, defining loss functions for graph prediction tasks, and understanding what it means for two geometric graphs to be "similar."

## The Problem

A tree-like graph $T = (V, E)$ embedded via $X: V \to \mathbb{R}^3$ carries two distinct types of information:

- **Topological structure:** branching pattern, depth, degree sequence
- **Geometric embedding:** edge lengths, angles, curvature of paths

Standard graph distances (e.g. graph edit distance) ignore geometry. Standard geometric distances (e.g. Hausdorff) ignore topology. Neither alone captures the full structure.

## Desiderata

A good metric $d(T_1, T_2)$ for embedded trees should:

1. Be **zero** if and only if the trees are isomorphic with identical embeddings
2. Respect **topological invariance** — small geometric perturbations should yield small distances
3. Capture **structural differences** — adding or removing a branch should be costly
4. Be **computable** — at least approximately, for practical use in ML pipelines

## Directions

Several approaches seem promising:

- **Persistence-based methods:** Using topological data analysis to extract persistence diagrams from the embedded tree, then comparing diagrams via Wasserstein or bottleneck distance.

- **Spectral methods:** Comparing Laplacian spectra of the trees, potentially weighted by geometric information.

- **Optimal transport on trees:** Defining a transport plan between the node distributions of two trees, respecting both topology and geometry.

- **Energy-based comparison:** Defining an energy functional $E(T, X)$ and comparing trees via their energy landscapes.

Each approach has trade-offs between expressiveness, computational cost, and differentiability — the last being crucial for integration into learning pipelines.

## Next Steps

I plan to formalize these ideas and test them on synthetic branching structures. The goal is a metric that is both mathematically rigorous and practically useful as a loss function for geometric graph generation.

*This is an ongoing research note. More to follow.*
