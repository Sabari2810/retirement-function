"use client";

import Reveal from "@/components/Reveal";
import { useContent, useLanguage } from "@/lib/LanguageContext";

export default function FinalInvitation() {
  const { event, finalInvitation } = useContent();
  const { lang } = useLanguage();
  const altBg = lang === "ta" ? "paper-alt " : "";

  return (
    <footer className={`${altBg}border-t-4 border-double border-[var(--ink)] px-4 py-14 text-center sm:py-20`}>
      <Reveal className="mx-auto max-w-md">
        <h2 className="font-display text-xl font-black uppercase leading-snug sm:text-2xl">
          {finalInvitation.heading}
        </h2>

        <p className="font-display mt-5 text-lg font-bold sm:mt-6 sm:text-xl">
          {event.dateLabel}
        </p>
        <p className="text-sm text-[var(--ink-soft)] sm:text-base">{event.time}</p>

        <p className="font-display mt-4 text-lg font-bold sm:text-xl">{event.venueName}</p>
        <p className="text-sm text-[var(--ink-soft)] sm:text-base">
          {event.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <p className="mt-1 text-sm italic text-[var(--ink-soft)] sm:text-base">
          {finalInvitation.landmarkLabel}: {event.landmark}
        </p>

        <p className="font-display mt-8 text-xl italic sm:mt-10 sm:text-2xl">
          {finalInvitation.closing}
        </p>
      </Reveal>
    </footer>
  );
}
