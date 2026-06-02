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
        // コーポレートの基調（OKI 的なグリーン＋落ち着いた濃色）
        brand: { DEFAULT: "#0a8f5b", dark: "#0b3d2e", deep: "#072a20" },
        ink: "#1a1a1a",
        sub: "#5a5f5d",
        line: "#e4e7e6",
        mist: "#f4f6f5",
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', "Inter", "system-ui", "sans-serif"],
        en: ["Inter", '"Noto Sans JP"', "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1200px", text: "760px" },
      keyframes: {
        fadeUp: { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        kenburns: { from: { transform: "scale(1.06)" }, to: { transform: "scale(1)" } },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease both",
        kenburns: "kenburns 7s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
