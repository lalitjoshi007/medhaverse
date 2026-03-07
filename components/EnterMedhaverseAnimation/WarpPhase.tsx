"use client";

import { useEffect, useRef } from "react";

const STAR_COUNT = 80;
const PARTICLE_COUNT = 40;
const WARP_DURATION_MS = 2500;

interface WarpPhaseProps {
  visible: boolean;
  progress: number; // 0..1
}

export default function WarpPhase({ visible, progress }: WarpPhaseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; size: number; life: number }[]>([]);
  const starsRef = useRef<{ x: number; y: number; z: number; prevZ: number }[]>([]);
  const progressRef = useRef(progress);
  const initialized = useRef(false);
  progressRef.current = progress;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !visible) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();
    window.addEventListener("resize", setSize);

    if (!initialized.current) {
      for (let i = 0; i < STAR_COUNT; i++) {
        starsRef.current.push({
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
          z: Math.random(),
          prevZ: 1,
        });
      }
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particlesRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: 1 + Math.random() * 2,
          life: Math.random(),
        });
      }
      initialized.current = true;
    }

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const getSpeed = () => 0.018 + progressRef.current * 0.012;

    let raf: number;
    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.fillStyle = "rgba(2, 6, 23, 0.25)";
      ctx.fillRect(0, 0, w, h);

      // Warp lines (stars moving toward camera)
      const stars = starsRef.current;
      const speed = getSpeed();
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.prevZ = s.z;
        s.z -= speed;
        if (s.z <= 0) {
          s.z = 1;
          s.prevZ = 1;
          s.x = (Math.random() - 0.5) * 2;
          s.y = (Math.random() - 0.5) * 2;
        }
        const px = cx + s.x * (w * 0.6) / s.prevZ;
        const py = cy + s.y * (h * 0.6) / s.prevZ;
        const x = cx + s.x * (w * 0.6) / s.z;
        const y = cy + s.y * (h * 0.6) / s.z;
        const alpha = 1 - s.z;
        const lineW = (1 - s.z) * 2;
        ctx.strokeStyle = `rgba(34, 211, 238, ${alpha * 0.9})`;
        ctx.lineWidth = lineW;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      // Glowing particles
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.008;
        if (p.life > 1) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
          p.life = 0;
        }
        const alpha = 0.3 + 0.7 * Math.sin(p.life * Math.PI);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", setSize);
      cancelAnimationFrame(raf);
    };
  }, [visible, progress]);

  if (!visible) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "#020617" }}
      aria-hidden
    />
  );
}
