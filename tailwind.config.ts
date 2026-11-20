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
        "bg-canvas": "#0B0D14",
        "bg-surface": "rgba(255,255,255,0.05)",
        "bg-card": "rgba(255,255,255,0.05)",
        "accent-blue": {
          DEFAULT: "#0066FF",
          bright: "#2E82FF",
        },
        "accent-teal": {
          DEFAULT: "#00E5BE",
          bright: "#38F8D4",
        },
        "accent-green": {
          DEFAULT: "#00E5BE",
          bright: "#38F8D4",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"SF Pro Display"',
          "Inter",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          '"SF Mono"',
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      borderRadius: {
        pill: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
