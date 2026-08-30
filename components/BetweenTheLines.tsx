import Reveal from "@/components/Reveal";
import { betweenTheLines } from "@/lib/config";

export default function BetweenTheLines() {
  return (
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
            Because a Service Record Never Tells the Whole Story
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-black uppercase sm:text-5xl">
            Between the Lines
          </h2>
        </Reveal>

        <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
          {betweenTheLines.map((line, i) => (
            <Reveal key={line.top} delay={i * 0.08} className="text-center">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--ink-faint)] sm:text-sm">
                {line.top}
              </p>
              <p className="font-display mt-1 text-lg font-bold sm:text-2xl">{line.bottom}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="font-display mx-auto mt-12 max-w-lg text-center text-xl italic leading-relaxed sm:mt-16 sm:text-3xl">
            &ldquo;The years are easy to count. The moments he gave up for them are not.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
