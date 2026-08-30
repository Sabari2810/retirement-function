import Reveal from "@/components/Reveal";
import { event } from "@/lib/config";

export default function Rsvp() {
  return (
    <section className="px-4 py-12 text-center sm:py-16">
      <Reveal className="mx-auto max-w-md">
        <h2 className="font-display text-xl font-black uppercase leading-snug sm:text-2xl">
          All Units, Family &amp; Friends
          <br />
          Report for Duty.
        </h2>
        <p className="mt-3 text-sm text-[var(--ink-soft)] sm:text-base">
          Your presence would make this celebration even more special.
        </p>
        <a
          href={event.rsvpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-12 items-center gap-2 border-2 border-[var(--ink)] bg-[var(--ink)] px-8 py-3 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[var(--paper)] transition-opacity hover:opacity-85"
        >
          RSVP
        </a>
      </Reveal>
    </section>
  );
}
