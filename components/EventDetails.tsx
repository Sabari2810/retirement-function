import Reveal from "@/components/Reveal";
import { event } from "@/lib/config";

const fields = [
  { k: "Date", v: event.dateLabel },
  { k: "Time", v: event.time },
  { k: "Venue", v: event.venue },
  { k: "Dress Code", v: event.dressCode },
  { k: "Mission", v: event.mission },
];

export default function EventDetails() {
  return (
    <section className="paper-alt px-4 py-2 sm:px-8">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--stamp)] sm:text-xs">
          Special Edition Event
        </p>
        <h2 className="font-display mt-1.5 text-lg font-black uppercase leading-tight sm:mt-3 sm:text-4xl">
          All Units, Family &amp; Friends Report for Duty
        </h2>

        <dl className="mx-auto mt-2 max-w-sm space-y-1 text-left sm:mt-6 sm:space-y-3">
          {fields.map((f) => (
            <div key={f.k} className="flex justify-between gap-4 border-b border-[var(--ink)]/20 pb-1 text-xs sm:pb-2 sm:text-base">
              <dt className="font-mono uppercase tracking-wide text-[var(--ink-soft)]">{f.k}</dt>
              <dd className="text-right font-semibold">{f.v}</dd>
            </div>
          ))}
        </dl>

        <p className="mx-auto mt-2 max-w-sm text-[11px] italic text-[var(--ink-soft)] sm:mt-6 sm:text-base">
          Attendance is strongly recommended. Failure to attend may result in lifelong family
          interrogation.
        </p>

        <a
          href={event.rsvpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-10 items-center gap-2 border-2 border-[var(--ink)] bg-[var(--ink)] px-5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--paper)] transition-opacity hover:opacity-85 sm:mt-6 sm:min-h-12 sm:px-8 sm:py-3.5 sm:text-sm"
        >
          RSVP / Report for Duty
        </a>
      </Reveal>
    </section>
  );
}
