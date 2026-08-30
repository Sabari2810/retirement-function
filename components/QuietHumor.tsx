import Reveal from "@/components/Reveal";

export default function QuietHumor() {
  return (
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 px-4 py-12 sm:py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 sm:flex-row sm:gap-10">
        <Reveal className="flex-1 border border-[var(--ink)]/30 p-5 text-center sm:p-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
            Official Notice
          </p>
          <p className="mt-2 text-sm leading-relaxed sm:text-base">
            After 38 years of service, the department has finally approved something he may not
            be accustomed to:
          </p>
          <p className="font-display mt-2 text-xl font-black uppercase sm:text-2xl">A Day Off.</p>
          <p className="mt-3 text-xs italic text-[var(--ink-soft)] sm:text-sm">
            Further details regarding what exactly he intends to do with this newfound freedom
            remain unavailable.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex-1 border border-[var(--ink)]/30 p-5 text-center sm:p-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--stamp)]">
            Breaking News
          </p>
          <p className="font-display mt-2 text-lg font-bold leading-snug sm:text-xl">
            Officer finally reports for duty&hellip; at home.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
