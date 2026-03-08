"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { verseWork } from "@/data/verseWork";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const colorMap: Record<string, string> = {
  emerald: "from-emerald-500/30 to-emerald-900/20 border-emerald-500/40",
  violet: "from-violet-500/30 to-violet-900/20 border-violet-500/40",
  cyan: "from-cyan-500/30 to-cyan-900/20 border-cyan-500/40",
  amber: "from-amber-500/30 to-amber-900/20 border-amber-500/40",
};

export default function VersePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-space-black text-slate-100 pt-20">
      {/* Verse Hero — Medha Verse / Sanskrit galaxy */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(82, 71, 230, 0.12) 0%, rgba(109, 40, 217, 0.06) 40%, transparent 70%), radial-gradient(ellipse 100% 100% at 50% 50%, rgba(2, 6, 23, 0.98) 0%, #020617 100%)",
          }}
        />
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.08) 0%, transparent 40%),
                              radial-gradient(circle at 80% 70%, rgba(167, 139, 250, 0.08) 0%, transparent 40%)`,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-ai-cyan/90 text-sm font-medium uppercase tracking-[0.2em] mb-4">
            ज्ञान का ब्रह्माण्ड · Universe of Knowledge
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="text-white">Medha</span>
            <span className="text-energy-glow"> Verse</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-slate-300 mb-2 font-medium">
            मेधा वर्स
          </p>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Where ancient wisdom meets modern creation. A galaxy of work rooted in
            Hindu science, Sanskrit, and the cosmos.
          </p>
        </motion.div>
      </section>

      {/* Solar system / Galaxy — central sun, orbiting work */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-2xl md:text-3xl font-bold text-white mb-4"
          >
            The Orbit of Work
          </motion.h2>
          <p className="text-center text-slate-400 mb-10 md:mb-16 max-w-xl mx-auto text-sm sm:text-base">
            Each creation orbits the core of Medha — wisdom in motion.
          </p>

          {/* Decorative orbit ring — smaller on mobile so it fits in viewport */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
              className="w-[min(85vw,280px)] h-[min(85vw,280px)] sm:w-[min(90vw,400px)] sm:h-[min(90vw,400px)] md:w-[min(90vw,520px)] md:h-[min(90vw,520px)] rounded-full border border-slate-700/30 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
              className="absolute w-[min(65vw,200px)] h-[min(65vw,200px)] sm:w-[min(70vw,320px)] sm:h-[min(70vw,320px)] md:w-[min(70vw,400px)] md:h-[min(70vw,400px)] rounded-full border border-ai-cyan/20"
            />
          </div>

          <div className="relative flex flex-row flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 min-h-[200px] sm:min-h-[280px] md:min-h-[320px]">
            {/* Central "sun" — Medha core */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shrink-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(34, 211, 238, 0.4), rgba(82, 71, 230, 0.3)), radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%)",
                boxShadow:
                  "0 0 60px rgba(34, 211, 238, 0.4), 0 0 100px rgba(82, 71, 230, 0.2)",
              }}
            >
              <span className="text-white font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider">
                Medha
              </span>
            </motion.div>

            {/* Orbiting work items as planets — compact on mobile */}
            {verseWork.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center"
              >
                {work.href.startsWith("http") ? (
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative block w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl overflow-hidden border-2 bg-gradient-to-br ${colorMap[work.color] ?? "from-primary/30 to-primary/10 border-primary/40"} hover:scale-105 transition-transform bg-slate-900/80`}
                  >
                    {work.iconPath ? (
                      <Image
                        src={work.iconPath}
                        alt={work.name}
                        fill
                        className="object-contain p-1"
                        sizes="(max-width: 640px) 56px, (max-width: 768px) 80px, 96px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-lg sm:text-2xl font-bold text-white/80">
                        {work.name.charAt(0)}
                      </div>
                    )}
                  </a>
                ) : (
                  <Link
                    href={work.href}
                    className={`relative block w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl overflow-hidden border-2 bg-gradient-to-br ${colorMap[work.color] ?? "from-primary/30 to-primary/10 border-primary/40"} hover:scale-105 transition-transform bg-slate-900/80`}
                  >
                    {work.iconPath ? (
                      <Image
                        src={work.iconPath}
                        alt={work.name}
                        fill
                        className="object-contain p-1"
                        sizes="(max-width: 640px) 56px, (max-width: 768px) 80px, 96px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-lg sm:text-2xl font-bold text-white/80">
                        {work.name.charAt(0)}
                      </div>
                    )}
                  </Link>
                )}
                <p className="text-center text-white font-semibold mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
                  {work.name}
                </p>
                {work.nameSanskrit && (
                  <p className="text-center text-slate-500 text-[10px] sm:text-xs mt-0.5">
                    {work.nameSanskrit}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work showcase — detailed cards */}
      <section className="py-24 px-6 border-t border-slate-800/50">
        <div className="max-w-[1440px] mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-4xl font-bold text-white mb-4"
          >
            My Work
          </motion.h2>
          <p className="text-center text-slate-400 mb-16 max-w-xl mx-auto">
            Products and systems built at the intersection of intelligence and craft.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {verseWork.map((work, i) => (
              <motion.article
                key={work.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {work.href.startsWith("http") ? (
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-8 rounded-3xl glass-card border border-slate-700/50 hover:border-primary/50 transition-all h-full group"
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className={`relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-slate-900/80 bg-gradient-to-br ${colorMap[work.color] ?? "from-primary/20 to-primary/5"} border border-slate-700/50`}
                      >
                        {work.iconPath ? (
                          <Image
                            src={work.iconPath}
                            alt={work.name}
                            fill
                            className="object-contain p-1.5"
                            sizes="64px"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-white/80">
                            {work.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                          {work.name}
                        </h3>
                        {work.nameSanskrit && (
                          <p className="text-slate-500 text-sm mt-0.5">
                            {work.nameSanskrit}
                          </p>
                        )}
                        <p className="text-ai-cyan/90 text-sm font-medium mt-2">
                          {work.tagline}
                        </p>
                        <p className="text-slate-400 mt-3 leading-relaxed">
                          {work.description}
                        </p>
                        {work.features && work.features.length > 0 && (
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {work.features.slice(0, 4).map((f, j) => (
                              <li
                                key={j}
                                className="text-xs px-3 py-1 rounded-full bg-slate-800/60 text-slate-400"
                              >
                                {f}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link
                    href={work.href}
                    className="block p-8 rounded-3xl glass-card border border-slate-700/50 hover:border-primary/50 transition-all h-full group"
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className={`relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-slate-900/80 bg-gradient-to-br ${colorMap[work.color] ?? "from-primary/20 to-primary/5"} border border-slate-700/50`}
                      >
                        {work.iconPath ? (
                          <Image
                            src={work.iconPath}
                            alt={work.name}
                            fill
                            className="object-contain p-1.5"
                            sizes="64px"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-white/80">
                            {work.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                          {work.name}
                        </h3>
                        {work.nameSanskrit && (
                          <p className="text-slate-500 text-sm mt-0.5">
                            {work.nameSanskrit}
                          </p>
                        )}
                        <p className="text-ai-cyan/90 text-sm font-medium mt-2">
                          {work.tagline}
                        </p>
                        <p className="text-slate-400 mt-3 leading-relaxed">
                          {work.description}
                        </p>
                        {work.features && work.features.length > 0 && (
                          <ul className="mt-4 flex flex-wrap gap-2">
                            {work.features.slice(0, 4).map((f, j) => (
                              <li
                                key={j}
                                className="text-xs px-3 py-1 rounded-full bg-slate-800/60 text-slate-400"
                              >
                                {f}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </Link>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold hover:opacity-90 transition-opacity"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
