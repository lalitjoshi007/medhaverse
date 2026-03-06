import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medhaverse | The Universe of Intelligence",
  description:
    "Build Intelligence. Expand Your Universe. Medhaverse is a SaaS technology company building intelligent platforms and advanced digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} font-display antialiased bg-background-dark text-slate-100 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
