"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Chrome");

  return (
    <div
      className="flex shrink-0 gap-1 font-mono text-[13px]"
      role="group"
      aria-label={t("language")}
    >
      {routing.locales.map((code) => {
        const active = code === locale;

        return (
          <Link
            key={code}
            href={pathname}
            locale={active ? undefined : code}
            hrefLang={code}
            aria-current={active ? "true" : undefined}
            className={cn(
              "inline-flex min-h-9 min-w-11 cursor-pointer items-center justify-center rounded-full border no-underline focus-ring",
              active
                ? "border-foreground bg-foreground text-background"
                : "border-line-soft bg-transparent text-foreground",
            )}
          >
            {t(code)}
          </Link>
        );
      })}
    </div>
  );
}
