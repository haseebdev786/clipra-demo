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
        background: "#F5F5F7",
        foreground: "#1D1D1F",
        "bg-deep": "#F5F5F7",
        "bg-canvas": "#FFFFFF",
        "bg-surface": "#FFFFFF",
        "bg-card": "#FFFFFF",
        "accent-blue": {
          DEFAULT: "#0071E3",
          bright: "#0077ED",
        },
        "accent-teal": {
          DEFAULT: "#0071E3",
          bright: "#0077ED",
        },
        "accent-green": {
          DEFAULT: "#0071E3",
          bright: "#0077ED",
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
