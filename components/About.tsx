"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const items = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Medha (Intelligence)",
    description:
      "Ancient cognitive frameworks applied to neural architectures and algorithmic logic.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Verse (Universe)",
    description:
      "Distributed, infinitely scalable cloud ecosystems designed for the next era of connectivity.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 bg-cosmic-blue/30">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" className="relative">
            <div className="aspect-square max-w-lg rounded-3xl bg-primary/5 border border-primary/20 flex items-center justify-center overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(#5247e6 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <span className="text-[120px] md:text-[160px] text-primary/30 font-bold select-none">
                मेधा
              </span>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 p-6 md:p-8 glass-card rounded-2xl shadow-xl"
              >
                <p className="text-accent font-bold text-2xl md:text-3xl mb-1">5000+</p>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Years of Wisdom Applied
                </p>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              The Medhaverse Concept
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              <strong className="text-primary">Medha</strong> represents the depth of
              Sanskrit wisdom—the core of human and divine intelligence.{" "}
              <strong className="text-glow-violet">Verse</strong> signifies the infinite
              scale of the modern technological universe. At Medhaverse, we bridge these
              two worlds.
            </p>
            <div className="space-y-6">
              {items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ x: 4 }}
                  className="flex gap-4 p-4 rounded-xl glass-card border border-slate-700/50 hover:border-primary/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
