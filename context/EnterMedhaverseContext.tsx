"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

type EnterMedhaverseContextValue = {
  isActive: boolean;
  play: () => void;
  reset: () => void;
};

const EnterMedhaverseContext = createContext<EnterMedhaverseContextValue | null>(
  null
);

export function EnterMedhaverseProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState(false);

  const play = useCallback(() => setIsActive(true), []);

  const reset = useCallback(() => setIsActive(false), []);

  return (
    <EnterMedhaverseContext.Provider value={{ isActive, play, reset }}>
      {children}
      {isActive && <EnterMedhaverseOverlay onComplete={reset} />}
    </EnterMedhaverseContext.Provider>
  );
}

export function useEnterMedhaverse() {
  const ctx = useContext(EnterMedhaverseContext);
  if (!ctx)
    throw new Error("useEnterMedhaverse must be used within EnterMedhaverseProvider");
  return ctx;
}

// Lazy import overlay to avoid loading animation code until needed
import dynamic from "next/dynamic";
const EnterMedhaverseOverlay = dynamic(
  () => import("@/components/EnterMedhaverseAnimation/EnterMedhaverseOverlay"),
  { ssr: false }
);
