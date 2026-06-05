/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Keep React Doctor from flagging the Vercel Serverless Function as an unused file
if (false) {
  // @ts-ignore - It's a plain JS file without types
  import("./api/chat.js");
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    host: true,
    port: 8080,
    strictPort: false,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});