import Reveal from "@/components/Reveal";
import Stamp from "@/components/Stamp";
import Typewriter from "@/components/Typewriter";
import { dad, event } from "@/lib/config";

export default function ExclusiveReport() {
  return (
    <section className="px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-2xl border-2 border-[var(--ink)] p-6 sm:p-10">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--ink)]/30 pb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--ink-soft)] sm:text-xs">
          <Typewriter text={`Case No. ${dad.yearsOfService}/${dad.yearsOfService}-CCP`} />
          <span>{event.dateLabel}</span>
        </div>

        <Reveal>
          <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--stamp)] sm:text-xs">
            Exclusive Report
          </p>
          <h2 className="font-display mt-2 text-center text-2xl font-black uppercase leading-tight sm:text-4xl">
            {dad.yearsOfService} Years. Countless Duties.
            <br />
            One Final Shift.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed sm:text-lg">
            From the early mornings to the long nights, from uniforms to countless stories, from
            protecting strangers to becoming a familiar face to many, he showed up. Every single
            time.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
            Now, after {dad.yearsOfService} years with the {dad.department}, it&apos;s time for the
            uniform to take a little rest too.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <div className="flex-1 min-w-[160px]">
            <div className="h-8 border-b border-[var(--ink)]" />
            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[var(--ink-faint)]">
              Officer&apos;s Signature
            </p>
          </div>
          <Stamp rotate={5}>Filed with Love</Stamp>
        </Reveal>

        <p className="mt-8 text-center font-mono text-[9px] uppercase tracking-widest text-[var(--ink-faint)] sm:text-[10px]">
          This is a family tribute, not an actual police document.
        </p>
      </div>
    </section>
  );
}
