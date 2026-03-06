"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Ancient Sanskrit Knowledge",
    description: "Fundamental principles of logic and cognitive flow.",
    color: "accent",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Scientific Thinking",
    description: "Rigorous methodology and evidence-based reasoning.",
    color: "primary",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Modern AI Systems",
    description: "Scalable ecosystems that serve humanity at large.",
    color: "glow-violet",
  },
];

const colorClasses: Record<string, string> = {
  accent: "border-accent bg-accent/10 text-accent",
  primary: "border-primary bg-primary/10 text-primary",
  "glow-violet": "border-glow-violet bg-glow-violet/10 text-glow-violet",
};

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 px-6 bg-cosmic-blue/20">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Technology Philosophy
          </h2>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-2 py-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.15} className="flex flex-col md:flex-row items-center gap-6 md:gap-2 flex-1 max-w-sm md:max-w-none">
              <div className="flex flex-col items-center flex-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-24 h-24 rounded-full border-2 flex items-center justify-center mb-6 ${colorClasses[step.color]}`}
                >
                  {step.icon}
                </motion.div>
                <h3 className="font-bold text-xl mb-2 text-white text-center">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 max-w-[220px] text-center">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <span className="text-primary text-2xl md:text-3xl shrink-0 md:animate-pulse">
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </span>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
