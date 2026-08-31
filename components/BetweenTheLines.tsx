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

        <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
          {betweenTheLines.lines.map((line, i) => (
            <Reveal key={line.top} delay={i * 0.08} className="text-center">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--ink-faint)] sm:text-sm">
                {line.top}
              </p>
              <p className="font-display mt-1 text-lg font-bold sm:text-2xl">{line.bottom}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14 border-t-2 border-[var(--ink)]/20 pt-10 text-center sm:mt-16 sm:pt-12">
          <h3 className="font-display text-2xl font-black uppercase leading-snug sm:text-4xl">
            {betweenTheLines.turnHeading}
          </h3>
          <div className="mx-auto mt-6 max-w-md space-y-1.5 text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
            {betweenTheLines.turnLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="font-display mx-auto mt-10 max-w-lg text-center text-xl italic leading-relaxed sm:mt-14 sm:text-3xl">
            &ldquo;{betweenTheLines.quote}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
