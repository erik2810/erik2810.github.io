---
title: "Projects"
subtitle: "Repositories & Live Demos"
description: "Research projects, simulations and scientific tools — Erik Löffelholz"
layout: "single"
---

<section class="project-section">
<h2 id="graph-ml" class="section-heading">Graph Machine Learning & Generative Modeling</h2>

<div class="project-card featured">
    <div class="project-badge live-badge">Live Demo</div>
    <div class="project-badge">Core Research</div>
    <h3>Graph ML Lab: 3D Spatial Graph Generation</h3>
    <p>
        From-scratch implementations of graph machine learning models using raw PyTorch tensor operations.
        The core focus is on <strong>spatial graph generation for 3D tree morphologies</strong>. 
        This includes a conditional graph VAE, autoregressive spatial tree generation, and joint discrete-continuous diffusion models that operate simultaneously over graph topology and 3D node positions.
    </p>
    <div class="project-highlights">
        <h4>Technical Highlights</h4>
        <ul>
            <li>Autoregressive spatial tree VAE with joint topology–geometry sampling</li>
            <li>Joint discrete-continuous diffusion: simultaneous denoising of graph structure and 3D positions</li>
            <li>Graph VAE and discrete denoising diffusion for complex topology generation</li>
            <li>GCN and GAT layers with multi-head attention, built without external GNN libraries</li>
        </ul>
    </div>
    <div class="project-tech">
        <span>PyTorch</span>
        <span>Graph Neural Networks</span>
        <span>Diffusion Models</span>
        <span>Discrete-Continuous ML</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/erik2810/ml-projects" class="btn-primary">Source Code</a>
        <a href="https://erik2810.github.io/ml-projects/" class="btn-secondary" target="_blank" rel="noopener">Live Demo</a>
    </div>
</div>

</section>

<section class="project-section">
<h2 id="simulation" class="section-heading">Differentiable Simulation & Physics</h2>

<div class="project-card featured">
    <div class="project-badge">Core Research</div>
    <h3>Mesh-Based Differentiable Physics Simulator</h3>
    <p>
        A fully differentiable mesh-based physics simulator implemented entirely in PyTorch. 
        It initializes particle–spring systems from mesh topology, encodes structural relationships as interaction rules, and models physical forces via energy-based formulations.
    </p>
    <div class="project-highlights">
        <h4>Technical Highlights</h4>
        <ul>
            <li>Mesh topology to graph representation mapping</li>
            <li>Energy-based formulation for emergent structural dynamics</li>
            <li>End-to-end backpropagation through continuous dynamics</li>
        </ul>
    </div>
    <div class="project-tech">
        <span>PyTorch</span>
        <span>Differentiable Simulation</span>
        <span>Topology</span>
    </div>
</div>

<div class="project-card">
    <h3>Knitted Models</h3>
    <p>
        Generates woven, knitted, and chain-mail strand patterns on quad meshes.
        Takes a mesh with quadrilateral faces, analyzes its topology via half-edge data structures,
        traces continuous strand paths, and applies geometric design patterns to produce 3D curves
        rendered as tubes or exported as OBJ files.
    </p>
    <div class="project-highlights">
        <h4>Technical Highlights</h4>
        <ul>
            <li>Half-edge mesh data structure for topological traversal</li>
            <li>Catmull-Rom and Hermite spline interpolation for smooth strand geometry</li>
            <li>Weave, knit-loop, and chain-mail pattern generation from quad topology</li>
            <li>GPU path tracing for realistic rendering</li>
        </ul>
    </div>
    <div class="project-tech">
        <span>TypeScript</span>
        <span>Three.js</span>
        <span>Vite</span>
        <span>Computational Geometry</span>
    </div>
</div>

<div class="project-card">
    <div class="project-badge live-badge">Live Demo</div>
    <h3>Traer Physics Simulations</h3>
    <p>
        Real-time particle physics simulations inspired by Traer Physics.
        Five simulation modes: spring-connected triangle, inverse-square orbital attraction,
        dangling rope chain, 12&times;12 cloth grid with structural/shear/bending springs,
        and a 5&times;5&times;5 3D elastic mesh. Runs standalone in the browser or with
        a PyTorch backend streaming over WebSocket at 60 Hz.
    </p>
    <div class="project-highlights">
        <h4>Technical Highlights</h4>
        <ul>
            <li>Float32Array buffers for high-performance browser-side computation</li>
            <li>Structural, shear, and bending spring constraints for cloth simulation</li>
            <li>Optional PyTorch backend with binary WebSocket protocol at 60 Hz</li>
            <li>Interactive parameter control via lil-gui</li>
        </ul>
    </div>
    <div class="project-tech">
        <span>TypeScript</span>
        <span>Three.js</span>
        <span>PyTorch</span>
        <span>WebSocket</span>
        <span>Vite</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/erik2810/traerphysics-js" class="btn-primary">Source Code</a>
        <a href="https://erik2810.github.io/traerphysics-js/" class="btn-secondary" target="_blank" rel="noopener">Live Demo</a>
    </div>
