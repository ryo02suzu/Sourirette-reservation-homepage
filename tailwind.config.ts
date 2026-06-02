import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Arche ブランドカラー（dental-reservation-app の landing と統一）
        brand: {
          DEFAULT: "#C4B5A1", // ベージュ（プライマリ）
          dark: "#8B7B68",
          light: "#FAF5ED", // 淡いベージュ背景
          border: "#DDD0BF",
        },
        navy: "#1a1a2e",
        ink: "#0A0F1E",
        accent: "#F5C400", // CTA イエロー
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"DM Sans"',
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        site: "1160px",
      },
      keyframes: {
        fadeDropdown: {
          from: { opacity: "0", transform: "translateX(-50%) translateY(-6px)" },
          to: { opacity: "1", transform: "translateX(-50%) translateY(0)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeDropdown: "fadeDropdown 0.15s ease",
        fadeUp: "fadeUp 0.5s ease both",
      },
    },
  },
  plugins: [],
} satisfies Config;
