import Reveal from "@/components/Reveal";
import { event } from "@/lib/config";

export default function Rsvp() {
  return (
    <section className="px-4 py-12 text-center sm:py-16">
      <Reveal className="mx-auto max-w-md">
        <h2 className="font-display text-xl font-black leading-snug sm:text-2xl">
          அனைத்து பிரிவினரும், குடும்பத்தினரும், நண்பர்களும்
          <br />
          பணிக்கு ஆஜராகவும்.
        </h2>
        <p className="mt-3 text-sm text-[var(--ink-soft)] sm:text-base">
          உங்கள் வருகை இந்தக் கொண்டாட்டத்தை இன்னும் சிறப்பானதாக ஆக்கும்.
        </p>
        <a
          href={event.rsvpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-12 items-center gap-2 border-2 border-[var(--ink)] bg-[var(--ink)] px-8 py-3 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[var(--paper)] transition-opacity hover:opacity-85"
        >
          பதிலளிக்கவும்
        </a>
      </Reveal>
    </section>
  );
}
