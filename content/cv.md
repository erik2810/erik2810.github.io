---
title: "Curriculum Vitae"
subtitle: "Erik Löffelholz"
description: "Academic CV — Erik Löffelholz"
layout: "single"
hide_title: true
---

<div class="acv">

<header class="acv-header">
    <h1>Erik Löffelholz</h1>
    <div class="acv-contact">
        <span>Leipzig, Germany</span>
        <span><a href="mailto:eriklfholz@googlemail.com">eriklfholz@googlemail.com</a></span>
        <span><a href="https://github.com/erik2810">github.com/erik2810</a></span>
        <span><a href="https://erik2810.github.io">erik2810.github.io</a></span>
    </div>
    <div class="acv-download">
        <span class="acv-download-label">Printable CV</span>
        <a href="/assets/cv-en-academic.html" class="btn-secondary" target="_blank">EN &middot; Academic</a>
        <a href="/assets/cv-en-industry.html" class="btn-secondary" target="_blank">EN &middot; Industry</a>
        <a href="/assets/cv-de-academic.html" class="btn-secondary" target="_blank">DE &middot; Academic</a>
        <a href="/assets/cv-de-industry.html" class="btn-secondary" target="_blank">DE &middot; Industry</a>
    </div>
</header>

<section class="acv-section">
    <h2>Personal Profile & Research Interests</h2>
    <p>
        Master's graduate in Mathematical Physics with a strong foundation in continuous-discrete
        interactions and differential geometry. Currently specializing in Graph Machine Learning and
        physics-inspired generative modeling. Passionate about understanding how complex structure
        emerges from local constraints by integrating variational principles, energy-based modeling,
        and structural priors. Applied experience spans joint discrete-continuous diffusion models,
        differentiable physics simulation, discrete differential geometry, mesh embeddings into curved
        spaces, rigorous metric evaluation, and from-scratch gradient-based optimization.
    </p>
</section>

<section class="acv-section">
    <h2>Education</h2>
    <div class="acv-entry">
        <div class="acv-entry-row">
            <div class="acv-entry-date">Oct 2021 – Sep 2025</div>
            <div class="acv-entry-body">
                <div class="acv-entry-title">M.Sc. Mathematical Physics</div>
                <div class="acv-entry-inst">Universität Leipzig &middot; Faculty of Physics and Earth System Sciences</div>
                <div class="acv-entry-detail">Selected Coursework: Advanced PDE and Analysis &middot; Differential Geometry &middot; Quantum Field Theory &middot; General Relativity &middot; Group Theory</div>
            </div>
        </div>
    </div>
    <div class="acv-entry">
        <div class="acv-entry-row">
            <div class="acv-entry-date">Oct 2018 – Mar 2022</div>
            <div class="acv-entry-body">
                <div class="acv-entry-title">B.Sc. Physics</div>
                <div class="acv-entry-inst">Universität Leipzig &middot; Faculty of Physics and Earth System Sciences</div>
            </div>
        </div>
    </div>
    <div class="acv-entry">
        <div class="acv-entry-row">
            <div class="acv-entry-date">Aug 2010 – Jun 2018</div>
            <div class="acv-entry-body">
                <div class="acv-entry-title">Abitur</div>
                <div class="acv-entry-inst">Luther-Melanchthon-Gymnasium, Lutherstadt Wittenberg</div>
            </div>
        </div>
    </div>
</section>

