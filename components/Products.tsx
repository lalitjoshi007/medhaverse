"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    name: "MedhaAnalytics",
    description:
      "Deep-learning engine that extracts cognitive patterns from raw big data streams in real-time.",
    href: "#",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    name: "VerseCloud",
    description:
      "A borderless, decentralized infrastructure layer that ensures 99.99% uptime across the digital universe.",
    href: "#",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    name: "CogniSaaS",
    description:
      "The world's first intuitive workflow automation suite that anticipates user intent through semantic logic.",
    href: "#",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 px-6">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Intelligent Products
          </h2>
          <p className="text-slate-400">
            Proprietary engines built for planetary performance.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="group p-8 rounded-3xl glass-card border border-slate-700/50 hover:border-primary/50 transition-all h-full flex flex-col"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary"
                >
                  {product.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-white">{product.name}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed flex-1">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 text-primary font-bold group/link"
                >
                  Learn more
                  <span className="inline-block group-hover/link:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
