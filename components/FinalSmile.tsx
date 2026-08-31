import Reveal from "@/components/Reveal";

export default function FinalSmile() {
  return (
    <section className="border-y-2 border-[var(--ink)]/20 bg-[var(--ink)] px-4 py-16 text-center text-[var(--paper)] sm:py-24">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-60 sm:text-xs">
            And Now&hellip;
          </p>
          <h2 className="font-display mt-3 text-2xl font-black uppercase leading-tight sm:text-4xl">
            The Next Shift Is His Own.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display mt-6 text-lg italic leading-relaxed sm:mt-8 sm:text-xl">
            &ldquo;After years of reporting for duty, it is finally time to report to nobody.&rdquo;
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 space-y-2 text-base leading-relaxed opacity-85 sm:mt-10 sm:text-lg">
            <p>No early alarms for duty.</p>
            <p>No rushing out because the city needs him.</p>
            <p>No checking the clock because a shift is waiting.</p>
            <p>Just more mornings.</p>
            <p>More time, more family, more stories.</p>
            <p>And, hopefully, absolutely no one calling him in for duty.</p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="font-display mt-10 text-2xl font-black uppercase leading-snug sm:mt-14 sm:text-4xl">
            The Uniform May Retire.
            <br />
            The Man Doesn&apos;t.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="font-display mt-10 text-xl italic sm:mt-14 sm:text-2xl">
            Here&apos;s to the Next Chapter.
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] opacity-70 sm:text-sm">
            With Love, Pride &amp; Gratitude.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
