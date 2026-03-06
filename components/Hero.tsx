"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-[80px]">
      {/* Data rings around hero */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[min(90vw,700px)] h-[min(90vw,700px)] border border-ai-cyan/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute w-[min(70vw,500px)] h-[min(70vw,500px)] border border-energy-glow/25 rounded-full"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute w-[min(50vw,360px)] h-[min(50vw,360px)] border border-nebula-blue/30 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-64 h-64 rounded-full bg-ai-cyan/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-ai-cyan/40 text-ai-cyan text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ai-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-ai-cyan" />
          </span>
          A Universe of Intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[2.75rem] sm:text-[3.25rem] md:text-[56px] lg:text-[64px] font-bold tracking-tight mb-6 sm:mb-8 leading-[1.1]"
        >
          <span className="bg-gradient-to-r from-white via-ai-cyan to-energy-glow bg-clip-text text-transparent">
            Medhaverse
          </span>
          <br />
          <span className="bg-gradient-to-b from-white/95 to-slate-400 bg-clip-text text-transparent">
            The Universe of Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-lg md:text-xl text-slate-400 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building intelligent SaaS systems where technology meets infinite possibilities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34,211,238,0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="#products"
              className="inline-flex w-full sm:w-auto justify-center px-8 py-4 bg-ai-cyan text-space-black font-bold rounded-full transition-shadow"
              style={{ boxShadow: "0 0 30px rgba(34,211,238,0.5)" }}
            >
              Explore the Universe
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(167,139,250,0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="mailto:medhaverse.4.u@gmail.com?subject=Start%20Building%20-%20Medhaverse"
              className="inline-flex w-full sm:w-auto justify-center px-8 py-4 glass border border-energy-glow/50 text-white font-bold rounded-full hover:border-energy-glow transition-colors"
              style={{ boxShadow: "0 0 20px rgba(167,139,250,0.2)" }}
            >
              Start Building
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
