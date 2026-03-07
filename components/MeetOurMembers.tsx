"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const members = [
  {
    name: "Sneha Choudhary",
    roles: "Chief Quality Officer & Chief Management Officer",
    description:
      "Driving excellence in quality and operations at Medhaverse. Ensuring our solutions meet the highest standards while steering strategic management and organizational growth.",
    image: "/team/sneha-choudhary.png",
  },
];

export default function MeetOurMembers() {
  return (
    <section id="members" className="py-24 md:py-32 px-6 border-t border-slate-800/50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Meet Our Members
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The people who bring vision to life—quality, operations, and everyday excellence.
          </p>
        </ScrollReveal>

        <div className="flex justify-center">
          {members.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1} className="flex justify-center w-full">
              <motion.article
                whileHover={{ y: -4 }}
                className="w-full max-w-sm rounded-3xl glass-card border border-slate-700/50 hover:border-primary/40 overflow-hidden text-center transition-colors"
              >
                <div className="relative w-full aspect-[3/4] max-h-80 mx-auto overflow-hidden bg-slate-800/50">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                    {member.roles}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
