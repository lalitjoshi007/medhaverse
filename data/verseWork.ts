export type VerseWorkItem = {
  id: string;
  name: string;
  nameSanskrit?: string; // transliterated or Devanagari
  tagline: string;
  description: string;
  href: string;
  iconPath: string; // /nutrino-logo.png or emoji/svg hint
  color: string; // tailwind or hex for orbit/glow
  features?: string[];
};

export const verseWork: VerseWorkItem[] = [
  {
    id: "nutrino",
    name: "Nutrino",
    nameSanskrit: "न्यूट्रिनो",
    tagline: "Your personal health companion in your pocket",
    description:
      "Nutrino turns \"what I eat\" and \"what my labs say\" into \"what I should do next\"—so everyone can eat better and feel better, every day.",
    href: "/#products",
    iconPath: "/nutrino-logo.png",
    color: "emerald",
    features: [
      "Smart food scan",
      "Lab report analytics",
      "AI health consultant",
      "Report vault",
      "Habits that stick",
    ],
  },
  {
    id: "zynapse",
    name: "Zynapse",
    tagline: "Where Intelligence Meets Innovation",
    description:
      "AI-powered intelligence at the intersection of neural networks and human creativity. Building the future with AI-driven solutions—neural analytics, conversational AI, and intelligent automation.",
    href: "https://zynapse-ten.vercel.app",
    iconPath: "/zynapse-logo.png",
    color: "cyan",
    features: [
      "Neural Analytics Platform",
      "Synapse AI Assistant",
      "Quantum Data Pipeline",
      "Intelligent Automation Suite",
    ],
  },
  {
    id: "medha-analytics",
    name: "MedhaAnalytics",
    tagline: "Cognitive patterns from data",
    description:
      "Deep-learning engine that extracts cognitive patterns from raw big data streams in real-time.",
    href: "/#products",
    iconPath: "",
    color: "violet",
  },
  {
    id: "verse-cloud",
    name: "VerseCloud",
    tagline: "Borderless infrastructure",
    description:
      "A borderless, decentralized infrastructure layer that ensures 99.99% uptime across the digital universe.",
    href: "/#products",
    iconPath: "",
    color: "cyan",
  },
  {
    id: "cogni-saas",
    name: "CogniSaaS",
    tagline: "Workflow automation with intent",
    description:
      "The world's first intuitive workflow automation suite that anticipates user intent through semantic logic.",
    href: "/#products",
    iconPath: "",
    color: "amber",
  },
];
