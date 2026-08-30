import Reveal from "@/components/Reveal";
import Stamp from "@/components/Stamp";
import Typewriter from "@/components/Typewriter";
import { dad, event } from "@/lib/config";

export default function ExclusiveReport() {
  return (
    <section className="px-4 py-3 sm:px-8">
      <div className="mx-auto max-w-2xl border-2 border-[var(--ink)] p-3 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--ink)]/30 pb-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ink-soft)] sm:text-xs">
          <Typewriter text={`வழக்கு எண். ${dad.yearsOfService}/${dad.yearsOfService}-CCP`} />
          <span>{event.dateLabel}</span>
        </div>

        <Reveal>
          <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--stamp)] sm:text-xs">
            பிரத்யேக செய்தி
          </p>
          <h2 className="font-display mt-1 text-center text-lg font-black leading-tight sm:text-3xl">
            {dad.yearsOfService} ஆண்டுகள். எண்ணற்ற கடமைகள். ஒரே ஒரு இறுதி பணி.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-2 max-w-xl text-center text-[11px] leading-snug sm:mt-4 sm:text-base">
            அதிகாலை நேரங்கள் முதல் தூக்கமில்லா இரவுகள் வரை, சீருடையிலிருந்து எண்ணற்ற கதைகள் வரை,
            அறியாதவர்களைப் பாதுகாப்பதிலிருந்து பலருக்கும் நன்கு அறிமுகமான முகமாக மாறுவது வரை,
            அவர் எப்போதும் வந்து நின்றார். ஒவ்வொரு முறையும்.
          </p>
          <p className="mx-auto mt-1.5 max-w-xl text-center text-[11px] leading-snug text-[var(--ink-soft)] sm:mt-2 sm:text-base">
            இப்போது, {dad.department}யில் {dad.yearsOfService} ஆண்டுகள் சேவை செய்த பிறகு, சீருடைக்கும்
            கொஞ்சம் ஓய்வு தேவை.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-3 flex flex-wrap items-end justify-between gap-4 sm:mt-6">
          <div className="flex-1 min-w-[140px]">
            <div className="h-5 border-b border-[var(--ink)] sm:h-7" />
            <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-[var(--ink-faint)]">
              அதிகாரியின் கையொப்பம்
            </p>
          </div>
          <Stamp rotate={5}>அன்புடன் பதிவு</Stamp>
        </Reveal>

        <p className="mt-6 text-center font-mono text-[8px] uppercase tracking-widest text-[var(--ink-faint)] sm:mt-8 sm:text-[10px]">
          இது ஒரு குடும்ப அஞ்சலி, உண்மையான காவல்துறை ஆவணம் அல்ல.
        </p>
      </div>
    </section>
  );
}
