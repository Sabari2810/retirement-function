import Reveal from "@/components/Reveal";

export default function QuietHumor() {
  return (
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 px-4 py-12 sm:py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 sm:flex-row sm:gap-10">
        <Reveal className="flex-1 border border-[var(--ink)]/30 p-5 text-center sm:p-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
            அதிகாரப்பூர்வ அறிவிப்பு
          </p>
          <p className="mt-2 text-sm leading-relaxed sm:text-base">
            38 ஆண்டுகள் சேவைக்குப் பிறகு, அவருக்குப் பழக்கமில்லாத ஒன்றை இறுதியாகத் துறை
            அங்கீகரித்துள்ளது:
          </p>
          <p className="font-display mt-2 text-xl font-black sm:text-2xl">ஒரு விடுமுறை நாள்.</p>
          <p className="mt-3 text-xs italic text-[var(--ink-soft)] sm:text-sm">
            இந்தப் புதிய சுதந்திரத்தை வைத்து அவர் என்ன செய்யப் போகிறார் என்பது குறித்த விவரங்கள்
            இன்னும் கிடைக்கவில்லை.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex-1 border border-[var(--ink)]/30 p-5 text-center sm:p-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--stamp)]">
            உடனடி செய்தி
          </p>
          <p className="font-display mt-2 text-lg font-bold leading-snug sm:text-xl">
            அதிகாரி இறுதியாகப் பணிக்கு வருகிறார்&hellip; வீட்டில்.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
