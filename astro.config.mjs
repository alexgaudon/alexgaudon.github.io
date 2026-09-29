// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://alexgaudon.github.io",
  server: {
    // dev port, override with PORT. Static build output is unaffected.
    port: Number(process.env.PORT ?? 4321),
  },
  integrations: [],

  vite: {
    plugins: [tailwindcss()],
  },
});