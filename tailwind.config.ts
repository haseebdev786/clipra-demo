import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070D",
        foreground: "#F1F5F9",
        "bg-deep": "#05070D",
        "bg-canvas": "#080C16",
        "bg-surface": "#0E1526",
        "bg-card": "rgba(14, 21, 38, 0.72)",
        "accent-blue": {
          DEFAULT: "#0066FF",
          bright: "#2E82FF",
        },
        "accent-teal": {
          DEFAULT: "#00E5BE",
          bright: "#38F8D4",
        },
        "accent-green": {
          DEFAULT: "#10F296",
          bright: "#44FBB0",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        pill: "9999px",
      },
      animation: {
        pulseGlow: "pulseGlow 2s infinite",
        laserTravel: "laserTravel 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        islandBreath: "islandBreath 4s ease-in-out infinite",
        textShimmer: "textShimmer 7s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
