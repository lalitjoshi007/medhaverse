"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "SaaS Platform Development",
    description: "Custom multi-tenant platforms built with scale in mind.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI Solutions",
    description: "Integrating LLMs and generative agents into your core product.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Scalable Architecture",
    description: "Optimizing distributed systems for performance and cost.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Enterprise Software",
    description: "Engineering for millions of concurrent users and data points.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] -z-10" />
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <ScrollReveal className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Our Services
            </h2>
            <p className="text-slate-400 text-lg">
              We don&apos;t just build software; we architect ecosystems that thrive in
              the intelligent age.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <span className="text-primary font-bold text-sm uppercase tracking-widest border-b-2 border-primary pb-2">
              Full Cycle Engineering
            </span>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="p-6 glass-card rounded-2xl border border-slate-700/50 hover:border-primary/30 transition-colors"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-sm text-slate-400">{service.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
