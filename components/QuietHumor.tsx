"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";

export default function QuietHumor() {
  const { quietHumor } = useContent();

  return (
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 px-4 py-12 sm:py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 sm:flex-row sm:gap-10">
        <Reveal className="flex-1 border border-[var(--ink)]/30 p-5 text-center sm:p-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
            {quietHumor.officialNotice}
          </p>
          <p className="mt-2 text-sm leading-relaxed sm:text-base">{quietHumor.body}</p>
          <p className="font-display mt-2 text-xl font-black uppercase sm:text-2xl">
            {quietHumor.dayOff}
          </p>
          <p className="mt-3 text-xs italic text-[var(--ink-soft)] sm:text-sm">
            {quietHumor.note}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex-1 border border-[var(--ink)]/30 p-5 text-center sm:p-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--stamp)]">
            {quietHumor.breakingNews}
          </p>
          <p className="font-display mt-2 text-lg font-bold leading-snug sm:text-xl">
            {quietHumor.headline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
