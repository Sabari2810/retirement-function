"use client";

import NewsTicker from "@/components/NewsTicker";
import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";

export default function QuietHumor() {
  const { quietHumor } = useContent();

  return (
    <section className="paper-alt">
      <Reveal>
        <NewsTicker label={quietHumor.breakingNews} text={quietHumor.headline} />
      </Reveal>
    </section>
  );
}
