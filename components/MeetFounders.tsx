"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
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
    role: "CTO",
    description:
      "Architecting the technical foundation of Medhaverse. Spearheading AI solutions, scalable systems, and the fusion of cognitive science with modern engineering.",
    image: "/founders/lalit-joshi.png",
    initials: "LJ",
  },
];

const SWIPE_THRESHOLD = 50;
const SWIPE_VELOCITY_THRESHOLD = 500;

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
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.1 }}
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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "120%" : "-120%",
    opacity: 0,
    scale: 0.92,
    filter: "blur(8px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "-120%" : "120%",
    opacity: 0,
    scale: 0.92,
    filter: "blur(8px)",
  }),
};

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export default function MeetFounders() {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isDragging, setIsDragging] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(([prev]) => [
      (index + founders.length) % founders.length,
      index >= (prev % founders.length) ? 1 : -1,
    ]);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex(([prev]) => [(prev - 1 + founders.length) % founders.length, -1]);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex(([prev]) => [(prev + 1) % founders.length, 1]);
  }, []);

  const handleDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
      setIsDragging(false);
      const { offset, velocity } = info;
      if (Math.abs(velocity.x) > SWIPE_VELOCITY_THRESHOLD) {
        if (velocity.x > 0) goPrev();
        else goNext();
      } else if (Math.abs(offset.x) > SWIPE_THRESHOLD) {
        if (offset.x > 0) goPrev();
        else goNext();
      }
    },
    [goPrev, goNext]
  );

  const founder = founders[currentIndex % founders.length];

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

        <div className="relative max-w-2xl mx-auto">
          {/* Prev button */}
          <motion.button
            type="button"
            onClick={goPrev}
            aria-label="Previous founder"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 w-12 h-12 rounded-full glass-card border border-slate-600 hover:border-primary/50 flex items-center justify-center text-slate-300 hover:text-primary transition-colors shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Carousel track – swipe/drag with mouse or trackpad */}
          <motion.div
            key={`drag-${currentIndex}`}
            className="overflow-hidden px-4 select-none cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            style={{ touchAction: "pan-y" }}
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={springTransition}
                className={`p-8 md:p-10 rounded-3xl glass-card border border-slate-700/50 text-center flex flex-col items-center pointer-events-none ${!isDragging ? "hover:border-primary/30" : ""}`}
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(82, 71, 230, 0.08)",
                }}
              >
                <FounderAvatar
                  imagePath={founder.image}
                  initials={founder.initials}
                  name={founder.name}
                />
                <motion.div
                  className="mt-6"
                  variants={stagger}
                  initial="initial"
                  animate="animate"
                >
                  <motion.span
                    variants={itemUp}
                    className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-3"
                  >
                    {founder.role}
                  </motion.span>
                  <motion.h3 variants={itemUp} className="text-2xl font-bold text-white mb-2">
                    {founder.name}
                  </motion.h3>
                  <motion.p
                    variants={itemUp}
                    className="text-slate-400 leading-relaxed"
                  >
                    {founder.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Next button */}
          <motion.button
            type="button"
            onClick={goNext}
            aria-label="Next founder"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 w-12 h-12 rounded-full glass-card border border-slate-600 hover:border-primary/50 flex items-center justify-center text-slate-300 hover:text-primary transition-colors shrink-0"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Dots */}
        <motion.div className="flex justify-center gap-2 mt-8" layout>
          {founders.map((_, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to founder ${i + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`h-2.5 rounded-full transition-colors ${
                (currentIndex % founders.length) === i
                  ? "bg-primary"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              animate={{
                width: (currentIndex % founders.length) === i ? 32 : 10,
              }}
              transition={springTransition}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
