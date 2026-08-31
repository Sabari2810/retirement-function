"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";

export default function NewPosting() {
  const { newPosting } = useContent();

  return (
    <section className="px-4 pb-14 pt-8 sm:pb-20 sm:pt-10">
      <Reveal className="mx-auto max-w-md border-2 border-[var(--ink)] p-5 text-center sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          {newPosting.eyebrow}
        </p>

        <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)] sm:text-xs">
          {newPosting.formerLabel}
        </p>
        <p className="text-base text-[var(--ink-soft)] line-through decoration-2 sm:text-lg">
          {newPosting.former}
        </p>

        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-[var(--stamp)] sm:text-xs">
          {newPosting.newLabel}
        </p>
        <p className="font-display text-2xl font-black uppercase leading-snug sm:text-4xl">
          {newPosting.newTitle}
        </p>

        <dl className="mx-auto mt-6 max-w-xs space-y-3 text-left">
          {newPosting.fields.map((f) => (
            <div
              key={f.k}
              className="flex flex-wrap justify-between gap-x-4 border-b border-dotted border-[var(--ink)]/30 pb-1.5 text-sm sm:text-base"
            >
              <dt className="shrink-0 font-mono uppercase tracking-wide text-[var(--ink-soft)]">
                {f.k}
              </dt>
              <dd className="text-right font-semibold">{f.v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
