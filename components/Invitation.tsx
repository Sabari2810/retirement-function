"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";

export default function Invitation() {
  const { invitation, officer } = useContent();

  return (
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 px-4 py-12 sm:py-16">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="text-base leading-relaxed sm:text-lg">{invitation.lead}</p>
        <h2 className="font-display mt-3 text-2xl font-black uppercase sm:text-4xl">
          {officer.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
          {invitation.body}
        </p>
        <p className="font-display mt-4 text-base italic leading-relaxed sm:text-lg">
          {invitation.closing}
        </p>
      </Reveal>
    </section>
  );
}
