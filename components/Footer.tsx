import Reveal from "@/components/Reveal";
import { dad, event } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t-4 border-double border-[var(--ink)] px-4 py-16 text-center sm:px-8">
      <Reveal>
        <p className="font-display text-2xl font-black uppercase leading-snug sm:text-4xl">
          Case Closed.
          <br />
          Career Complete.
          <br />
          Retirement Begins.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
          {dad.yearsOfService} years served.
          <br />A city protected.
          <br />A family proud.
          <br />
          Now it&apos;s time for the next chapter.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="font-display mx-auto mt-8 max-w-lg text-lg leading-relaxed italic sm:text-2xl">
          Come celebrate the man, the uniform, and the {dad.yearsOfService} years behind it.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="mt-8 font-mono text-sm uppercase tracking-[0.3em] text-[var(--ink-soft)]">
          {event.dateLabel}
        </p>
      </Reveal>
    </footer>
  );
}
