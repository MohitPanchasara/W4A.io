import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import astroI18next from "astro-i18next";
// https://astro.build/config V
export default defineConfig({
  site: "https://w4a.netlify.app/",
  server: { port: 2000, host: true },
  integrations: [
    astroI18next(),
    tailwind(),
    react(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
