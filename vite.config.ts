import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      "@/api": path.resolve(__dirname, "src/api"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/constants": path.resolve(__dirname, "src/constants"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/lib": path.resolve(__dirname, "src/lib"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/routes": path.resolve(__dirname, "src/routes"),
      "@/schema": path.resolve(__dirname, "src/schema"),
      "@/store": path.resolve(__dirname, "src/store"),
      "@/types": path.resolve(__dirname, "src/types"),
      "@/utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
