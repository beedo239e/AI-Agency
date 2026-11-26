// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.zayoniai.com",
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      i18n: { defaultLocale: "ar", locales: { ar: "ar-IQ", en: "en" } },
    }),
  ],
  build: { inlineStylesheets: "auto" },
});
