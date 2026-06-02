import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        // ダークの土台（わずかに緑みのある黒〜濃いスレート）
        night: {
          950: "#05080a",
          900: "#070b0e",
          800: "#0b1116",
          700: "#11181e",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Noto Sans JP"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', '"Noto Sans JP"', "system-ui", "sans-serif"],
        jp: ['"Noto Sans JP"', "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1200px" },
      borderRadius: { "4xl": "2rem" },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        fadeUp: { from: { opacity: "0", transform: "translateY(22px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        auroraA: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(6%,-8%) scale(1.15)" },
        },
        auroraB: {
          "0%,100%": { transform: "translate(0,0) scale(1.1)" },
          "50%": { transform: "translate(-8%,6%) scale(0.95)" },
        },
        shimmer: { "0%": { backgroundPosition: "200% 0" }, "100%": { backgroundPosition: "-200% 0" } },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        auroraA: "auroraA 16s ease-in-out infinite",
        auroraB: "auroraB 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