</div>

<div class="project-card">
    <h3>Ricci Flow on Surfaces of Revolution</h3>
    <p>
        Interactive visualization of Ricci flow — the geometric evolution equation that deforms Riemannian metrics
        toward constant curvature. Based on the Rubinstein–Sinclair formulation for surfaces of revolution.
        Real-time 3D rendering with curvature-based coloring, multiple presets (sphere, dumbbell, peanut),
        and a Python numerical solver using finite differences with Fourier filtering for stability.
    </p>
    <div class="project-highlights">
        <h4>Technical Highlights</h4>
        <ul>
            <li>Finite-difference PDE solver with Fourier filtering and reparametrization</li>
            <li>WebSocket streaming from Python backend to Three.js frontend</li>
            <li>Curvature coloring and cross-section visualization</li>
        </ul>
    </div>
    <div class="project-tech">
        <span>Python</span>
        <span>NumPy/SciPy</span>
        <span>Three.js</span>
        <span>WebSocket</span>
    </div>
</div>

</section>

<section class="project-section">
<h2 id="scientific-computing" class="section-heading">Mathematical Physics & Scientific Computing</h2>

<div class="project-card featured">
    <div class="project-badge live-badge">Live Demo</div>
    <div class="project-badge">Core Research</div>
    <h3>DiffQFT: Differentiable Quantum Field Theory</h3>
    <p>
        Differentiable holographic computations in Euclidean AdS<sub>2</sub> with full automatic differentiation.
        Computes Witten diagram integrals, bulk propagators, and correlation functions
        for the Sine-Gordon theory. Trains neural surrogates that approximate expensive Monte Carlo
        integrations. Includes a PINN for the Klein-Gordon equation and an inverse discovery
        workflow to recover coupling constants from boundary data.
    </p>
    <div class="project-highlights">
        <h4>Technical Highlights</h4>
        <ul>
            <li>Custom autograd Functions for hyperbolic-space integration</li>
            <li>Neural surrogate training to replace Monte Carlo evaluation</li>
            <li>PINN solver for the Klein-Gordon equation on AdS</li>
            <li>Inverse holography: recovering bulk couplings from boundary observables</li>
        </ul>
    </div>
    <div class="project-tech">
        <span>PyTorch</span>
        <span>AdS/CFT</span>
        <span>PINNs</span>
        <span>Monte Carlo</span>
        <span>FastAPI</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/erik2810/DiffQFT" class="btn-primary">Source Code</a>
        <a href="https://erik2810.github.io/DiffQFT/" class="btn-secondary" target="_blank" rel="noopener">Live Demo</a>
    </div>
</div>

<div class="project-card">
    <div class="project-badge live-badge">Live Demo</div>
    <h3>Neural ODE: Lorenz Attractor</h3>
    <p>
        A neural network that learns chaotic dynamics from scratch.
        The green trail traces the true Lorenz attractor via a 4th-order Runge-Kutta integrator; the red trail is a 3-layer MLP trained on-the-fly with backpropagation and Adam — all implemented as raw matrix math in JavaScript, no ML libraries.
    </p>
    <div class="project-highlights">
        <h4>Technical Highlights</h4>
        <ul>
            <li>From-scratch neural network: matrix class, He initialization, forward/backward pass, Adam optimizer</li>
            <li>RK4 numerical integrator for ground-truth chaotic trajectories</li>
            <li>Real-time training loop visible in the browser</li>
            <li>Companion PyTorch prototype backpropagating through the RK4 solver</li>
        </ul>
    </div>
    <div class="project-tech">
        <span>Neural ODEs</span>
        <span>PyTorch</span>
        <span>JavaScript</span>
        <span>Three.js</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/erik2810/differentiable-physics-engine" class="btn-primary">Source Code</a>
        <a href="https://erik2810.github.io/differentiable-physics-engine/" class="btn-secondary" target="_blank" rel="noopener">Open Demo</a>
    </div>
</div>

