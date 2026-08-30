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
    <section id="rsvp" className="paper-alt border-y-2 border-[var(--ink)]/20 px-4 py-16 sm:px-8">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--stamp)] sm:text-xs">
          Special Edition Event
        </p>
        <h2 className="font-display mt-3 text-2xl font-black uppercase leading-tight sm:text-4xl">
          All Units, Family &amp; Friends Report for Duty
        </h2>

        <dl className="mx-auto mt-8 max-w-sm space-y-3 text-left">
          {fields.map((f) => (
            <div key={f.k} className="flex justify-between gap-4 border-b border-[var(--ink)]/20 pb-2 text-sm sm:text-base">
              <dt className="font-mono uppercase tracking-wide text-[var(--ink-soft)]">{f.k}</dt>
              <dd className="text-right font-semibold">{f.v}</dd>
            </div>
          ))}
        </dl>

        <p className="mx-auto mt-8 max-w-sm text-sm italic text-[var(--ink-soft)] sm:text-base">
          Attendance is strongly recommended. Failure to attend may result in lifelong family
          interrogation.
        </p>

        <a
          href={event.rsvpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-12 items-center gap-2 border-2 border-[var(--ink)] bg-[var(--ink)] px-8 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[var(--paper)] transition-opacity hover:opacity-85"
        >
          RSVP / Report for Duty
        </a>
      </Reveal>
    </section>
  );
}
