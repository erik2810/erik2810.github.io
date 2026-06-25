---
title: "Curriculum Vitae"
subtitle: "Erik Löffelholz"
description: "CV of Erik Löffelholz, Mathematical Physics M.Sc."
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
        Mathematical Physics M.Sc. with a background in differential geometry, PDE theory and field
        theory, now working mainly on scientific software and machine learning. I am as comfortable
        with the maths as with the code: I have built differentiable physics simulators, graph
        generative models, and a discrete differential geometry library, most of it written from
        scratch in PyTorch. My recurring interest is how structured systems grow out of simple local
        rules.
    </p>
</section>

<section class="acv-section">
    <h2>Education</h2>
    <div class="acv-entry">
        <div class="acv-entry-row">
            <div class="acv-entry-date">Oct 2021 - Sep 2025</div>
            <div class="acv-entry-body">
                <div class="acv-entry-title">M.Sc. Mathematical Physics</div>
                <div class="acv-entry-inst">Universität Leipzig &middot; Faculty of Physics and Earth System Sciences</div>
                <div class="acv-entry-detail">Selected coursework: Advanced PDE and Analysis &middot; Differential Geometry &middot; Quantum Field Theory &middot; General Relativity &middot; Group Theory</div>
            </div>
        </div>
    </div>
    <div class="acv-entry">
        <div class="acv-entry-row">
            <div class="acv-entry-date">Oct 2018 - Mar 2022</div>
            <div class="acv-entry-body">
                <div class="acv-entry-title">B.Sc. Physics</div>
                <div class="acv-entry-inst">Universität Leipzig &middot; Faculty of Physics and Earth System Sciences</div>
            </div>
        </div>
    </div>
    <div class="acv-entry">
        <div class="acv-entry-row">
            <div class="acv-entry-date">Aug 2010 - Jun 2018</div>
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
            <div class="acv-entry-date">Apr 2025 - May 2026</div>
            <div class="acv-entry-body">
                <div class="acv-entry-title">Scientist</div>
                <div class="acv-entry-inst">Max Planck Institute for Mathematics in the Sciences, Leipzig, Germany</div>
                <div class="acv-entry-detail">Started as a student research assistant (Wissenschaftliche Hilfskraft) and was promoted to Scientist for the last two months.</div>
                <ul class="acv-entry-list">
                    <li>Built GPU-accelerated tooling in PyTorch and Three.js for embedding discrete meshes into Riemannian manifolds (Euclidean, spherical and hyperbolic spaces) by spring-mass energy minimization with analytic differentials. This became the computational basis for our co-authored Bridges 2026 paper on illustrating hyperbolic surfaces.</li>
                    <li>Implemented a discrete differential geometry library: cotangent Laplacians, mass matrices, Gaussian and mean curvature, heat-method geodesic distances, isotropic remeshing and dihedral-angle bending energy, running on CUDA, MPS and CPU.</li>
                    <li>Developed Ricci-flow surface evolution and procedural strand and weave generation on curved surfaces using a half-edge mesh, with interactive 3D visualization.</li>
                    <li>Wrote differentiable mesh-based physics simulators with a binary WebSocket protocol that streamed PyTorch state to the browser, roughly 10 to 20 times faster than JSON.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="acv-entry">
        <div class="acv-entry-row">
            <div class="acv-entry-date">2025 - Present</div>
            <div class="acv-entry-body">
                <div class="acv-entry-title">Independent Researcher & Developer</div>
                <div class="acv-entry-inst">Graph ML, Computational Geometry & Differentiable Physics</div>
                <ul class="acv-entry-list">
                    <li>Built a graph ML framework from scratch in pure PyTorch (no PyG or DGL) for generating 3D tree morphologies. It covers joint discrete-continuous diffusion and autoregressive spatial-tree VAEs over both graph topology and 3D node positions, evaluated with Sholl analysis and spatial MMD.</li>
                    <li>Developed DiffQFT, a differentiable holographic QFT framework in Euclidean AdS<sub>2</sub>: Witten-diagram Monte Carlo integration through PyTorch autograd, neural surrogates, and a PINN for the Klein-Gordon equation.</li>
                    <li>Implemented a PINN solver for ten classical PDEs, plus browser-based physics demos: a neural ODE that learns chaotic Lorenz dynamics from scratch, and a real-time particle and cloth simulation with an optional PyTorch backend.</li>
                    <li>Work fluently with agentic coding models and LLM-assisted development.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="acv-entry">
        <div class="acv-entry-row">
            <div class="acv-entry-date">2025 - Present</div>
            <div class="acv-entry-body">
                <div class="acv-entry-title">Subject-Matter Expert, STEM & Coding</div>
                <div class="acv-entry-inst">Outlier.ai &middot; AI Training & Model Evaluation</div>
                <ul class="acv-entry-list">
                    <li>Write and review graduate-level mathematics, physics and science prompts and solutions for large-language-model training.</li>
                    <li>Rate and compare model outputs (RLHF) for correctness, reasoning quality and helpfulness.</li>
                    <li>Do coding and code-review tasks in Python, C++, JavaScript and front-end coding.</li>
                    <li>Contribute German (de-DE) prompt and audio-prompt tasks.</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="acv-section">
    <h2>Teaching & Academic Service</h2>
    <div class="acv-entry">
        <div class="acv-entry-row">
            <div class="acv-entry-date">Mar 2024 - Feb 2025</div>
            <div class="acv-entry-body">
                <div class="acv-entry-title">Working Student, Mathematics Editorial</div>
                <div class="acv-entry-inst">Ernst Klett Verlag GmbH, Leipzig</div>
                <ul class="acv-entry-list">
                    <li>Reviewed mathematics content for school textbooks, checking it for technical correctness and clarity.</li>
                </ul>
            </div>
        </div>
    </div>
</section>

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
            <p>German (native) &middot; English (C1, full professional proficiency)</p>
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
            <strong>Mesh Embeddings & Discrete Differential Geometry.</strong> GPU mesh embedding into hyperbolic and spherical spaces by spring-mass energy minimization, with a discrete differential geometry operator library (cotangent Laplacian, curvature, heat-method geodesics). Computational basis for the Bridges 2026 paper.
        </div>
        <div class="acv-project-entry">
            <strong>Graph ML Lab.</strong> GCN, GAT, graph VAE, discrete diffusion, and joint discrete-continuous diffusion over graph structure and 3D positions, all from scratch. PyTorch only, no external GNN libraries. <a href="https://github.com/erik2810/ml-projects">github.com/erik2810/ml-projects</a>
        </div>
        <div class="acv-project-entry">
            <strong>DiffQFT.</strong> Differentiable quantum field theory in Euclidean AdS<sub>2</sub>: Witten-diagram integration, neural surrogates, and a PINN solver for the Klein-Gordon equation. <a href="https://github.com/erik2810/DiffQFT">github.com/erik2810/DiffQFT</a>
        </div>
        <div class="acv-project-entry">
            <strong>Differentiable Physics Engine.</strong> A neural ODE that learns chaotic Lorenz dynamics from scratch in the browser, with backpropagation and an Adam optimizer written by hand in JavaScript. <a href="https://github.com/erik2810/differentiable-physics-engine">github.com/erik2810/differentiable-physics-engine</a>
        </div>
    </div>
    <p class="acv-note">Full project portfolio with live demos at <a href="https://erik2810.github.io/projects/">erik2810.github.io/projects</a></p>
</section>

</div>
