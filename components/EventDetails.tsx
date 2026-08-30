import Reveal from "@/components/Reveal";
import { event } from "@/lib/config";

export default function EventDetails() {
  return (
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 px-4 py-12 sm:py-16">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          ஓய்வூதிய விழா
        </p>

        <dl className="mx-auto mt-6 max-w-sm space-y-4 text-left">
          <div className="border-b border-[var(--ink)]/20 pb-3">
            <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)]">
              தேதி
            </dt>
            <dd className="font-display text-lg font-bold sm:text-xl">{event.dateLabel}</dd>
          </div>

          <div className="border-b border-[var(--ink)]/20 pb-3">
            <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)]">
              நேரம்
            </dt>
            <dd className="font-display text-lg font-bold sm:text-xl">{event.time}</dd>
          </div>

          <div className="border-b border-[var(--ink)]/20 pb-3">
            <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)]">
              இடம்
            </dt>
            <dd className="font-display text-lg font-bold sm:text-xl">{event.venueName}</dd>
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
              அடையாளம்
            </dt>
            <dd className="font-display text-lg font-bold sm:text-xl">{event.landmark}</dd>
          </div>
        </dl>

        <a
          href={event.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 border-2 border-[var(--ink)] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
        >
          வரைபடத்தில் காண
          <span aria-hidden>&rarr;</span>
        </a>
      </Reveal>
    </section>
  );
}
