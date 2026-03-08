"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI-Driven Engineering",
    description:
      "Our development process is augmented by proprietary AI agents, ensuring faster delivery and zero-bug production environments.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Research-Driven Foundation",
    description:
      "Every feature is backed by cognitive science research and semantic analysis, creating more natural human-computer interactions.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Elite Global Infrastructure",
    description:
      "Global edge network redundancy ensures your platform is accessible and ultra-fast from any corner of the planet.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Enterprise-Grade Security",
    description:
      "End-to-end encryption, compliance frameworks, and proactive threat monitoring keep your data and users safe.",
  },
];

export default function WhyMedhaverse() {
  return (
    <section className="py-24 md:py-32 px-6 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white">
                Why Medhaverse?
              </h2>
            </ScrollReveal>
            <div className="space-y-8">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    className="flex gap-6"
                  >
                    <div className="text-accent shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal direction="right">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl p-10 md:p-12 bg-primary/10 border border-primary/30 flex flex-col justify-center items-center text-center relative overflow-hidden glow-primary/50"
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(45deg, transparent 25%, rgba(0,0,0,.03) 25%, rgba(0,0,0,.03) 75%, transparent 75%), linear-gradient(-45deg, transparent 25%, rgba(0,0,0,.03) 25%, rgba(0,0,0,.03) 75%, transparent 75%)",
                  backgroundSize: "12px 12px",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-5xl md:text-6xl font-black mb-4 text-primary">
                  99.9%
                </h3>
                <p className="text-xl font-bold mb-6 text-white">Uptime Guaranteed</p>
                <p className="text-slate-400 max-w-xs">
                  Deploy with confidence onto a platform designed for infinite scale.
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
