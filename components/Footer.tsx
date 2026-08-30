import Reveal from "@/components/Reveal";
import { dad, event } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t-2 border-double border-[var(--ink)] px-4 py-3 text-center sm:px-8">
      <Reveal>
        <p className="font-display text-lg font-black uppercase leading-snug sm:text-3xl">
          Case Closed.
          <br />
          Career Complete.
          <br />
          Retirement Begins.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-2 max-w-md text-xs leading-snug text-[var(--ink-soft)] sm:mt-6 sm:text-lg">
          {dad.yearsOfService} years served.
          <br />A city protected.
          <br />A family proud.
          <br />
          Now it&apos;s time for the next chapter.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="font-display mx-auto mt-2 max-w-lg text-sm leading-snug italic sm:mt-6 sm:text-xl">
          Come celebrate the man, the uniform, and the {dad.yearsOfService} years behind it.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:mt-6 sm:text-sm">
          {event.dateLabel}
        </p>
      </Reveal>
    </footer>
  );
}
