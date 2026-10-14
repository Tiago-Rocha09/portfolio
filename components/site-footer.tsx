"use client";

import { links } from "@/lib/links";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export function SiteFooter() {
  const pathname = usePathname();
  const t = useTranslations("Chrome");
  const onAi = pathname === "/engenharia-com-ia";

  return (
    <footer className="mt-16 bg-foreground text-background">
      <div className="shell pt-10 pb-8">
        <p className="mb-2 font-mono text-[13px] tracking-[0.08em] text-footer-muted">
          {t("footer.kicker")}
        </p>
        <a
          href={links.linkedin}
          className="inline-flex items-baseline gap-2 text-2xl font-semibold tracking-[-0.03em] text-background no-underline focus-ring"
        >
          {t("footer.linkedin")}
          <span aria-hidden="true" className="text-highlight-soft">
            ↗
          </span>
        </a>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-inverse-line pt-6 text-sm text-footer-muted">
          <span>{t("footer.copy")}</span>
          <div className="flex gap-6">
            {onAi ? (
              <Link href="/" className="text-background no-underline focus-ring">
                {t("footer.home")}
              </Link>
            ) : null}
            <a
              href={links.github}
              className="text-background no-underline focus-ring"
            >
              {t("footer.github")}
            </a>
            {onAi ? null : (
              <Link
                href="/engenharia-com-ia"
                className="text-background no-underline focus-ring"
              >
                {t("footer.ai")}
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
