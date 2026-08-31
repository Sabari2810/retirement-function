"use client";

import NewsTicker from "@/components/NewsTicker";
import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";

export default function QuietHumor() {
  const { quietHumor } = useContent();

  return (
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 py-8 sm:py-10">
      <Reveal>
        <NewsTicker label={quietHumor.breakingNews} text={quietHumor.headline} />
      </Reveal>
    </section>
  );
}
