import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    AutoImport({
      imports: ["vitest"],
      dts: true,
    }),
  ],
  server: {
    port: 5173,
  },

  build: {
    rollupOptions: {
      external: mode == "production" ? [/\.test\.(js|ts)x?$/] : [],
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup.js"],
    include: ["src/**/*.test.{js,ts,jsx,tsx}"],
    exlcude: ["nodemodules", "dist", ".git"],
  },
}));
