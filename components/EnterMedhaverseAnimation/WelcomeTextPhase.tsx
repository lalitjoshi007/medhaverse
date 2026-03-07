"use client";

import { useEffect, useRef, useState } from "react";

const SPARKLE_COUNT = 24;

interface WelcomeTextPhaseProps {
  visible: boolean;
  textRevealProgress: number; // 0..1
  sparkleProgress: number; // 0..1
}

export default function WelcomeTextPhase({
  visible,
  textRevealProgress,
  sparkleProgress,
}: WelcomeTextPhaseProps) {
  const sparklesRef = useRef<{ x: number; y: number; delay: number; size: number }[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!visible || sparklesRef.current.length > 0) return;
    for (let i = 0; i < SPARKLE_COUNT; i++) {
      sparklesRef.current.push({
        x: (Math.random() - 0.5) * 120,
        y: (Math.random() - 0.5) * 40,
        delay: Math.random() * 0.5,
        size: 2 + Math.random() * 3,
      });
    }
    setMounted(true);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-[#020617]/95">
      <div
        className="relative text-center transition-opacity duration-300"
        style={{ opacity: textRevealProgress }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight welcome-float text-center">
          <span
            className="text-white"
            style={{
              textShadow: `
                0 0 12px rgba(255, 255, 255, 0.9),
                0 0 24px rgba(255, 255, 255, 0.6),
                0 0 36px rgba(255, 255, 255, 0.3)
              `,
            }}
          >
            Welcome to Medha
          </span>
          <span
            className="text-[#c084fc]"
            style={{
              textShadow: `
                0 0 16px rgba(167, 139, 250, 0.95),
                0 0 32px rgba(167, 139, 250, 0.7),
                0 0 48px rgba(139, 92, 246, 0.5),
                0 0 64px rgba(139, 92, 246, 0.3)
              `,
            }}
          >
            verse
          </span>
        </h2>
        {/* Particle sparkles around text */}
        <div className="absolute inset-0 flex items-center justify-center -z-10" style={{ opacity: sparkleProgress }}>
          {mounted &&
            sparklesRef.current.map((s, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-ai-cyan welcome-sparkle"
                style={{
                  left: `calc(50% + ${s.x}px)`,
                  top: `calc(50% + ${s.y}px)`,
                  width: s.size,
                  height: s.size,
                  boxShadow: "0 0 8px #22D3EE",
                  animationDelay: `${s.delay}s`,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
