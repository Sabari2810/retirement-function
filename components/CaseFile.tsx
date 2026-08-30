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
    <section id="case-file" className="paper-alt border-y-2 border-[var(--ink)]/20 px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
            Feature Article
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-black uppercase leading-tight sm:text-5xl">
            The Case That Lasted {dad.yearsOfService} Years
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <dl className="mx-auto max-w-md divide-y divide-[var(--ink)]/15 border-y border-[var(--ink)]/20">
            {rows.map((row) => (
              <div key={row.k} className="flex justify-between gap-4 py-3 text-sm sm:text-base">
                <dt className="font-semibold uppercase tracking-wide text-[var(--ink-soft)]">
                  {row.k}
                </dt>
                <dd className="text-right italic">{row.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 text-center">
          <Counter
            to={dad.yearsOfService}
            className="font-display text-7xl font-black leading-none sm:text-9xl"
          />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-sm">
            Years
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
            {dad.yearsOfService} years of early mornings, long nights, duty calls,
            responsibilities, unexpected stories, and showing up, again and again.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
