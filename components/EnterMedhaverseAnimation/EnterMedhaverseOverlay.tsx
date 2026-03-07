"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import WarpPhase from "./WarpPhase";
import WelcomeTextPhase from "./WelcomeTextPhase";

interface EnterMedhaverseOverlayProps {
  onComplete: () => void;
}

const VERSE_PATH = "/verse";

const TIMELINE_DURATION = 5.5; // ends after welcome + short hold, then navigate

export default function EnterMedhaverseOverlay({ onComplete }: EnterMedhaverseOverlayProps) {
  const router = useRouter();
  const [phase, setPhase] = useState<"warp" | "welcome">("warp");
  const [warpProgress, setWarpProgress] = useState(0);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [textRevealProgress, setTextRevealProgress] = useState(0);
  const [sparkleProgress, setSparkleProgress] = useState(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const finishAndEnterVerse = () => {
    onComplete();
    router.push(VERSE_PATH);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: finishAndEnterVerse,
    });

    tl.to({}, { duration: TIMELINE_DURATION });
    timelineRef.current = tl;
    tl.play();

    const startWarp = 0.3;
    const warpDur = 2.5;
    const startWelcome = 2.9;
    const textRevealDur = 1.2;
    const startSparkle = 4.1;
    const sparkleDur = 1;

    const tick = () => {
      if (!timelineRef.current) return;
      const t = timelineRef.current.totalTime();

      setOverlayOpacity(Math.min(1, t / 0.4));
      setPhase(t < startWelcome ? "warp" : "welcome");
      setWarpProgress(Math.min(1, Math.max(0, (t - startWarp) / warpDur)));
      setWelcomeVisible(t >= startWelcome);
      setTextRevealProgress(Math.min(1, Math.max(0, (t - startWelcome) / textRevealDur)));
      setSparkleProgress(Math.min(1, Math.max(0, (t - startSparkle) / sparkleDur)));
    };

    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      timelineRef.current?.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] overflow-hidden"
      style={{
        backgroundColor: `rgba(2, 6, 23, ${overlayOpacity})`,
        pointerEvents: "auto",
      }}
    >
      <WarpPhase visible={phase === "warp"} progress={warpProgress} />

      <WelcomeTextPhase
        visible={welcomeVisible}
        textRevealProgress={textRevealProgress}
        sparkleProgress={sparkleProgress}
      />
    </div>
  );
}
