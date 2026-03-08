"use client";

import { motion } from "framer-motion";

const CONTACT_EMAIL = "medhaverse.4.u@gmail.com";

export default function CTA() {
  return (
    <section id="cta" className="px-6 py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden glow-primary"
        style={{
          background: "linear-gradient(135deg, #5247e6 0%, #8b5cf6 50%, #5247e6 100%)",
          backgroundSize: "200% 200%",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to expand?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join the leading enterprises. Let&apos;s build the future together.
          </p>
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Request%20Demo%20-%20Medhaverse`}
                className="inline-flex w-full sm:w-auto justify-center px-12 py-5 border-2 border-white/30 text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors"
              >
                Request Demo
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
