import Reveal from "@/components/Reveal";

export default function FinalSmile() {
  return (
    <section className="border-y-2 border-[var(--ink)]/20 bg-[var(--ink)] px-4 py-16 text-center text-[var(--paper)] sm:py-24">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-60 sm:text-xs">
            இப்போது&hellip;
          </p>
          <h2 className="font-display mt-3 text-2xl font-black leading-snug sm:text-4xl">
            அடுத்த பணி அவருடையது.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display mt-6 text-lg italic leading-relaxed sm:mt-8 sm:text-xl">
            &ldquo;பல ஆண்டுகள் பணிக்கு அறிக்கை அளித்த பிறகு, இறுதியாக யாருக்கும் அறிக்கை
            அளிக்காத நேரம் வந்துவிட்டது.&rdquo;
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 space-y-2 text-base leading-relaxed opacity-85 sm:mt-10 sm:text-lg">
            <p>பணிக்கான அதிகாலை அலாரங்கள் இல்லை.</p>
            <p>நகருக்காக அவசரமாகச் செல்ல வேண்டியதில்லை.</p>
            <p>பணி காத்திருக்கிறது என்று கடிகாரத்தைப் பார்க்க வேண்டியதில்லை.</p>
            <p>இன்னும் அதிக காலைகள்.</p>
            <p>இன்னும் அதிக நேரம்.</p>
            <p>இன்னும் அதிக குடும்பம்.</p>
            <p>இன்னும் அதிக கதைகள்.</p>
            <p>மேலும், நம்பிக்கையுடன், பணிக்கு அழைக்க யாரும் இல்லாமல் இருக்கட்டும்.</p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="font-display mt-10 text-2xl font-black leading-snug sm:mt-14 sm:text-4xl">
            சீருடை ஓய்வு பெறலாம்.
            <br />
            அந்த மனிதர் ஓய்வு பெறமாட்டார்.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="font-display mt-10 text-xl italic sm:mt-14 sm:text-2xl">
            அடுத்த அத்தியாயத்திற்கு வாழ்த்துகள்.
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] opacity-70 sm:text-sm">
            அன்புடனும், பெருமையுடனும், நன்றியுடனும்.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
