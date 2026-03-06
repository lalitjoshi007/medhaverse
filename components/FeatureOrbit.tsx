"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const modules = [
  { title: "AI Products", desc: "Intelligent systems powered by neural logic", icon: "◇" },
  { title: "SaaS Solutions", desc: "Scalable platforms for the modern enterprise", icon: "◈" },
  { title: "Technology Services", desc: "End-to-end digital transformation", icon: "⬡" },
  { title: "Cloud Systems", desc: "Planetary-scale infrastructure", icon: "⬢" },
  { title: "Data Intelligence", desc: "Cognitive analytics and insights", icon: "◉" },
];

const angleStep = (2 * Math.PI) / modules.length;
const radius = 165;

export default function FeatureOrbit() {
  const orbitRotation = useMotionValue(0);

  useEffect(() => {
    const controls = animate(orbitRotation, 360, {
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    });
    return () => controls.stop();
  }, [orbitRotation]);

  return (
    <section id="features" className="relative py-24 md:py-32 px-6 overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          className="text-3xl md:text-5xl font-bold text-center text-white mb-6 pt-8"
        >
          Our Universe of Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          Orbiting the core of intelligence — each module connects to the next.
        </motion.p>

        <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[420px] md:min-h-[500px]">
          {/* Gradient glow behind core */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full opacity-40 blur-3xl pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(167,139,250,0.4) 0%, rgba(34,211,238,0.2) 40%, transparent 70%)",
            }}
          />

          {/* Central AI core - exactly centered */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center"
            style={{
              background: "radial-gradient(circle at 30% 30%, rgba(167,139,250,0.55) 0%, rgba(109,40,217,0.3) 45%, rgba(34,211,238,0.12) 75%, transparent)",
              boxShadow: "0 0 60px rgba(167,139,250,0.5), 0 0 120px rgba(34,211,238,0.2), inset 0 0 40px rgba(255,255,255,0.08)",
            }}
          >
            <span className="text-xl sm:text-2xl md:text-4xl font-black text-white drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">AI</span>
          </motion.div>

          {/* Energy lines from center to each module (SVG) */}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-visible"
            style={{ width: radius * 2.5, height: radius * 2.5, marginLeft: -radius * 1.25, marginTop: -radius * 1.25 }}
          >
            {modules.map((_, i) => {
              const angle = angleStep * i - Math.PI / 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const cx = radius * 1.25;
              const cy = radius * 1.25;
              return (
                <motion.line
                  key={i}
                  x1={cx}
                  y1={cy}
                  x2={cx + x}
                  y2={cy + y}
                  stroke="url(#orbitLineGradient)"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.35 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="group-hover:opacity-60"
                />
              );
            })}
            <defs>
              <linearGradient id="orbitLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(167,139,250,0.6)" />
                <stop offset="100%" stopColor="rgba(34,211,238,0.4)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Orbiting modules - smooth circular motion */}
          {modules.map((mod, i) => {
            const baseAngle = angleStep * i - Math.PI / 2;
            return (
              <OrbitModule
                key={mod.title}
                mod={mod}
                index={i}
                baseAngle={baseAngle}
                orbitRotation={orbitRotation}
                radius={radius}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OrbitModule({
  mod,
  index,
  baseAngle,
  orbitRotation,
  radius,
}: {
  mod: { title: string; desc: string; icon: string };
  index: number;
  baseAngle: number;
  orbitRotation: ReturnType<typeof useMotionValue<number>>;
  radius: number;
}) {
  const x = useTransform(orbitRotation, (v) => {
    const a = baseAngle + (v * Math.PI) / 180;
    return Math.cos(a) * radius;
  });
  const y = useTransform(orbitRotation, (v) => {
    const a = baseAngle + (v * Math.PI) / 180;
    return Math.sin(a) * radius;
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.08 * index, type: "spring", stiffness: 80, damping: 14 }}
      whileHover={{ scale: 1.12, zIndex: 20 }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default"
      style={{ x, y }}
    >
      <motion.div
        className="relative w-32 sm:w-36 md:w-44 p-3 sm:p-4 md:p-5 rounded-2xl text-center border border-slate-600/60 bg-slate-900/70 backdrop-blur-md transition-all duration-300 ease-out group"
        whileHover={{
          borderColor: "rgba(34,211,238,0.6)",
          boxShadow: "0 0 32px rgba(34,211,238,0.28), 0 0 64px rgba(167,139,250,0.12)",
        }}
      >
        <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 rounded-xl bg-ai-cyan/20 flex items-center justify-center text-ai-cyan group-hover:bg-ai-cyan/40 transition-colors text-lg">
          {mod.icon}
        </div>
        <h3 className="font-bold text-white text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1">{mod.title}</h3>
        <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">{mod.desc}</p>
      </motion.div>
    </motion.div>
  );
}
