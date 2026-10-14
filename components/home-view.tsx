import { FadeIn } from "@/components/fade-in";
import { PillLink } from "@/components/pill-link";
import { PointList } from "@/components/point-list";
import Image from "next/image";
import type {
  BandItem,
  CaseItem,
  ExperienceItem,
  StackItem,
  StatItem,
} from "@/lib/content";
import { links } from "@/lib/links";
import { getTranslations } from "next-intl/server";

export async function HomeView() {
  const t = await getTranslations("Home");
  const stats = t.raw("stats") as StatItem[];
  const stack = t.raw("stack") as StackItem[];
  const bandItems = t.raw("bandItems") as BandItem[];
  const cases = t.raw("cases") as CaseItem[];
  const experience = t.raw("experience") as ExperienceItem[];
  const imageFrame = cases.reduce((widest, item) => {
    if (!item.imageWidth || !item.imageHeight) return widest;
    return Math.max(widest, item.imageWidth / item.imageHeight);
  }, 16 / 10);

  return (
    <main>
      <section className="shell pt-[clamp(56px,9vw,128px)] pb-[72px]">
        <FadeIn>
          <p className="mb-7 font-mono text-[13px] tracking-[0.08em] text-ink-muted uppercase">
            {t("eyebrow")}
          </p>
          <h1 className="text-hero max-w-[12ch]">{t("title")}</h1>
          <p className="text-lead mt-9 max-w-[680px] text-ink-body">
            {t.rich("lead", {
              strong: (chunks) => (
                <strong className="font-medium text-foreground">{chunks}</strong>
              ),
            })}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <PillLink href={links.linkedin}>{t("linkedinCta")}</PillLink>
            <PillLink href="#trabalhos" variant="outline">
              {t("seeWork")}
            </PillLink>
          </div>
        </FadeIn>
      </section>

      <section aria-label={t("statsLabel")} className="border-y border-line">
        <div className="shell cols-stats">
          {stats.map((item) => (
            <div key={item.value} className="py-8 pr-6">
              <div className="text-[44px] font-semibold tracking-[-0.03em]">
                {item.value}
              </div>
              <div className="mt-1.5 text-[15px] text-ink-muted">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="shell pt-[120px]">
        <p className="mb-5 font-mono text-[13px] tracking-[0.08em] text-ink-muted">
          {t("stackKicker")}
        </p>
        <h2 className="text-section mb-14 max-w-[20ch]">{t("stackTitle")}</h2>
        <div className="cols-stack">
          {stack.map((item) => (
            <div key={item.area} className="border-t border-foreground pt-7 pb-9">
              <h3 className="font-mono text-[13px] font-medium tracking-[0.08em] text-ink-muted">
                {item.area}
              </h3>
              <p className="mt-[18px] text-[26px] leading-[1.3] font-semibold tracking-[-0.02em] whitespace-pre-line">
                {item.main}
              </p>
              <p className="mt-[18px] text-[15px] leading-[1.6] text-ink-body">
                {item.desc}
              </p>
              <p className="mt-3.5 font-mono text-[12.5px] text-ink-muted">
                {item.more}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="ia-titulo"
        className="shell mt-[120px]"
      >
        <div className="cols-band rounded-[8px] bg-band p-[clamp(32px,6vw,72px)]">
          <div>
            <p className="mb-5 font-mono text-[13px] tracking-[0.08em] text-highlight">
              {t("bandKicker")}
            </p>
            <h2 id="ia-titulo" className="text-band-title">
              {t("bandTitle")}
            </h2>
            <p className="mt-6 max-w-[540px] text-[17px] leading-[1.6] text-ink-body">
              {t("bandText")}
            </p>
            <PillLink href="/engenharia-com-ia" className="mt-8">
              {t("bandCta")}
            </PillLink>
          </div>
          <ul className="m-0 list-none p-0">
            {bandItems.map((item, index) => (
              <li
                key={item.title}
                className={
                  index === bandItems.length - 1
                    ? "border-y border-line-soft py-[22px]"
                    : "border-t border-line-soft py-[22px]"
                }
              >
                <div className="text-[18px] font-semibold">{item.title}</div>
                <div className="mt-1.5 text-[15px] leading-[1.55] text-ink-body">
                  {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="trabalhos" className="shell pt-[140px]">
        <p className="mb-5 font-mono text-[13px] tracking-[0.08em] text-ink-muted">
          {t("workKicker")}
        </p>
        <h2 className="text-section mb-4">{t("workTitle")}</h2>
        <p className="mb-14 max-w-[640px] text-[17px] leading-[1.6] text-ink-body">
          {t("workIntro")}
        </p>
        <div className="cols-cases">
          {cases.map((item) => {
            const media =
              item.image && item.imageWidth && item.imageHeight ? (
                <div
                  className="overflow-hidden rounded-[6px]"
                  style={{ aspectRatio: imageFrame }}
                >
                  <Image
                    src={item.image}
                    alt={item.href ? "" : item.imgLabel}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    sizes="(max-width: 1080px) 100vw, 540px"
                    className="block h-auto w-full max-w-none transition-opacity group-hover:opacity-90"
                  />
                </div>
              ) : (
                <div
                  role="img"
                  aria-label={item.imgLabel}
                  className="flex aspect-[16/10] items-end rounded-[6px] bg-placeholder p-5 font-mono text-[13px] text-ink-muted"
                >
                  {item.img}
                </div>
              );
            const heading = (
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                <h3 className="text-case group-hover:text-highlight">
                  {item.title}
                  {item.href ? (
                    <span aria-hidden="true" className="ml-1.5 text-[0.55em] text-highlight">
                      ↗
                    </span>
                  ) : null}
                </h3>
                <span
                  aria-hidden={item.href ? true : undefined}
                  className="font-mono text-[12px] tracking-[0.06em] text-highlight"
                >
                  {item.tag}
                </span>
              </div>
            );

            return (
              <article key={item.title} className="flex flex-col gap-[22px]">
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-[22px] rounded-[6px] text-inherit no-underline focus-ring"
                  >
                    {media}
                    {heading}
                  </a>
                ) : (
                  <>
                    {media}
                    {heading}
                  </>
                )}
                <p className="text-[17px] leading-[1.6] text-ink-body">{item.text}</p>
                <PointList points={item.points} />
                <p className="border-t border-line pt-4 font-mono text-[12.5px] text-ink-muted">
                  {item.stack}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="experiencia" className="shell pt-[140px]">
        <p className="mb-5 font-mono text-[13px] tracking-[0.08em] text-ink-muted">
          {t("experienceKicker")}
        </p>
        <div className="border-t border-foreground">
          {experience.map((item) => (
            <div
              key={item.org}
              className="cols-experience border-b border-line py-8"
            >
              <div className="font-mono text-sm text-ink-muted">{item.when}</div>
              <div>
                <div className="text-[24px] font-semibold tracking-[-0.02em]">
                  {item.org}
                </div>
                <div className="mt-1 text-ink-body">{item.role}</div>
              </div>
              <p className="text-[15px] leading-[1.6] text-ink-body">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
