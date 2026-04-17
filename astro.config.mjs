import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://vectorworks-spotlight-training.nl",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark"
    }
  }
});
