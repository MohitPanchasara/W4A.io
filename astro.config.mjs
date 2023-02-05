import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config V
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  server: {
    port: 3000,
    host: true
  },
  integrations: [tailwind(), react(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  })],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  output: "server",
  adapter: netlify()
});