import Reveal from "@/components/Reveal";

export default function CaseFileBox({
  eyebrow,
  fields,
  findings,
  verdictLines,
}: {
  eyebrow: string;
  fields: { k: string; v: string }[];
  findings?: string[];
  verdictLines: string[];
}) {
  return (
    <Reveal className="mx-auto max-w-xl border-2 border-[var(--ink)] p-5 sm:p-8">
      <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
        {eyebrow}
      </p>

      <dl className="mt-4 divide-y divide-dotted divide-[var(--ink)]/30 sm:mt-6">
        {fields.map((f) => (
          <div
            key={f.k}
            className="flex flex-wrap justify-between gap-x-4 gap-y-0.5 py-2 text-xs sm:text-base"
          >
            <dt className="shrink-0 font-mono uppercase tracking-wide text-[var(--ink-soft)]">
              {f.k}
            </dt>
            <dd className="text-right font-semibold">{f.v}</dd>
          </div>
        ))}
      </dl>

      {findings && (
        <div className="mt-4 border-t border-[var(--ink)]/20 pt-4 sm:mt-6 sm:pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
            கண்டறிதல்கள்
          </p>
          <ul className="mt-2 space-y-1 text-sm italic text-[var(--ink-soft)] sm:text-base">
            {findings.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 text-center sm:mt-8">
        <p className="font-display text-xl font-black uppercase leading-snug sm:text-3xl">
          {verdictLines[0]}
        </p>
        {verdictLines.slice(1).map((line) => (
          <p key={line} className="font-display mt-1 text-sm font-bold uppercase tracking-wide sm:text-lg">
            {line}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
