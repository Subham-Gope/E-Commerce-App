import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import AutoImport from "unplugin-auto-import/vite";

// https://vite.dev/config/
export default defineConfig({
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

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup.js"],
  },
});
