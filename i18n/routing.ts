import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // All supported locales
  locales: ["en"],

  // Default locale — used when no locale matches
  defaultLocale: "en",

  // Prefix strategy: always show locale in URL
  localePrefix: "always",
});
