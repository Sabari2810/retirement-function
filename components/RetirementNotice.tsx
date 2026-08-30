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
    <section className="px-4 py-2 sm:px-8">
      <Reveal className="relative mx-auto max-w-xl border-2 border-[var(--ink)] p-3 sm:p-8">
        <p className="text-center font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          Official Notice
        </p>
        <h2 className="font-display mt-1 text-center text-lg font-black uppercase sm:mt-2 sm:text-3xl">
          Retirement Notice
        </h2>

        <dl className="mt-2 divide-y divide-dotted divide-[var(--ink)]/30 sm:mt-6">
          {fields.map((f) => (
            <div key={f.k} className="flex justify-between gap-4 py-1 text-xs sm:py-2.5 sm:text-base">
              <dt className="font-mono uppercase tracking-wide text-[var(--ink-soft)]">{f.k}</dt>
              <dd className="text-right font-semibold">{f.v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-2 flex justify-center sm:mt-6">
          <Stamp rotate={-8}>Approved</Stamp>
        </div>
      </Reveal>
    </section>
  );
}
