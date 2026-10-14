import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en"],
  defaultLocale: "pt",
  localePrefix: "as-needed",
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/engenharia-com-ia": {
      pt: "/engenharia-com-ia",
      en: "/engineering-with-ai",
    },
  },
});
