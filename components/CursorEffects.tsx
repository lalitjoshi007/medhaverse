"use client";

import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 12;
const PARTICLE_COUNT = 8;

export default function CursorEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const trail = useRef<{ x: number; y: number }[]>([]);
  const particlesRef = useRef<{ x: number; y: number; vx: number; vy: number; life: number }[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cursor = cursorRef.current;
    const trailEl = trailRef.current;
    if (!cursor || !trailEl) return;

    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      trail.current = [{ x: e.clientX, y: e.clientY }, ...trail.current].slice(0, TRAIL_LENGTH);
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    let rafId: number;
    const update = () => {
      cursor.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      const trailDots = trailEl.querySelectorAll(".cursor-trail-dot");
      trail.current.forEach((p, i) => {
        const el = trailDots[i] as HTMLElement;
        if (el) {
          el.style.transform = `translate(${p.x}px, ${p.y}px)`;
          el.style.opacity = String(1 - i / TRAIL_LENGTH);
        }
      });
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("cursor-effects-active");
    return () => document.documentElement.classList.remove("cursor-effects-active");
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen transition-opacity duration-300 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        } smooth-layer`}
        style={{
          boxShadow: "0 0 20px #22D3EE, 0 0 40px #A78BFA",
          background: "radial-gradient(circle, rgba(34,211,238,0.8) 0%, rgba(167,139,250,0.4) 70%, transparent)",
        }}
        aria-hidden
      />
      <div
        ref={trailRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9998] transition-opacity duration-300 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        } smooth-layer`}
        aria-hidden
      >
        {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
          <div
            key={i}
            className="cursor-trail-dot absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ai-cyan"
            style={{
              opacity: 1 - i / TRAIL_LENGTH,
              boxShadow: "0 0 6px #22D3EE",
            }}
          />
        ))}
      </div>
    </>
  );
}
