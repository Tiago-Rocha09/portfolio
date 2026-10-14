import { AiView } from "@/components/ai-view";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");

  return {
    title: t("aiTitle"),
    description: t("aiDescription"),
  };
}

export default function EngineeringWithAiPage() {
  return <AiView />;
}