<div class="project-card">
    <div class="project-badge live-badge">Live Demo</div>
    <h3>PINN Solver</h3>
    <p>
        Physics-Informed Neural Network solver for 10 partial differential equations — Burgers, Heat, Wave,
        Advection, Convection-Diffusion, Reaction-Diffusion, Allen-Cahn, KdV, Burgers Shock, and Cubic NLS.
        The static demo runs inference entirely client-side in JavaScript with pre-trained models.
    </p>
    <div class="project-highlights">
        <h4>Technical Highlights</h4>
        <ul>
            <li>Physics-informed loss: PDE residual and boundary/initial conditions</li>
            <li>Client-side inference in JavaScript — no backend required</li>
            <li>Training CLI for custom equations and hyperparameter sweeps</li>
        </ul>
    </div>
    <div class="project-tech">
        <span>PyTorch</span>
        <span>PINNs</span>
        <span>JavaScript</span>
        <span>FastAPI</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/erik2810/pde-solver" class="btn-primary">Source Code</a>
        <a href="https://erik2810.github.io/pde-solver/" class="btn-secondary" target="_blank" rel="noopener">Live Demo</a>
    </div>
</div>

<div class="project-card">
    <div class="project-badge live-badge">Live Demo</div>
    <h3>Integration Visualizer</h3>
    <p>
        Computes and visualizes integrals from basic definite integrals to surface integrals and flux.
        Covers single, double, triple, line, surface, and flux integrals using symbolic (SymPy),
        numerical (SciPy), and Monte Carlo (PyTorch) methods. Verifies Green's, Stokes', and
        Divergence theorems with step-by-step solutions.
    </p>
    <div class="project-highlights">
        <h4>Technical Highlights</h4>
        <ul>
            <li>Interactive 3D visualization of surfaces, vector fields, and integration regions</li>
            <li>Symbolic, numerical, and Monte Carlo computation pipelines</li>
            <li>Theorem verification: Green, Stokes, Divergence</li>
        </ul>
    </div>
    <div class="project-tech">
        <span>React</span>
        <span>Three.js</span>
        <span>SymPy</span>
        <span>PyTorch</span>
        <span>FastAPI</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/erik2810/integration-visualizer" class="btn-primary">Source Code</a>
        <a href="https://erik2810.github.io/integration-visualizer/" class="btn-secondary" target="_blank" rel="noopener">Live Demo</a>
    </div>
</div>

<!--<div class="project-card">
    <h3>Physics & Mathematics App</h3>
    <p>
        Interactive learning tool covering expression evaluation, physics formula calculators
        (kinematics, energy, force, momentum), matrix and statistics tools, geometry calculators,
        interactive simulations (pendulum, wave), molecular viewer, function plotter,
        and vector field visualizations (electric, magnetic, gravitational).
    </p>
    <div class="project-highlights">
        <h4>Technical Highlights</h4>
        <ul>
            <li>Symbolic expression parser and evaluator via math.js</li>
            <li>Vector field rendering: Coulomb, gravitational, Lorentz force</li>
            <li>Interactive pendulum and wave simulations</li>
        </ul>
    </div>
    <div class="project-tech">
        <span>React</span>
        <span>math.js</span>
        <span>Recharts</span>
        <span>KaTeX</span>
        <span>Tailwind CSS</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/erik2810/physics-math-app" class="btn-secondary">Source Code</a>
    </div>
</div>

</section>

<section class="project-section">
<h2 id="applications" class="section-heading">Applied Machine Learning</h2>

<div class="project-card">
    <h3>CS2 Tactics Assistant</h3>
    <p>
        Post-match and real-time tactical analysis for Counter-Strike 2.
        Parses demo files to evaluate movement, aim, and strategic decision-making.
        Features a 2D demo viewer with radar maps, movement analysis (counter-strafe, path efficiency),
        aim metrics (headshot rate, ADR, spray control), strategy evaluation (KAST, HLTV Rating 2.0),
        and Game State Integration for live coaching.
    </p>
    <div class="project-highlights">
        <h4>Technical Highlights</h4>
        <ul>
            <li>LSTM and attention-based models for movement pattern classification</li>
            <li>Demo file parsing with demoparser2 for full round reconstruction</li>
            <li>Real-time Game State Integration via WebSocket</li>
        </ul>
    </div>
    <div class="project-tech">
        <span>PyTorch</span>
        <span>LSTM</span>
        <span>Attention</span>
        <span>FastAPI</span>
        <span>WebSocket</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/erik2810/cs2-tactics-assistant" class="btn-secondary">Source Code</a>
    </div>
</div>-->

</section>