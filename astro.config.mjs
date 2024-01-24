import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rogin.xyz",
  integrations: [mdx(), sitemap(), react()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
  devToolbar: {
    enabled: false,
  },
});
