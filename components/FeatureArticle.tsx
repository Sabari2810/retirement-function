import Reveal from "@/components/Reveal";

export default function FeatureArticle() {
  return (
    <section className="flex h-full flex-col justify-center bg-[var(--ink)] px-4 py-3 text-[var(--paper)] sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-60 sm:text-xs">
            தலைப்புச் செய்திக்குப் பின்னால்
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display mt-2 text-base leading-snug italic sm:mt-6 sm:text-2xl">
            38 ஆண்டுகளாக, அவர் பெருமையுடன் சீருடை அணிந்தார்.
          </p>
          <p className="mt-1.5 text-xs leading-snug opacity-80 sm:mt-4 sm:text-lg">
            அவர் ஒரு நகரத்திற்கு சேவை செய்தார். மக்களைப் பாதுகாத்தார். நம்மில் பெரும்பாலோர்
            முழுமையாகப் புரிந்துகொள்ள முடியாத பொறுப்புகளைச் சுமந்தார்.
          </p>
          <p className="mt-1.5 text-xs leading-snug opacity-80 sm:mt-4 sm:text-lg">
            இவை எல்லாவற்றிற்கும் இடையில், அவர் வீட்டிற்கு வந்தபோது அப்பாவாக இருந்தார்.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-3 text-xs leading-snug opacity-80 sm:mt-8 sm:text-lg">
            இன்று, நாங்கள் அவரது ஓய்வூதியத்தை மட்டும் கொண்டாடவில்லை. 38 ஆண்டுகால சேவை, தியாகம்,
            தைரியம், என்றென்றும் எங்களுடன் நிலைத்திருக்கும் எண்ணற்ற நினைவுகளையும் கொண்டாடுகிறோம்.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="font-display mt-3 text-lg font-black leading-tight sm:mt-10 sm:text-4xl">
            சீருடை ஓய்வு பெறலாம்.
            <br />
            நினைவுகள் ஒருபோதும் ஓய்வு பெறாது.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
