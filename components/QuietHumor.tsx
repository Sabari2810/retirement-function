"use client";

import { useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";

export default function QuietHumor() {
  const { quietHumor } = useContent();
  const reduce = useReducedMotion();

  const tickerGroup = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {[0, 1, 2].map((i) => (
        <span key={i} className="flex shrink-0 items-center whitespace-nowrap py-2 sm:py-3">
          <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-[var(--paper)] sm:text-sm">
            {quietHumor.breakingNews}
          </span>
          <span className="mx-4 text-[var(--paper)]/50">&bull;</span>
          <span className="font-display text-base font-bold uppercase text-[var(--paper)] sm:text-lg">
            {quietHumor.headline}
          </span>
          <span className="mx-4 text-[var(--paper)]/50">&bull;</span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 py-12 sm:py-16">
      <div className="mx-auto max-w-xl px-4">
        <Reveal className="border border-[var(--ink)]/30 p-5 text-center sm:p-6">
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
      </div>

      <Reveal
        delay={0.1}
        className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden border-y-2 border-[var(--stamp)] bg-[var(--stamp)] sm:mt-10"
      >
        <div className={reduce ? "flex" : "flex w-max animate-marquee"}>
          {tickerGroup(false)}
          {!reduce && tickerGroup(true)}
        </div>
      </Reveal>
    </section>
  );
}
