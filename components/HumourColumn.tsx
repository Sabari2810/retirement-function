import Image from "next/image";
import Reveal from "@/components/Reveal";
import { photos, wantedHabits } from "@/lib/config";

export default function HumourColumn() {
  return (
    <section className="px-4 py-1 sm:px-8">
      <Reveal className="mx-auto max-w-md border-4 border-double border-[var(--ink)] p-2 text-center sm:p-4">
        <p className="font-display text-lg font-black uppercase tracking-widest sm:text-2xl">
          Wanted
        </p>
        <p className="text-[10px] uppercase tracking-wide text-[var(--ink-soft)] sm:text-xs">
          One Retired Police Officer
        </p>

        <div className="halftone relative mx-auto mt-1.5 aspect-[3/4] w-full max-w-[min(220px,26vh)] overflow-hidden border-2 border-[var(--ink)] sm:max-w-[min(280px,38vh)]">
          <Image
            src={photos.wanted.src}
            alt={photos.wanted.alt}
            fill
            sizes="(min-width: 640px) 280px, 220px"
            className="object-cover grayscale contrast-125"
          />
        </div>

        <p className="mt-1.5 text-[10px] italic text-[var(--ink-soft)] sm:mt-1.5 sm:text-xs">
          Last seen: trying to figure out what to do with all his free time.
        </p>

        <p className="mt-1.5 text-left text-[10px] font-semibold uppercase tracking-wide sm:mt-1.5 sm:text-xs">
          Known Habits
        </p>
        <ul className="mt-0.5 space-y-0 text-left text-[10px] leading-tight sm:text-xs">
          {wantedHabits.map((habit) => (
            <li key={habit} className="flex gap-1.5">
              <span aria-hidden>&bull;</span>
              <span>{habit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-1.5 border-t border-[var(--ink)]/30 pt-1 sm:mt-2 sm:pt-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wide sm:text-xs">If Found</p>
          <p className="text-[10px] text-[var(--ink-soft)] sm:text-xs">
            Please do not return him to the department. Family is willing to keep him.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
