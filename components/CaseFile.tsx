import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { dad } from "@/lib/config";

const rows = [
  { k: "Accused", v: dad.name },
  { k: "Charge", v: "Serving the city with dedication" },
  { k: "Duration", v: `${dad.yearsOfService} years` },
  { k: "Department", v: dad.department },
  { k: "Verdict", v: "Guilty of being one hell of a cop." },
];

export default function CaseFile() {
  return (
    <section className="paper-alt flex h-full flex-col justify-center px-4 py-3 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-center font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
            Feature Article
          </p>
          <h2 className="font-display mt-1.5 text-center text-xl font-black uppercase leading-tight sm:text-4xl">
            The Case That Lasted {dad.yearsOfService} Years
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-3 sm:mt-6">
          <dl className="mx-auto max-w-md divide-y divide-[var(--ink)]/15 border-y border-[var(--ink)]/20">
            {rows.map((row) => (
              <div key={row.k} className="flex justify-between gap-4 py-1 text-xs sm:py-2 sm:text-base">
                <dt className="font-semibold uppercase tracking-wide text-[var(--ink-soft)]">
                  {row.k}
                </dt>
                <dd className="text-right italic">{row.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="mt-3 text-center sm:mt-6">
          <Counter
            to={dad.yearsOfService}
            className="font-display text-4xl font-black leading-none sm:text-7xl"
          />
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-sm">
            Years
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-2 max-w-xl text-center text-[11px] leading-snug text-[var(--ink-soft)] sm:mt-6 sm:text-lg">
            {dad.yearsOfService} years of early mornings, long nights, duty calls,
            responsibilities, unexpected stories, and showing up, again and again.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
