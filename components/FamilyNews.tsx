import Reveal from "@/components/Reveal";
import { dad } from "@/lib/config";

export default function FamilyNews() {
  return (
    <section className="px-4 pb-4 sm:px-8">
      <Reveal className="mx-auto max-w-sm border border-[var(--ink)]/30 p-5 text-center">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-faint)]">
          And in Other News
        </p>
        <p className="font-display mt-1 text-base font-bold uppercase leading-snug sm:text-lg">
          Local Family Reportedly Concerned
        </p>
        <p className="mt-3 text-xs leading-relaxed text-[var(--ink-soft)] sm:text-sm">
          Sources confirm that {dad.name} will now be spending considerably more time at home.
          Experts are currently assessing the situation. His family has been advised to remain
          calm.
        </p>
      </Reveal>
    </section>
  );
}
