import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SpaceBackground from "@/components/SpaceBackground";
import CursorEffects from "@/components/CursorEffects";
import { EnterMedhaverseProvider } from "@/context/EnterMedhaverseContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medhaverse | The Universe of Intelligence",
  description:
    "A universe of intelligence and technology. Building intelligent SaaS systems where technology meets infinite possibilities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} font-display antialiased bg-space-black text-slate-100 min-h-screen`}
      >
        <EnterMedhaverseProvider>
          <SpaceBackground />
          <div className="relative z-10 min-h-screen smooth-layer">
            {children}
          </div>
          <CursorEffects />
        </EnterMedhaverseProvider>
      </body>
    </html>
  );
}
