"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";

export default function EventDetails() {
  const { event, eventDetails } = useContent();

  return (
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 px-4 py-12 sm:py-16">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          {eventDetails.eyebrow}
        </p>

        <p className="font-display mt-4 text-lg font-black uppercase tracking-wide sm:text-2xl">
          {eventDetails.dutyOrder}
        </p>

        <dl className="mx-auto mt-6 max-w-sm space-y-4 text-left">
          <div className="border-b border-[var(--ink)]/20 pb-3">
            <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)]">
              {eventDetails.dateFieldLabel}
            </dt>
            <dd className="font-display text-xl font-black sm:text-2xl">{event.dateLabel}</dd>
          </div>

          <div className="border-b border-[var(--ink)]/20 pb-3">
            <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)]">
              {eventDetails.timeFieldLabel}
            </dt>
            <dd className="font-display text-xl font-black sm:text-2xl">{event.time}</dd>
          </div>

          <div className="border-b border-[var(--ink)]/20 pb-3">
            <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)]">
              {eventDetails.venueFieldLabel}
            </dt>
            <dd className="font-display text-xl font-black sm:text-2xl">{event.venueName}</dd>
            <dd className="mt-1 text-sm text-[var(--ink-soft)] sm:text-base">
              {event.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </dd>
          </div>

          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)]">
              {eventDetails.landmarkFieldLabel}
            </dt>
            <dd className="font-display text-xl font-black sm:text-2xl">{event.landmark}</dd>
          </div>
        </dl>

        <a
          href={event.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 border-2 border-[var(--ink)] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
        >
          {eventDetails.viewLocation}
          <span aria-hidden>&rarr;</span>
        </a>
      </Reveal>
    </section>
  );
}
