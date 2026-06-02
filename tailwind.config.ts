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
        // Apple 的な中間グレー
        ink: "#1d1d1f",
        sub: "#6e6e73",
        hair: "#d2d2d7",
        canvas: "#f5f5f7",
      },
      fontFamily: {
        sans: ["Inter", '"Noto Sans JP"', "system-ui", "sans-serif"],
        jp: ['"Noto Sans JP"', "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1120px", text: "720px" },
      borderRadius: { "4xl": "2rem", "5xl": "2.5rem" },
      keyframes: {
        fadeUp: { from: { opacity: "0", transform: "translateY(22px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
