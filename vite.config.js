import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import MillionLint from "@million/lint";

// https://vitejs.dev/config/
const _plugins = [react()];
_plugins.unshift(MillionLint.vite());

export default defineConfig({
  plugins: _plugins,
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.js",
  },
});
