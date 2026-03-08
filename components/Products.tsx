"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { useEnterMedhaverse } from "@/context/EnterMedhaverseContext";
import EnterMedhaverseButton from "./EnterMedhaverseButton";
import { isDemoMode } from "@/lib/demoMode";

export default function Products() {
  const { play } = useEnterMedhaverse();

  return (
    <section id="products" className="py-24 md:py-32 px-6">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Work
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            {isDemoMode
              ? "Want to see my work? View the gallery of projects and creations."
              : "Want to see my work? Enter Medha Verse — a galaxy of projects, products, and creations."}
          </p>
          {isDemoMode ? (
            <Link
              href="/verse"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold hover:opacity-90 transition-opacity"
            >
              View Work →
            </Link>
          ) : (
            <EnterMedhaverseButton onClick={play} size="lg" />
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
