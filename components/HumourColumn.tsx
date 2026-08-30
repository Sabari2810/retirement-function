import Image from "next/image";
import Reveal from "@/components/Reveal";
import { photos, wantedHabits } from "@/lib/config";

export default function HumourColumn() {
  return (
    <section className="flex h-full flex-col justify-center px-6 py-4 text-center sm:px-8 sm:py-1">
      <Reveal className="flex h-full w-full flex-col justify-center sm:mx-auto sm:h-auto sm:max-w-md sm:border-4 sm:border-double sm:border-[var(--ink)] sm:p-4">
        <p className="font-display text-2xl font-black tracking-widest sm:text-2xl">
          தேடப்படுகிறார்
        </p>
        <p className="text-xs uppercase tracking-wide text-[var(--ink-soft)] sm:text-xs">
          ஒரு ஓய்வுபெற்ற காவல் அதிகாரி
        </p>

        <div className="halftone relative mx-auto mt-3 aspect-[3/4] w-full max-w-[min(260px,30vh)] overflow-hidden border-2 border-[var(--ink)] sm:mt-1.5 sm:max-w-[min(280px,38vh)]">
          <Image
            src={photos.wanted.src}
            alt={photos.wanted.alt}
            fill
            sizes="(min-width: 640px) 280px, 260px"
            className="object-cover grayscale contrast-125"
          />
        </div>

        <p className="mt-3 text-xs italic text-[var(--ink-soft)] sm:mt-1.5 sm:text-xs">
          கடைசியாகக் காணப்பட்டது: தன் ஓய்வு நேரத்தில் என்ன செய்வது என்று யோசித்துக் கொண்டிருந்தார்.
        </p>

        <p className="mt-3 text-left text-xs font-semibold uppercase tracking-wide sm:mt-1.5 sm:text-xs">
          அறியப்பட்ட பழக்கங்கள்
        </p>
        <ul className="mt-1 space-y-0.5 text-left text-xs leading-snug sm:space-y-0 sm:text-xs sm:leading-tight">
          {wantedHabits.map((habit) => (
            <li key={habit} className="flex gap-1.5">
              <span aria-hidden>&bull;</span>
              <span>{habit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-3 border-t border-[var(--ink)]/30 pt-2 sm:mt-2 sm:pt-1.5">
          <p className="text-xs font-semibold uppercase tracking-wide sm:text-xs">கண்டுபிடித்தால்</p>
          <p className="text-xs text-[var(--ink-soft)] sm:text-xs">
            தயவுசெய்து அவரைத் துறைக்குத் திருப்பி அனுப்ப வேண்டாம். குடும்பம் அவரை வைத்துக்கொள்ளத்
            தயாராக உள்ளது.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
