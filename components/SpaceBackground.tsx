"use client";

import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const loadScene = async () => {
      const THREE = await import("three");

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x020617, 1);
      containerRef.current!.appendChild(renderer.domElement);

      // Central energy core (glowing sphere)
      const coreGeometry = new THREE.SphereGeometry(1.5, 32, 32);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0xa78bfa,
        transparent: true,
        opacity: 0.9,
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      scene.add(core);

      const coreGlow = new THREE.PointLight(0xa78bfa, 2, 50);
      core.add(coreGlow);

      // Star particles
      const starCount = 1200;
      const starPositions = new Float32Array(starCount * 3);
      const starColors = new Float32Array(starCount * 3);
      const cyan = new THREE.Color(0x22d3ee);
      const purple = new THREE.Color(0x6d28d9);
      const white = new THREE.Color(0xffffff);

      for (let i = 0; i < starCount; i++) {
        const r = 15 + Math.random() * 80;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        starPositions[i * 3 + 2] = r * Math.cos(phi) - 20;
        const mix = Math.random();
        const c = mix < 0.33 ? cyan : mix < 0.66 ? purple : white;
        starColors[i * 3] = c.r;
        starColors[i * 3 + 1] = c.g;
        starColors[i * 3 + 2] = c.b;
      }

      // Circular glowing star texture (soft edge = bloom)
      const starCanvas = document.createElement("canvas");
      starCanvas.width = 64;
      starCanvas.height = 64;
      const ctx = starCanvas.getContext("2d")!;
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.2, "rgba(255,255,255,0.8)");
      gradient.addColorStop(0.5, "rgba(255,255,255,0.3)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      const starTexture = new THREE.CanvasTexture(starCanvas);
      starTexture.needsUpdate = true;

      const starGeometry = new THREE.BufferGeometry();
      starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
      starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
      const starMaterial = new THREE.PointsMaterial({
        size: 0.28,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true,
        map: starTexture,
        alphaMap: starTexture,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);

      // Neural lines (connect nearby stars)
      const positions = starGeometry.attributes.position.array as Float32Array;
      const linePoints: number[] = [];
      const maxDist = 12;
      for (let i = 0; i < Math.min(200, starCount); i += 2) {
        const i3 = i * 3;
        for (let j = i + 1; j < Math.min(i + 15, starCount); j++) {
          const j3 = j * 3;
          const dx = positions[i3] - positions[j3];
          const dy = positions[i3 + 1] - positions[j3 + 1];
          const dz = positions[i3 + 2] - positions[j3 + 2];
          if (dx * dx + dy * dy + dz * dz < maxDist * maxDist) {
            linePoints.push(positions[i3], positions[i3 + 1], positions[i3 + 2]);
            linePoints.push(positions[j3], positions[j3 + 1], positions[j3 + 2]);
          }
        }
      }
      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePoints, 3));
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x6d28d9,
        transparent: true,
        opacity: 0.15,
      });
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      // Orbiting planets
      const planetCount = 4;
      const planets: { mesh: { position: { x: number; y: number; z: number } }; radius: number; speed: number; phase: number }[] = [];
      const planetColors = [0x22d3ee, 0x2563eb, 0x6d28d9, 0xa78bfa];
      for (let i = 0; i < planetCount; i++) {
        const geo = new THREE.SphereGeometry(0.3 + Math.random() * 0.4, 16, 16);
        const mat = new THREE.MeshBasicMaterial({
          color: planetColors[i],
          transparent: true,
          opacity: 0.8,
        });
        const planet = new THREE.Mesh(geo, mat);
        const radius = 8 + i * 4 + Math.random() * 2;
        const speed = 0.02 + Math.random() * 0.02;
        const phase = (i / planetCount) * Math.PI * 2;
        planets.push({ mesh: planet, radius, speed, phase });
        scene.add(planet);
      }

      // Nebula fog (subtle)
      scene.fog = new THREE.FogExp2(0x020617, 0.015);

      let animationId: number;
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        const t = performance.now() * 0.001;
        core.rotation.y += 0.002;
        stars.rotation.y += 0.0002;
        lines.rotation.y += 0.0002;
        starMaterial.opacity = 0.7 + 0.25 * Math.sin(t * 1.5);
        planets.forEach(({ mesh, radius, speed, phase }) => {
          mesh.position.x = Math.cos(t * speed + phase) * radius;
          mesh.position.z = Math.sin(t * speed + phase) * radius - 20;
          mesh.position.y = Math.sin(t * speed * 0.7) * 2;
        });
        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(animationId);
        renderer.dispose();
        if (containerRef.current?.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
      };
    };

    const cleanup = loadScene();
    return () => {
      cleanup.then((fn) => fn?.());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: -1 }}
      aria-hidden
    />
  );
}
