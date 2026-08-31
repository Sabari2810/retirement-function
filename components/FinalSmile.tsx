"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";

export default function FinalSmile() {
  const { finalSmile } = useContent();

  return (
    <section className="border-y-2 border-[var(--ink)]/20 bg-[var(--ink)] px-4 py-16 text-center text-[var(--paper)] sm:py-24">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-60 sm:text-xs">
            {finalSmile.andNow}
          </p>
          <p className="font-display mt-3 text-2xl font-black uppercase leading-snug sm:text-4xl">
            {finalSmile.closing[0]}
            <br />
            {finalSmile.closing[1]}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display mt-6 text-lg italic leading-relaxed sm:mt-8 sm:text-xl">
            &ldquo;{finalSmile.quote}&rdquo;
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="font-display mt-10 text-xl italic sm:mt-14 sm:text-2xl">
            {finalSmile.chapter}
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] opacity-70 sm:text-sm">
            {finalSmile.loveNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
