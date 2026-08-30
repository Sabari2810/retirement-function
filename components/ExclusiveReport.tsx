import Reveal from "@/components/Reveal";
import Stamp from "@/components/Stamp";
import Typewriter from "@/components/Typewriter";
import { dad, event } from "@/lib/config";

export default function ExclusiveReport() {
  return (
    <section className="px-4 py-3 sm:px-8">
      <div className="mx-auto max-w-2xl border-2 border-[var(--ink)] p-3 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--ink)]/30 pb-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ink-soft)] sm:text-xs">
          <Typewriter text={`Case No. ${dad.yearsOfService}/${dad.yearsOfService}-CCP`} />
          <span>{event.dateLabel}</span>
        </div>

        <Reveal>
          <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--stamp)] sm:text-xs">
            Exclusive Report
          </p>
          <h2 className="font-display mt-1 text-center text-lg font-black uppercase leading-tight sm:text-3xl">
            {dad.yearsOfService} Years. Countless Duties. One Final Shift.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-2 max-w-xl text-center text-[11px] leading-snug sm:mt-4 sm:text-base">
            From the early mornings to the long nights, from uniforms to countless stories, from
            protecting strangers to becoming a familiar face to many, he showed up. Every single
            time.
          </p>
          <p className="mx-auto mt-1.5 max-w-xl text-center text-[11px] leading-snug text-[var(--ink-soft)] sm:mt-2 sm:text-base">
            Now, after {dad.yearsOfService} years with the {dad.department}, it&apos;s time for the
            uniform to take a little rest too.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-3 flex flex-wrap items-end justify-between gap-4 sm:mt-6">
          <div className="flex-1 min-w-[140px]">
            <div className="h-5 border-b border-[var(--ink)] sm:h-7" />
            <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-[var(--ink-faint)]">
              Officer&apos;s Signature
            </p>
          </div>
          <Stamp rotate={5}>Filed with Love</Stamp>
        </Reveal>

        <p className="mt-3 text-center font-mono text-[8px] uppercase tracking-widest text-[var(--ink-faint)] sm:mt-6 sm:text-[10px]">
          This is a family tribute, not an actual police document.
        </p>
      </div>
    </section>
  );
}