<section class="acv-section">
    <h2>Research Experience</h2>
    <div class="acv-entry">
        <div class="acv-entry-row">
            <div class="acv-entry-date">Apr 2025 – May 2026</div>
            <div class="acv-entry-body">
                <div class="acv-entry-title">Scientist</div>
                <div class="acv-entry-inst">Max Planck Institute for Mathematics in the Sciences, Leipzig, Germany</div>
                <div class="acv-entry-detail">Joined as a student research assistant (Wissenschaftliche Hilfskraft) and was promoted to Scientist for the final period (Apr&ndash;May 2026).</div>
                <ul class="acv-entry-list">
                    <li>Built GPU-accelerated tooling (PyTorch &middot; Three.js) for embedding discrete meshes into Riemannian manifolds &mdash; Euclidean, spherical and hyperbolic spaces &mdash; via spring&ndash;mass energy minimization with analytic energy differentials; the computational basis for the co-authored Bridges 2026 paper on illustrating hyperbolic surfaces.</li>
                    <li>Implemented a discrete differential geometry library: cotangent Laplacians, mass matrices, Gaussian/mean curvature, heat-method geodesic distances, isotropic remeshing and dihedral-angle bending energy across CUDA, MPS and CPU backends.</li>
                    <li>Developed Ricci-flow surface evolution and procedural strand/weave generation on curved surfaces using half-edge topology, with real-time interactive 3D visualization.</li>
                    <li>Engineered differentiable mesh-based physics simulators with a binary WebSocket protocol (10&ndash;20&times; faster than JSON) streaming PyTorch state to browser frontends.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="acv-entry">
        <div class="acv-entry-row">
            <div class="acv-entry-date">2025 – Present</div>
            <div class="acv-entry-body">
                <div class="acv-entry-title">Independent Researcher & Developer</div>
                <div class="acv-entry-inst">Graph ML, Computational Geometry & Differentiable Physics</div>
                <ul class="acv-entry-list">
                    <li>Built a from-scratch graph ML framework in pure PyTorch (no PyG/DGL) for spatial generation of 3D tree morphologies &mdash; joint discrete&ndash;continuous diffusion and autoregressive spatial-tree VAEs over graph topology and 3D node positions, with Sholl-analysis and spatial-MMD evaluation.</li>
                    <li>Developed DiffQFT, a differentiable holographic QFT framework in Euclidean AdS<sub>2</sub>: Witten-diagram Monte Carlo integration through PyTorch autograd, neural surrogates and a PINN for the Klein&ndash;Gordon equation.</li>
                    <li>Implemented a PINN solver for ten classical PDEs and browser-based differentiable-physics demos &mdash; a from-scratch neural ODE learning chaotic Lorenz dynamics, and real-time particle/cloth simulation with an optional PyTorch backend.</li>
                    <li>Built practical expertise with agentic coding models and LLM-assisted development workflows.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="acv-entry">
        <div class="acv-entry-row">
            <div class="acv-entry-date">2025 – Present</div>
            <div class="acv-entry-body">
                <div class="acv-entry-title">Subject-Matter Expert — STEM & Coding</div>
                <div class="acv-entry-inst">Outlier.ai &middot; AI Training & Model Evaluation</div>
                <ul class="acv-entry-list">
                    <li>Author and review graduate-level mathematics, physics and science prompts and solutions for large-language-model training.</li>
                    <li>Evaluate, rank and compare model outputs (RLHF) for correctness, reasoning quality and helpfulness.</li>
                    <li>Complete coding and code-review tasks across Python, C++, JavaScript and front-end coding.</li>
                    <li>Contribute German-language (de-DE) prompt and audio-prompt tasks.</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="acv-section">
    <h2>Teaching & Academic Service</h2>
    <div class="acv-entry">
        <div class="acv-entry-row">
            <div class="acv-entry-date">Mar 2024 – Feb 2025</div>
            <div class="acv-entry-body">
                <div class="acv-entry-title">Working Student — Mathematics Editorial</div>
                <div class="acv-entry-inst">Ernst Klett Verlag GmbH, Leipzig</div>
                <ul class="acv-entry-list">
                    <li>Conducted technical and editorial reviews of mathematical content, ensuring structural clarity and pedagogical accuracy for educational publications.</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!--<section class="acv-section">
    <h2>Selected Coursework</h2>
    <table class="acv-table">
        <thead>
            <tr>
                <th>Course</th>
                <th>Grade</th>
                <th>ECTS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Advanced Analysis — PDE</td>
                <td><strong>1.0</strong></td>
                <td>10</td>
            </tr>
            <tr>
                <td>General Relativity</td>
                <td><strong>1.0</strong></td>
                <td>10</td>
            </tr>
            <tr>
                <td>Relativistic Quantum Field Theory</td>
                <td><strong>1.3</strong></td>
                <td>10</td>
            </tr>
            <tr>
                <td>Mathematical Physics II</td>
                <td>1.7</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Quantum Field Theory and Gravity</td>
                <td>1.7</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Quantum Field Theory on Curved Spacetimes</td>
                <td>2.0</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Group Theory and Its Applications in Physics</td>
                <td>4.0</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Mathematical Physics I</td>
                <td>4.0</td>
                <td>10</td>
            </tr>
        </tbody>
    </table>
    <p class="acv-note">German grading scale: 1.0 (excellent) – 4.0 (sufficient). Grades 1.0–1.5 = very good.</p>
