"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NeuralParticles from "./NeuralParticles";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0 bg-[length:300%_300%] animate-gradient"
        style={{
          background: `linear-gradient(135deg, #121121 0%, #1a1935 25%, #0f0e1a 50%, #1a1935 75%, #121121 100%)`,
        }}
      />
      <div className="absolute inset-0 z-0 mandala-bg opacity-90" />
      <div className="absolute inset-0 z-0 mandala-pattern opacity-50" />

      {/* Decorative rings */}
      <motion.div
        animate={{ scale: [1, 1.02, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/20 rounded-full pointer-events-none z-0"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full rotate-45 pointer-events-none z-0" />

      <NeuralParticles />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          The Future of Intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Build Intelligence.
          </span>
          <br />
          <span className="bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
            Expand Your Universe.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Medhaverse is a SaaS technology company building intelligent platforms
          and providing advanced digital solutions for modern businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#products"
              className="inline-flex w-full sm:w-auto justify-center px-8 py-4 bg-primary text-white font-bold rounded-full glow-primary"
            >
              Explore Products
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#services"
              className="inline-flex w-full sm:w-auto justify-center px-8 py-4 glass border border-slate-600 text-white font-bold rounded-full hover:border-primary/50 transition-colors"
            >
              Work With Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
