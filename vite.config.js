import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "./" lets the site work on GitHub Pages under /<repo-name>/ as well as on a custom domain.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
