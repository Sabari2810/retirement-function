import Image from "next/image";
import Reveal from "@/components/Reveal";
import { photos, wantedHabits } from "@/lib/config";

export default function HumourColumn() {
  return (
    <section className="px-4 py-16 sm:px-8">
      <Reveal className="mx-auto max-w-md border-4 border-double border-[var(--ink)] p-6 text-center sm:p-8">
        <p className="font-display text-2xl font-black uppercase tracking-widest sm:text-3xl">
          Wanted
        </p>
        <p className="mt-1 text-sm uppercase tracking-wide text-[var(--ink-soft)]">
          One Retired Police Officer
        </p>

        <div className="halftone relative mx-auto mt-6 aspect-square w-40 overflow-hidden border-2 border-[var(--ink)] sm:w-48">
          <Image
            src={photos.wanted.src}
            alt={photos.wanted.alt}
            fill
            sizes="192px"
            className="object-cover grayscale contrast-125"
          />
        </div>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[var(--ink-faint)]">
          {photos.wanted.label}
        </p>

        <p className="mt-6 text-sm italic text-[var(--ink-soft)]">
          Last seen: trying to figure out what to do with all his free time.
        </p>

        <p className="mt-6 text-left font-semibold uppercase tracking-wide text-sm">
          Known Habits
        </p>
        <ul className="mt-3 space-y-2 text-left text-sm leading-relaxed">
          {wantedHabits.map((habit) => (
            <li key={habit} className="flex gap-2">
              <span aria-hidden>&bull;</span>
              <span>{habit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-[var(--ink)]/30 pt-4">
          <p className="text-sm font-semibold uppercase tracking-wide">If Found</p>
          <p className="mt-1 text-sm text-[var(--ink-soft)]">
            Please do not return him to the department. Family is willing to keep him.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
