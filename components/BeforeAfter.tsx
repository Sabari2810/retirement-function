"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";

export default function BeforeAfter() {
  const { beforeAfter, officer } = useContent();

  return (
    <section className="border-t-2 border-[var(--ink)]/20 px-4 py-14 sm:py-20">
      <Reveal>
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          {beforeAfter.eyebrow}
        </p>
        <h2 className="font-display mt-3 text-center text-3xl font-black uppercase sm:text-5xl">
          {beforeAfter.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-[var(--ink-soft)] sm:text-base">
          {beforeAfter.sub}
        </p>
      </Reveal>

      <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center sm:gap-8">
        <Reveal className="flex w-full max-w-[240px] flex-col items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden border-4 border-[var(--ink)]">
            <Image
              src="/photos/young.jpeg"
              alt={`${officer.name}, early in his career`}
              fill
              sizes="240px"
              className="object-cover object-top sepia-[0.15] contrast-105"
            />
          </div>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)] sm:text-sm">
            {beforeAfter.thenLabel}
          </p>
        </Reveal>

        <div className="font-display rotate-90 text-3xl font-black text-[var(--ink-faint)] sm:mt-16 sm:rotate-0 sm:text-4xl">
          &rarr;
        </div>

        <Reveal delay={0.1} className="flex w-full max-w-[240px] flex-col items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden border-4 border-[var(--ink)]">
            <Image
              src="/photos/photo-10.jpeg"
              alt={`${officer.name}, in his final days of service`}
              fill
              sizes="240px"
              className="object-cover object-top sepia-[0.15] contrast-105"
            />
          </div>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)] sm:text-sm">
            {beforeAfter.nowLabel}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
