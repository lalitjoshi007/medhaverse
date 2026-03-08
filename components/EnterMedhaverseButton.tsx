"use client";

import { motion } from "framer-motion";

interface EnterMedhaverseButtonProps {
  onClick: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  demoMode?: boolean;
  /** In CTA section only: show "Enter" and no Om, no "Medhaverse" */
  compactLabel?: boolean;
}

const sizeClasses = {
  sm: "px-3 py-1.5 text-xs gap-1 sm:px-5 sm:py-2.5 sm:text-sm sm:gap-2",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-3",
};

export default function EnterMedhaverseButton({
  onClick,
  size = "md",
  className = "",
  demoMode = false,
  compactLabel = false,
}: EnterMedhaverseButtonProps) {
  const hideBranding = demoMode || compactLabel;
  const label = hideBranding ? "Enter" : "Enter Medhaverse";
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`enter-medhaverse-btn relative inline-flex items-center justify-center rounded-full font-bold overflow-hidden ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 1 }}
    >
      {/* Inner glow layer */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-400/30 to-amber-500/20 animate-enter-btn-shine" />
      {/* Sacred Om – hide in demo or CTA (compactLabel) */}
      {!hideBranding && (
        <span className="relative z-10 text-amber-200/90 text-sm sm:text-lg leading-none" aria-hidden>
          ॐ
        </span>
      )}
      <span className="relative z-10 text-white drop-shadow-sm">
        {label}
      </span>
      <span className="relative z-10 text-amber-200/80 text-xs sm:text-sm">→</span>
    </motion.button>
  );
}
