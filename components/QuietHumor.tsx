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
            <span className="siren-light">&#x1F6A8;</span> {quietHumor.breakingNews}{" "}
            <span className="siren-light">&#x1F6A8;</span>
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
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 py-8 sm:py-10">
      <Reveal className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y-2 border-[var(--stamp)] bg-[var(--stamp)]">
        <div className={reduce ? "flex" : "flex w-max animate-marquee"}>
          {tickerGroup(false)}
          {!reduce && tickerGroup(true)}
        </div>
      </Reveal>
    </section>
  );
}
