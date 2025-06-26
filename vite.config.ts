import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

import path from "path";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
      "@/lib": path.resolve(__dirname, "src/lib"),
    },
  },
});
