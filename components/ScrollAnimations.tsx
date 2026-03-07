"use client";

import { useEffect, useRef } from "react";

export default function ScrollAnimations({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      const sections = ref.current?.querySelectorAll("[data-scroll-section]");
      sections?.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            overwrite: "auto",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              end: "bottom 12%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          }
        );
      });
    };

    initGSAP();
  }, []);

  return <div ref={ref}>{children}</div>;
}
