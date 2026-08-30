import Reveal from "@/components/Reveal";
import Stamp from "@/components/Stamp";
import { dad } from "@/lib/config";

const fields = [
  { k: "Name", v: dad.name },
  { k: "Department", v: dad.department },
  { k: "Service", v: `${dad.yearsOfService} years` },
  { k: "Status", v: "Officially Retired" },
  { k: "Next Assignment", v: "Life" },
  { k: "Reporting Location", v: "Home" },
  { k: "Shift", v: "Flexible" },
  { k: "Boss", v: "Family" },
];

export default function RetirementNotice() {
  return (
    <section className="px-4 py-16 sm:px-8">
      <Reveal className="relative mx-auto max-w-xl border-2 border-[var(--ink)] p-6 sm:p-10">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          Official Notice
        </p>
        <h2 className="font-display mt-2 text-center text-2xl font-black uppercase sm:text-3xl">
          Retirement Notice
        </h2>

        <dl className="mt-8 divide-y divide-dotted divide-[var(--ink)]/30">
          {fields.map((f) => (
            <div key={f.k} className="flex justify-between gap-4 py-2.5 text-sm sm:text-base">
              <dt className="font-mono uppercase tracking-wide text-[var(--ink-soft)]">{f.k}</dt>
              <dd className="text-right font-semibold">{f.v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex justify-center">
          <Stamp rotate={-8}>Approved</Stamp>
        </div>
      </Reveal>
    </section>
  );
}
