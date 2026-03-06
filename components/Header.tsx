"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#founders", label: "Founders" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700/50 bg-background-dark/80 backdrop-blur-xl"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3 group">
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
            Medhaverse
          </span>
        </Link>

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

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="#cta"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-white font-bold text-sm glow-primary hover:opacity-90 transition-opacity"
          >
            Enter Medhaverse
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
