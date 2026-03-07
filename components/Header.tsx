"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEnterMedhaverse } from "@/context/EnterMedhaverseContext";
import EnterMedhaverseButton from "./EnterMedhaverseButton";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#founders", label: "Founders" },
  { href: "/#members", label: "Members" },
];

import { isDemoMode } from "@/lib/demoMode";

export default function Header() {
  const pathname = usePathname();
  const { play } = useEnterMedhaverse();
  const isInsideVerse = pathname === "/verse";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 border-b border-slate-700/50 bg-space-black/90 backdrop-blur-xl"
      style={{ zIndex: 50 }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-primary text-3xl md:text-4xl transition-transform group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </span>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase">
            {isInsideVerse
              ? isDemoMode
                ? "Work"
                : "Medha Verse"
              : isDemoMode
                ? "Demo"
                : "Medhaverse"}
          </span>
        </Link>

        {isInsideVerse ? (
          <Link
            href="/"
            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
          >
            ← Back to Home
          </Link>
        ) : (
          <>
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            {isDemoMode ? (
              <Link
                href="/verse"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/80 text-white font-bold text-sm hover:bg-primary transition-colors"
              >
                View Work →
              </Link>
            ) : (
              <EnterMedhaverseButton onClick={play} size="sm" />
            )}
          </>
        )}
      </div>
    </motion.header>
  );
}
