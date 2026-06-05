/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";


// Register entry points for static analysis (React Doctor / Deslop)
// This ensures they are not flagged as unused dead code
function _registerEntries() {
  // @ts-expect-error - purely for static analysis
  import("./api/chat.js");
  // @ts-expect-error - purely for static analysis
  import("./frontend/src/main.tsx");
}

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, "./frontend"),
  base: "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  server: {
    host: true,
    port: 8080,
    strictPort: false,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./frontend/src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: path.resolve(__dirname, "./frontend/src/setupTests.ts"),
  },
});