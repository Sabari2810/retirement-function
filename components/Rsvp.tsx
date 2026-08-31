"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";

export default function Rsvp() {
  const { rsvp } = useContent();

  return (
    <section className="border-b-4 border-double border-[var(--ink)] px-4 py-12 text-center sm:py-16">
      <Reveal className="mx-auto max-w-md">
        <h2 className="font-display text-xl font-black uppercase leading-snug sm:text-2xl">
          {rsvp.heading[0]}
          <br />
          {rsvp.heading[1]}
        </h2>
        <p className="mt-3 text-sm text-[var(--ink-soft)] sm:text-base">{rsvp.sub}</p>
      </Reveal>
    </section>
  );
}
