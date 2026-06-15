/**
 * Hero background: generative 3D spatial tree graph.
 *
 * A stochastic branching tree is grown node by node, held, faded out and
 * regrown — a literal rendering of the research subject (spatial graph
 * generation for 3D tree morphologies).
 */

import * as THREE from 'three';

const canvas = document.getElementById('hero-canvas');
if (canvas) init(canvas);

function init(canvas) {
    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
        canvas.remove();
        return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 1.2, 11);
    camera.lookAt(0, 1.2, 0);

    const group = new THREE.Group();
    scene.add(group);

    /* ---------------------------------------------------------------------
       Tree generation: recursive stochastic branching in 3D
       --------------------------------------------------------------------- */

    const MAX_NODES = 360;

    function growTree() {
        const nodes = [];   // { pos: Vector3, depth, phase }
        const edges = [];   // [parentIndex, childIndex] in creation order

        const root = { pos: new THREE.Vector3(0, -2.4, 0), depth: 0, phase: Math.random() * Math.PI * 2 };
        nodes.push(root);

        // Frontier of growing tips: { index, dir, segment }
        const tips = [{
            index: 0,
            dir: new THREE.Vector3(0, 1, 0),
            segment: 0,
        }];

        while (nodes.length < MAX_NODES && tips.length > 0) {
            const tip = tips.splice(Math.floor(Math.random() * tips.length), 1)[0];
            const parent = nodes[tip.index];

            const branches = tip.segment > 2 && Math.random() < 0.38 ? 2 : 1;
            for (let b = 0; b < branches; b++) {
                if (nodes.length >= MAX_NODES) break;

                const dir = tip.dir.clone();
                const spread = branches > 1 ? 0.85 : 0.28;
                dir.x += (Math.random() - 0.5) * spread;
                dir.y += (Math.random() - 0.5) * spread * 0.55 + 0.04;
                dir.z += (Math.random() - 0.5) * spread;
                dir.normalize();

                const len = 0.34 * Math.pow(0.985, tip.segment);
                const pos = parent.pos.clone().addScaledVector(dir, len);

                const node = {
                    pos,
                    depth: parent.depth + 1,
                    phase: Math.random() * Math.PI * 2,
                };
                nodes.push(node);
                const childIndex = nodes.length - 1;
                edges.push([tip.index, childIndex]);

                // Tips die out with age so the crown stays bounded
                if (tip.segment < 26 && Math.random() > 0.045) {
                    tips.push({ index: childIndex, dir, segment: tip.segment + 1 });
                }
            }
        }

        return { nodes, edges };
    }

    /* ---------------------------------------------------------------------
       Geometry buffers
       --------------------------------------------------------------------- */

    let tree = growTree();

    const pointPositions = new Float32Array(MAX_NODES * 3);
    const pointColors = new Float32Array(MAX_NODES * 3);
    const linePositions = new Float32Array(MAX_NODES * 2 * 3);

    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
    pointGeo.setAttribute('color', new THREE.BufferAttribute(pointColors, 3));

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const pointMat = new THREE.PointsMaterial({
        size: 0.055,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        sizeAttenuation: true,
    });

    const lineMat = new THREE.LineBasicMaterial({
        color: 0xe8e8e4,
        transparent: true,
        opacity: 0.28,
    });

    const points = new THREE.Points(pointGeo, pointMat);
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines, points);

    const phosphor = new THREE.Color(0xe8e8e4);
    const red = new THREE.Color(0xff2a2a);

    function paintColors() {
        for (let i = 0; i < tree.nodes.length; i++) {
            // Sparse red "active" nodes; root is always red
            const c = (i === 0 || Math.random() < 0.05) ? red : phosphor;
            pointColors[i * 3] = c.r;
            pointColors[i * 3 + 1] = c.g;
            pointColors[i * 3 + 2] = c.b;
        }
        pointGeo.attributes.color.needsUpdate = true;
    }

    paintColors();

    /* Sway: nodes oscillate around their grown position, scaled by depth */
    function writePositions(time) {
        const sway = reducedMotion ? 0 : 0.018;
        for (let i = 0; i < tree.nodes.length; i++) {
            const n = tree.nodes[i];
            const a = sway * Math.min(n.depth, 20);
            pointPositions[i * 3] = n.pos.x + Math.sin(time * 0.6 + n.phase) * a;
            pointPositions[i * 3 + 1] = n.pos.y + Math.sin(time * 0.45 + n.phase * 1.7) * a * 0.4;
            pointPositions[i * 3 + 2] = n.pos.z + Math.cos(time * 0.5 + n.phase) * a;
        }
        for (let e = 0; e < tree.edges.length; e++) {
            const [a, b] = tree.edges[e];
            linePositions[e * 6] = pointPositions[a * 3];
            linePositions[e * 6 + 1] = pointPositions[a * 3 + 1];
            linePositions[e * 6 + 2] = pointPositions[a * 3 + 2];
            linePositions[e * 6 + 3] = pointPositions[b * 3];
            linePositions[e * 6 + 4] = pointPositions[b * 3 + 1];
            linePositions[e * 6 + 5] = pointPositions[b * 3 + 2];
        }
        pointGeo.attributes.position.needsUpdate = true;
        lineGeo.attributes.position.needsUpdate = true;
    }

    /* ---------------------------------------------------------------------
       Layout: keep the tree right of the hero text on wide screens
       --------------------------------------------------------------------- */

    function resize() {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        if (w === 0 || h === 0) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        if (w > 900) {
            group.position.set(3.4, 0, 0);
            pointMat.opacity = 0.95;
            lineMat.opacity = 0.28;
        } else {
            group.position.set(0, 0, -2);
            pointMat.opacity = 0.4;
            lineMat.opacity = 0.12;
        }
    }

    resize();
    window.addEventListener('resize', resize);

    /* ---------------------------------------------------------------------
       Animation loop: grow → hold → fade → regrow
       --------------------------------------------------------------------- */

    const GROW_S = 13;
    const HOLD_S = 7;
    const FADE_S = 1.6;
    const CYCLE_S = GROW_S + HOLD_S + FADE_S;

    let visible = true;
    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
            visible = entries[0].isIntersecting;
        }).observe(canvas);
    }

    const clock = new THREE.Clock();
    let cycleTime = 0;

    function frame() {
        requestAnimationFrame(frame);
        if (!visible || document.hidden) {
            clock.getDelta();
            return;
        }

        const dt = clock.getDelta();
        const t = clock.elapsedTime;
        cycleTime += dt;

        let groupOpacity = 1;
        if (reducedMotion) {
            // Static: fully grown, no cycling
            pointGeo.setDrawRange(0, tree.nodes.length);
            lineGeo.setDrawRange(0, tree.edges.length * 2);
        } else if (cycleTime < GROW_S) {
            // Ease-out growth reveal
            const p = cycleTime / GROW_S;
            const eased = 1 - Math.pow(1 - p, 2.2);
            pointGeo.setDrawRange(0, Math.floor(eased * tree.nodes.length));
            lineGeo.setDrawRange(0, Math.floor(eased * tree.edges.length) * 2);
        } else if (cycleTime < GROW_S + HOLD_S) {
            pointGeo.setDrawRange(0, tree.nodes.length);
            lineGeo.setDrawRange(0, tree.edges.length * 2);
        } else if (cycleTime < CYCLE_S) {
            groupOpacity = 1 - (cycleTime - GROW_S - HOLD_S) / FADE_S;
        } else {
            tree = growTree();
            paintColors();
            cycleTime = 0;
        }

        pointMat.opacity = (canvas.clientWidth > 900 ? 0.95 : 0.4) * groupOpacity;
        lineMat.opacity = (canvas.clientWidth > 900 ? 0.28 : 0.12) * groupOpacity;

        writePositions(t);
        group.rotation.y = reducedMotion ? 0.4 : t * 0.08;

        renderer.render(scene, camera);
    }

    if (reducedMotion) {
        // Render a single static frame
        writePositions(0);
        pointGeo.setDrawRange(0, tree.nodes.length);
        lineGeo.setDrawRange(0, tree.edges.length * 2);
        group.rotation.y = 0.4;
        renderer.render(scene, camera);
    } else {
        frame();
    }
}
