"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";

export default function BetweenTheLines() {
  const { betweenTheLines } = useContent();

  return (
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2 className="font-display text-center text-3xl font-black uppercase sm:text-5xl">
            {betweenTheLines.heading}
          </h2>
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
            {betweenTheLines.sub}
          </p>
        </Reveal>

        <div className="mt-10 space-y-8 sm:mt-14 sm:space-y-10">
          {betweenTheLines.lines.map((stanza, i) => (
            <Reveal key={stanza[0]} delay={i * 0.08} className="text-center">
              {stanza.map((line) => (
                <p key={line} className="font-display text-lg font-bold leading-snug sm:text-2xl">
                  {line}
                </p>
              ))}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.35} className="mt-14 border-t-2 border-[var(--ink)]/20 pt-10 sm:mt-16 sm:pt-12">
          <p className="font-display mx-auto max-w-lg text-center text-xl italic leading-relaxed sm:text-3xl">
            &ldquo;{betweenTheLines.quote}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