</section>-->

<section class="acv-section">
    <h2>Publications & Conferences</h2>
    <div class="acv-entry">
        <p style="margin-top: 0;">
            Fabian Lander, <strong>Erik Löffelholz</strong>, Diaaeldin Taha, Steve Trettel, Anna Wienhard.<br>
            <em>"Illustrating Hyperbolic Surfaces with Mesh Embeddings."</em><br>
            Submitted to the <strong>Bridges Conference 2026</strong> (Regular Papers Track). <em>Under Review</em>.
        </p>
    </div>
</section>

<section class="acv-section">
    <h2>Relevant Skills & Languages</h2>
    <div class="acv-skills-grid">
        <div>
            <h3>Programming</h3>
            <p>Python &middot; JavaScript &middot; TypeScript &middot; C++</p>
        </div>
        <div>
            <h3>Machine Learning</h3>
            <p>PyTorch (Autograd, PINNs, GNNs) &middot; Diffusion Models &middot; VAEs &middot; Neural ODEs</p>
        </div>
        <div>
            <h3>Scientific Computing</h3>
            <p>Numerical Integration (Runge-Kutta, Monte Carlo) &middot; Differentiable Simulation &middot; NumPy &middot; SciPy</p>
        </div>
        <div>
            <h3>Mathematical Methods</h3>
            <p>Functional analysis &middot; PDE theory &middot; variational methods &middot; differential geometry &middot; discrete differential geometry &middot; group theory</p>
        </div>
        <div>
            <h3>Tools & Workflow</h3>
            <p>Git &middot; Docker &middot; FastAPI &middot; LaTeX &middot; Agentic Coding Models &middot; AI Data Labeling &middot; RLHF / LLM Evaluation</p>
        </div>
        <div>
            <h3>Languages</h3>
            <p>German (native) &middot; English (C1 — full professional proficiency)</p>
        </div>
    </div>
</section>

<section class="acv-section">
    <h2>Referees</h2>
    <div class="acv-entry">
        <p style="margin-top: 0;">
            <strong>Dr. Diaaeldin Taha</strong><br>
            Research Group Leader (Mathematical Structures in AI)<br>
            Max Planck Institute for Mathematics in the Sciences, Leipzig<br>
            <a href="mailto:taha@mis.mpg.de">taha@mis.mpg.de</a>
        </p>
    </div>
</section>

<section class="acv-section">
    <h2>Selected Projects</h2>
    <div class="acv-projects">
        <div class="acv-project-entry">
            <strong>Mesh Embeddings & Discrete Differential Geometry</strong> — GPU mesh embedding into hyperbolic and spherical spaces via spring–mass energy minimization, with a discrete differential geometry operator library (cotangent Laplacian, curvature, heat-method geodesics). Computational basis for the Bridges 2026 paper.
        </div>
        <div class="acv-project-entry">
            <strong>Graph ML Lab</strong> — From-scratch implementations of GCN, GAT, graph VAE, discrete diffusion, and joint discrete-continuous diffusion over graph structure and 3D positions. PyTorch only, no external GNN libraries. <a href="https://github.com/erik2810/ml-projects">github.com/erik2810/ml-projects</a>
        </div>
        <div class="acv-project-entry">
            <strong>DiffQFT</strong> — Differentiable quantum field theory computations in Euclidean AdS<sub>2</sub>. Witten diagram integration, neural surrogates, PINN solver for the Klein-Gordon equation. <a href="https://github.com/erik2810/DiffQFT">github.com/erik2810/DiffQFT</a>
        </div>
        <div class="acv-project-entry">
            <strong>Differentiable Physics Engine</strong> — Neural ODE learning chaotic Lorenz dynamics from scratch in the browser. From-scratch backpropagation and Adam optimizer in JavaScript. <a href="https://github.com/erik2810/differentiable-physics-engine">github.com/erik2810/differentiable-physics-engine</a>
        </div>
    </div>
    <p class="acv-note">Full project portfolio with live demos at <a href="https://erik2810.github.io/projects/">erik2810.github.io/projects</a></p>
</section>

</div>
