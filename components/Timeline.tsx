import Reveal from "@/components/Reveal";
import { timeline } from "@/lib/config";

export default function Timeline() {
  return (
    <section className="paper-alt flex min-h-full flex-col justify-center px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
            The Record
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-black uppercase sm:text-5xl">
            38 Years in the Record
          </h2>
        </Reveal>

        <ol className="mt-12 flex flex-col gap-10 sm:flex-row sm:gap-4 sm:overflow-x-auto sm:pb-6">
          {timeline.map((item, i) => (
            <li key={item.year} className="relative flex-1 sm:min-w-[190px]">
              <Reveal delay={i * 0.08}>
                <div className="flex items-start gap-4 sm:flex-col sm:items-start sm:gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[var(--ink)] font-mono text-xs font-bold">
                    {item.year.slice(-2)}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)]">
                      {item.year}
                    </p>
                    <p className="font-display mt-0.5 text-base font-bold leading-snug sm:text-lg">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs italic text-[var(--ink-soft)]">{item.note}</p>
                  </div>
                </div>
              </Reveal>

              {i < timeline.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[22px] top-11 h-[calc(100%+1.5rem)] w-px bg-[var(--ink)]/20 sm:left-auto sm:right-0 sm:top-[22px] sm:h-px sm:w-4 sm:translate-x-full"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
