import Reveal from "@/components/Reveal";
import { careerTimeline, officer } from "@/lib/config";

export default function CareerRecord() {
  return (
    <section id="the-record" className="px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
            Page 2 &middot; The Career Record
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-black uppercase sm:text-5xl">
            The Record
          </h2>
          <p className="mt-2 text-center font-mono text-sm uppercase tracking-[0.15em] text-[var(--ink-soft)] sm:text-base">
            {officer.totalService}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm italic text-[var(--ink-soft)] sm:text-base">
            A career measured not merely in years, but in places served, responsibilities carried
            and shifts completed.
          </p>
        </Reveal>

        <div className="mt-10 border-t-2 border-[var(--ink)]/20 pt-8 sm:columns-2 sm:gap-10 sm:pt-12">
          {careerTimeline.map((item, i) => (
            <Reveal
              key={item.date + item.posting}
              delay={Math.min(i * 0.05, 0.4)}
              className="mb-7 break-inside-avoid border-b border-[var(--ink)]/15 pb-7 sm:mb-9 sm:pb-9"
            >
              <p className="font-display text-2xl font-black leading-none sm:text-3xl">
                {item.date}
              </p>
              {item.label && (
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--stamp)] sm:text-xs">
                  {item.label}
                </p>
              )}
              <p className="mt-1.5 text-base font-bold leading-snug sm:text-lg">{item.posting}</p>
              {item.note && (
                <p className="mt-1 text-sm italic leading-snug text-[var(--ink-soft)] sm:text-base">
                  {item.note}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
