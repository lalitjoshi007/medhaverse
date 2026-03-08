"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const getImageSrc = (path: string) => (path ? `${basePath}${path}` : "");

const founders = [
  {
    name: "Manish Joshi",
    role: "Managing Director",
    description:
      "Leading Medhaverse's vision to bridge ancient wisdom with cutting-edge technology. Driving strategy and growth for intelligent, scalable platforms.",
    image: "/founders/manish-joshi.png",
    initials: "MJ",
  },
  {
    name: "Lalit Joshi",
    role: "Chief Technical Officer",
    description:
      "Architecting the technical foundation of Medhaverse. Spearheading AI solutions, scalable systems, and the fusion of cognitive science with modern engineering.",
    image: "/founders/lalit-joshi.png",
    initials: "LJ",
  },
];

function FounderAvatar({
  imagePath,
  initials,
  name,
}: {
  imagePath: string | null;
  initials: string;
  name: string;
}) {
  const [imgError, setImgError] = useState(false);
  const showPhoto = imagePath && !imgError;
  const src = getImageSrc(imagePath || "");

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-primary/20 border-2 border-primary/40 flex items-center justify-center shrink-0 mx-auto"
    >
      {showPhoto ? (
        <Image
          src={src}
          alt={name}
          width={192}
          height={192}
          unoptimized
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-4xl md:text-5xl font-bold text-primary/80">
          {initials}
        </span>
      )}
    </motion.div>
  );
}

const itemUp = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function MeetFounders() {
  return (
    <section id="founders" className="py-24 md:py-32 px-6 bg-cosmic-blue/20 border-t border-slate-800/50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Meet the Founders
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The minds behind Medhaverse—uniting vision and technology to build the
            future of intelligence.
          </p>
        </ScrollReveal>

        {/* Mobile: horizontal scroll. Desktop: 2-column grid */}
        <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12 md:max-w-4xl md:mx-auto flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-6 px-6 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
          {founders.map((founder, i) => (
            <ScrollReveal key={founder.name} delay={i * 0.1} className="shrink-0 w-[85vw] min-w-[85vw] sm:w-80 sm:min-w-80 md:w-auto md:min-w-0 snap-center">
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-8 md:p-10 rounded-3xl glass-card border border-slate-700/50 text-center flex flex-col items-center hover:border-primary/30 transition-colors h-full"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(82, 71, 230, 0.08)",
                }}
              >
                <FounderAvatar
                  imagePath={founder.image}
                  initials={founder.initials}
                  name={founder.name}
                />
                <motion.span
                  {...itemUp}
                  className="inline-block mt-6 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-3"
                >
                  {founder.role}
                </motion.span>
                <motion.h3 {...itemUp} className="text-2xl font-bold text-white mb-2">
                  {founder.name}
                </motion.h3>
                <motion.p
                  {...itemUp}
                  className="text-slate-400 leading-relaxed"
                >
                  {founder.description}
                </motion.p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
