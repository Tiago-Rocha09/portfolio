import { FadeIn } from "@/components/fade-in";
import { PointList } from "@/components/point-list";
import { Link } from "@/i18n/navigation";
import type {
  CommandItem,
  KitItem,
  LayerItem,
  MetricItem,
  PrincipleItem,
  ProductItem,
  ProofItem,
  StepItem,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

function KitList({
  items,
}: {
  items: readonly { title: string; text: string }[];
}) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((item) => (
        <li key={item.title} className="border-b border-line py-[18px]">
          <div className="text-[17px] font-semibold">{item.title}</div>
          <div className="mt-1.5 text-[15px] leading-[1.55] text-ink-body">
            {item.text}
          </div>
        </li>
      ))}
    </ul>
  );
}

export async function AiView() {
  const t = await getTranslations("Ai");
  const layers = t.raw("layers") as LayerItem[];
  const steps = t.raw("steps") as StepItem[];
  const principles = t.raw("principles") as PrincipleItem[];
  const sddMetrics = t.raw("sddMetrics") as MetricItem[];
  const sddkit = t.raw("sddkit") as KitItem[];
  const commands = t.raw("commands") as CommandItem[];
  const wpkit = t.raw("wpkit") as KitItem[];
  const proof = t.raw("proof") as ProofItem[];
  const products = t.raw("products") as ProductItem[];

  return (
    <main>
      <section className="shell pt-[clamp(56px,9vw,128px)] pb-24">
        <FadeIn>
          <Link
            href="/"
            className="mb-10 inline-block font-mono text-[13px] text-ink-muted no-underline focus-ring"
          >
            {t("back")}
          </Link>
          <p className="mb-7 font-mono text-[13px] tracking-[0.08em] text-highlight">
            {t("kicker")}
          </p>
          <h1 className="text-hero-ai max-w-[15ch]">
            {t.rich("title", {
              accent: (chunks) => (
                <span className="text-highlight">{chunks}</span>
              ),
            })}
          </h1>
          <p className="text-lead mt-9 max-w-[700px] text-ink-body">{t("lead")}</p>
        </FadeIn>
      </section>

      <section aria-labelledby="camadas" className="border-t border-foreground">
        <h2 id="camadas" className="sr-only">
          {t("layersTitle")}
        </h2>
        <div className="shell cols-layers">
          {layers.map((layer) => (
            <div key={layer.n} className="pt-9 pr-8 pb-10">
              <div className="font-mono text-[13px] text-highlight">{layer.n}</div>
              <h3 className="mt-3.5 text-[26px] font-semibold tracking-[-0.02em]">
                {layer.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-ink-body">
                {layer.text}
              </p>
              <p className="mt-4 font-mono text-[12.5px] text-ink-muted">
                {layer.where}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="shell py-[clamp(72px,9vw,120px)]">
          <p className="mb-5 font-mono text-[13px] tracking-[0.08em] text-footer-muted">
            {t("flowKicker")}
          </p>
          <h2 className="text-section max-w-[20ch]">{t("flowTitle")}</h2>
          <ol aria-label={t("flowAria")} className="cols-steps mt-14 list-none p-0">
            {steps.map((step) => {
              const emphasis = step.n === "5";
              return (
                <li
                  key={step.n}
                  className={cn(
                    "rounded-[6px] border p-5",
                    emphasis
                      ? "border-step-border bg-highlight"
                      : "border-inverse-line",
                  )}
                >
                  <div
                    className={cn(
                      "font-mono text-xs",
                      emphasis ? "text-on-highlight-soft" : "text-footer-muted",
                    )}
                  >
                    {step.n}
                  </div>
                  <div className="mt-2.5 text-[18px] font-semibold">{step.title}</div>
                  <div
                    className={cn(
                      "mt-1.5 text-sm leading-[1.5]",
                      emphasis ? "text-on-highlight-text" : "text-inverse-body",
                    )}
                  >
                    {step.text}
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="cols-principles mt-16">
            {principles.map((item) => (
              <div key={item.title} className="border-t border-inverse-line py-6">
                <h3 className="mb-2 text-[19px] font-semibold">{item.title}</h3>
                <p className="text-[15px] leading-[1.6] text-inverse-body">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kits" className="shell pt-[140px]">
        <p className="mb-5 font-mono text-[13px] tracking-[0.08em] text-ink-muted">
          {t("kitsKicker")}
        </p>
        <h2 className="text-section mb-4 max-w-[20ch]">{t("kitsTitle")}</h2>
        <p className="mb-16 max-w-[680px] text-[17px] leading-[1.6] text-ink-body">
          {t("kitsIntro")}
        </p>

        <article className="cols-split border-t border-foreground py-12">
          <div>
            <div className="font-mono text-xs tracking-[0.06em] text-highlight">
              {t("sddKicker")}
            </div>
            <h3 className="text-kit mt-3">{t("sddTitle")}</h3>
            <p className="mt-[18px] text-[17px] leading-[1.6] text-ink-body">
              {t("sddText")}
            </p>
            <dl className="cols-metrics mt-8 border-t border-line">
              {sddMetrics.map((metric) => (
                <div key={metric.label} className="border-b border-line py-[18px]">
                  <dt className="text-sm text-ink-muted">{metric.label}</dt>
                  <dd className="mt-1 text-[30px] font-semibold tracking-[-0.02em]">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h4 className="mb-2 font-mono text-[13px] font-medium tracking-[0.08em] text-ink-muted">
              {t("brought")}
            </h4>
            <KitList items={sddkit} />
          </div>
        </article>

        <article className="cols-split border-t border-foreground py-12">
          <div>
            <div className="font-mono text-xs tracking-[0.06em] text-highlight">
              {t("wpKicker")}
            </div>
            <h3 className="text-kit mt-3">{t("wpTitle")}</h3>
            <p className="mt-[18px] text-[17px] leading-[1.6] text-ink-body">
              {t("wpText")}
            </p>
            <div className="mt-8 overflow-x-auto rounded-[6px] bg-code-wash p-5 font-mono text-[13.5px] leading-8 whitespace-nowrap">
              {commands.map((command) => (
                <div
                  key={command.text}
                  className={command.muted ? "text-ink-muted" : undefined}
                >
                  {command.text}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-mono text-[13px] font-medium tracking-[0.08em] text-ink-muted">
              {t("brought")}
            </h4>
            <KitList items={wpkit} />
          </div>
        </article>
      </section>

      <section id="prova" className="mt-[140px] bg-highlight text-white">
        <div className="shell py-[clamp(72px,9vw,120px)]">
          <p className="mb-5 font-mono text-[13px] tracking-[0.08em] text-on-highlight-soft">
            {t("proofKicker")}
          </p>
          <h2 className="text-section max-w-[22ch]">{t("proofTitle")}</h2>
          <p className="mt-7 max-w-[680px] text-[18px] leading-[1.6] text-on-highlight-text">
            {t.rich("proofLead", {
              strong: (chunks) => (
                <strong className="font-semibold">{chunks}</strong>
              ),
            })}
          </p>
          <ol className="cols-proof mt-14 list-none p-0">
            {proof.map((item) => (
              <li key={item.when} className="border-t border-proof-line py-6 pr-6">
                <div className="font-mono text-[12.5px] text-on-highlight-soft">
                  {item.when}
                </div>
                <div className="mt-2.5 text-[20px] font-semibold tracking-[-0.01em]">
                  {item.title}
                </div>
                <div className="mt-2 text-[15px] leading-[1.55] text-on-highlight-text">
                  {item.text}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="produto" className="shell pt-[140px]">
        <p className="mb-5 font-mono text-[13px] tracking-[0.08em] text-ink-muted">
          {t("productKicker")}
        </p>
        <h2 className="text-section mb-14 max-w-[20ch]">{t("productTitle")}</h2>
        <div className="cols-split">
          {products.map((product) => (
            <article
              key={product.kicker}
              className="rounded-[8px] border border-line bg-surface p-9"
            >
              <div className="font-mono text-xs tracking-[0.06em] text-highlight">
                {product.kicker}
              </div>
              <h3 className="mt-3 text-[28px] font-semibold tracking-[-0.025em]">
                {product.title}
              </h3>
              <p className="mt-3.5 text-[16px] leading-[1.6] text-ink-body">
                {product.text}
              </p>
              <div className="mt-5">
                <PointList points={product.points} />
              </div>
              <p className="mt-6 font-mono text-[12.5px] text-ink-muted">
                {product.stack}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="guardrails" className="shell cols-split items-start pt-[140px]">
        <div>
          <p className="mb-5 font-mono text-[13px] tracking-[0.08em] text-ink-muted">
            {t("guardKicker")}
          </p>
          <h2 className="text-section">{t("guardTitle")}</h2>
          <p className="mt-6 text-[17px] leading-[1.6] text-ink-body">{t("guardP1")}</p>
          <p className="mt-[18px] text-[17px] leading-[1.6] text-ink-body">
            {t("guardP2")}
          </p>
        </div>
        <figure className="m-0">
          <div className="overflow-x-auto rounded-[8px] bg-foreground p-6 font-mono text-[13.5px] leading-8 whitespace-nowrap text-term">
            <div>
              <span className="text-footer-muted">{t("readPrompt")}</span>{" "}
              {t("readCommand")}
            </div>
            <div className="text-ok">{t("readOk")}</div>
            <div className="mt-3">
              <span className="text-footer-muted">{t("writePrompt")}</span>{" "}
              {t("writeCommand")}
            </div>
            <div className="text-bad">{t("writeBad")}</div>
            <div className="mt-3">
              <span className="text-footer-muted">{t("humanPrompt")}</span>{" "}
              {t("humanCommand")}
            </div>
            <div className="text-ok">{t("ticketOk")}</div>
            <div className="mt-3">
              <span className="text-footer-muted">{t("agentPrompt")}</span>{" "}
              {t("agentCommand")}
            </div>
            <div className="text-bad">{t("agentBad")}</div>
          </div>
          <figcaption className="mt-3 text-sm text-ink-muted">
            {t("caption")}
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
