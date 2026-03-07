import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medha Verse | A Galaxy of Work",
  description:
    "Where ancient wisdom meets modern creation. A galaxy of work rooted in Hindu science, Sanskrit, and the cosmos.",
};

export default function VerseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
