import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
// GitHub Pages のプロジェクトページ配信ではサブパス（/<repo>/）が必要なため、
// VITE_BASE 環境変数で base を切り替える。ローカル開発では "/"。
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
