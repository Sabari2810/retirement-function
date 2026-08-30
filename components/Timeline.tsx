import Reveal from "@/components/Reveal";
import { timeline } from "@/lib/config";

export default function Timeline() {
  return (
    <section className="paper-alt flex h-full flex-col justify-center overflow-hidden px-4 py-2 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <p className="text-center font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
            The Record
          </p>
          <h2 className="font-display mt-1 text-center text-lg font-black uppercase sm:mt-2 sm:text-2xl">
            38 Years in the Record
          </h2>
        </Reveal>

        <ol className="mt-2 flex flex-col gap-1.5 sm:mt-6 sm:flex-row sm:gap-2">
          {timeline.map((item, i) => (
            <li key={item.year} className="relative min-w-0 flex-1">
              <Reveal delay={i * 0.08}>
                <div className="flex items-center gap-2.5 sm:flex-col sm:items-start sm:gap-2">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[var(--ink)] font-mono text-[10px] font-bold sm:h-9 sm:w-9 sm:text-[11px]">
                    {item.year.slice(-2)}
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[8px] uppercase tracking-widest text-[var(--ink-soft)] sm:text-[9px]">
                      {item.year}
                    </p>
                    <p className="font-display text-xs font-bold leading-snug sm:mt-0.5 sm:text-sm">
                      {item.label}
                    </p>
                    <p className="hidden text-[11px] italic leading-snug text-[var(--ink-soft)] sm:mt-1 sm:block">
                      {item.note}
                    </p>
                  </div>
                </div>
              </Reveal>

              {i < timeline.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-3.5 top-7 h-[calc(100%+0.375rem)] w-px bg-[var(--ink)]/20 sm:left-auto sm:right-0 sm:top-[18px] sm:h-px sm:w-2 sm:translate-x-full"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
