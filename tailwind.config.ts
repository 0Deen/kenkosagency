import type { Config } from "tailwindcss";

// Colours come from the reference palette board: deep navy, ivory/sand, warm tan (used as the "gold"), slate blue.
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#222F45", deep: "#1A2436", mid: "#2F3E59", soft: "#DCE6F0", slate: "#7D8CA6" },
        ivory: { DEFAULT: "#F6F3EE", sand: "#DDD6CB" },
        gold: { DEFAULT: "#D3B08B", deep: "#9A7548" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: { card: "14px" },
      boxShadow: {
        card: "0 10px 30px -12px rgba(34,47,69,0.18)",
        rail: "0 25px 80px rgba(0,0,0,0.35)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(10px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "pop-in": { "0%": { opacity: "0", transform: "scale(0.96)" }, "100%": { opacity: "1", transform: "scale(1)" } },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(.22,1,.36,1) both",
        "pop-in": "pop-in 0.35s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [],
};
export default config;
