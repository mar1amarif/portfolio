import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        base: {
          950: "#050507",
          900: "#0a0a0d",
          850: "#0e0e13",
          800: "#131318",
          700: "#1c1c24",
          600: "#2a2a35",
          500: "#494957",
          400: "#71717f",
          300: "#9c9ca8",
          200: "#c6c6cf",
          100: "#e8e8ec",
          50: "#f7f7f9",
        },
        accent: {
          DEFAULT: "#6366f1",
          50: "#eef0ff",
          100: "#e0e2ff",
          200: "#c6c9ff",
          300: "#a2a5ff",
          400: "#7c7cfb",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#372fa3",
          900: "#312e81",
        },
        emerald: {
          glow: "#34d399",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)",
        "noise": "url('/noise.svg')",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(99, 102, 241, 0.5)",
        "glow-lg": "0 0 80px -20px rgba(99, 102, 241, 0.55)",
        card: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 0 0 1px rgba(255,255,255,0.06)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
