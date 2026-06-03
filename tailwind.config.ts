import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7",
          400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857",
          800: "#065f46", 900: "#064e3b",
        },
        // フォレストグリーン基調（指定の配色）
        brand: { DEFAULT: "#0D412F", dark: "#0A3325", deep: "#031A13" },
        accent: "#16A34A",
        ink: "#0f172a",     // slate-900
        sub: "#475569",     // slate-600
        line: "#e2e8f0",    // slate-200
        mist: "#f8fafc",    // slate-50
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', "Inter", "system-ui", "sans-serif"],
        en: ["Inter", '"Noto Sans JP"', "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1200px", text: "760px" },
      boxShadow: {
        "3xl": "0 35px 80px -25px rgba(3,26,19,0.35)",
      },
      keyframes: {
        fadeUp: { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        kenburns: { from: { transform: "scale(1.06)" }, to: { transform: "scale(1)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        shine: { "0%": { transform: "translateX(-120%)" }, "60%,100%": { transform: "translateX(220%)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        pulseRing: { "0%": { transform: "scale(0.9)", opacity: "0.7" }, "100%": { transform: "scale(2.2)", opacity: "0" } },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease both",
        kenburns: "kenburns 7s ease-out both",
        marquee: "marquee 32s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        pulseRing: "pulseRing 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
