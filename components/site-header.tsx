"use client";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

function NavLink({
  href,
  accent = false,
  children,
}: {
  href: "/" | "/engenharia-com-ia" | `#${string}`;
  accent?: boolean;
  children: React.ReactNode;
}) {
  const className = cn(
    "text-[15px] no-underline focus-ring",
    accent ? "font-medium text-highlight" : "text-foreground",
  );

  if (href === "/" || href === "/engenharia-com-ia") {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const t = useTranslations("Chrome");
  const onAi = pathname === "/engenharia-com-ia";

  return (
    <header className="sticky top-0 z-20 bg-background">
      <div className="shell flex flex-wrap items-center justify-between gap-4 py-6">
        <Link
          href="/"
          className="text-[17px] font-semibold tracking-[-0.01em] text-foreground no-underline focus-ring"
        >
          {t("name")}
        </Link>
        <nav
          aria-label={t("navLabel")}
          className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[15px]"
        >
        {onAi ? (
          <>
            <NavLink href="/">{t("aiNav.home")}</NavLink>
            <NavLink href="#kits">{t("aiNav.kits")}</NavLink>
            <NavLink href="#prova">{t("aiNav.proof")}</NavLink>
            <NavLink href="#produto">{t("aiNav.product")}</NavLink>
            <NavLink href="#guardrails">{t("aiNav.guardrails")}</NavLink>
            <span aria-current="page" className="font-medium text-highlight">
              {t("aiNav.current")}
            </span>
          </>
        ) : (
          <>
            <NavLink href="#stack">{t("homeNav.stack")}</NavLink>
            <NavLink href="#trabalhos">{t("homeNav.work")}</NavLink>
            <NavLink href="#experiencia">{t("homeNav.experience")}</NavLink>
            <NavLink href="/engenharia-com-ia" accent>
              {t("homeNav.ai")}
            </NavLink>
          </>
        )}
        </nav>
        <LocaleSwitcher />
      </div>
    </header>
  );
}
