"use client";

import NewsTicker from "@/components/NewsTicker";
import Reveal from "@/components/Reveal";
import { useContent, useLanguage } from "@/lib/LanguageContext";

export default function QuietHumor() {
  const { quietHumor } = useContent();
  const { lang } = useLanguage();

  return (
    <section className={lang === "ta" ? "" : "paper-alt"}>
      <Reveal>
        <NewsTicker label={quietHumor.breakingNews} text={quietHumor.headline} />
      </Reveal>
    </section>
  );
}
