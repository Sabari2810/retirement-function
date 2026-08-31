"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";

export default function Rsvp() {
  const { rsvp } = useContent();
  const hasContent = rsvp.heading && rsvp.sub;

  return (
    <section
      className={`border-b-2 border-[var(--ink)]/20 px-4 text-center ${
        hasContent ? "py-10 sm:py-14" : "py-4 sm:py-6"
      }`}
    >
      {hasContent && (
        <Reveal className="mx-auto max-w-md">
          <h2 className="font-display text-xl font-black uppercase leading-snug sm:text-2xl">
            {rsvp.heading![0]}
            <br />
            {rsvp.heading![1]}
          </h2>
          <p className="mt-3 text-sm text-[var(--ink-soft)] sm:text-base">{rsvp.sub}</p>
        </Reveal>
      )}
    </section>
  );
}
