import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "space-black": "#020617",
        "galaxy-purple": "#6D28D9",
        "nebula-blue": "#2563EB",
        "ai-cyan": "#22D3EE",
        "energy-glow": "#A78BFA",
        primary: "#5247e6",
        accent: "#facc15",
        "background-light": "#f6f6f8",
        "background-dark": "#020617",
        "cosmic-blue": "#1a1935",
        "glow-violet": "#8b5cf6",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
      animation: {
        "gradient": "gradient 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", boxShadow: "0 0 20px rgba(82, 71, 230, 0.3)" },
          "50%": { opacity: "1", boxShadow: "0 0 40px rgba(82, 71, 230, 0.6)" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};

export default config;
