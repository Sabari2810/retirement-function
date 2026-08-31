"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function CaseFileBox({
  eyebrow,
  fields,
  findings,
  findingsLabel = "Findings",
  verdictLines,
  corner,
  emphasize = false,
  stampVerdict = false,
}: {
  eyebrow: string;
  fields: { k: string; v: string }[];
  findings?: string[];
  findingsLabel?: string;
  verdictLines: string[];
  corner?: { caseNoLabel: string; caseNo: string; placeLabel: string; place: string };
  emphasize?: boolean;
  stampVerdict?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <Reveal className="mx-auto max-w-xl border-2 border-[var(--ink)] p-5 sm:p-8">
      <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
        {eyebrow}
      </p>

      {corner && (
        <p className="mt-1.5 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ink-soft)] sm:text-[11px]">
          {corner.caseNoLabel} <span className="font-bold text-[var(--ink)]">{corner.caseNo}</span>
          <span className="mx-2">&middot;</span>
          {corner.placeLabel}: <span className="font-bold text-[var(--ink)]">{corner.place}</span>
        </p>
      )}

      <dl className="mt-4 divide-y divide-dotted divide-[var(--ink)]/30 sm:mt-6">
        {fields.map((f) => (
          <div
            key={f.k}
            className="flex flex-wrap justify-between gap-x-4 gap-y-0.5 py-2 text-xs sm:text-base"
          >
            <dt className="shrink-0 font-mono uppercase tracking-wide text-[var(--ink-soft)]">
              {f.k}
            </dt>
            <dd
              className={
                emphasize
                  ? "text-right text-base font-black sm:text-2xl"
                  : "text-right font-semibold"
              }
            >
              {f.v}
            </dd>
          </div>
        ))}
      </dl>

      {findings && (
        <div className="mt-4 border-t border-[var(--ink)]/20 pt-4 sm:mt-6 sm:pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
            {findingsLabel}
          </p>
          <ul
            className={
              emphasize
                ? "mt-2 space-y-1.5 text-base font-medium italic text-[var(--ink-soft)] sm:text-lg"
                : "mt-2 space-y-1 text-sm italic text-[var(--ink-soft)] sm:text-base"
            }
          >
            {findings.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      <div className={stampVerdict ? "mt-3 text-center sm:mt-4" : "mt-6 text-center sm:mt-8"}>
        {stampVerdict ? (
          <motion.p
            className="stamp inline-block px-3 py-2 font-display text-lg font-black uppercase leading-snug tracking-wide sm:px-6 sm:py-2.5 sm:text-4xl"
            initial={reduce ? undefined : { opacity: 0, scale: 1.6, rotate: -18 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {verdictLines[0]}
          </motion.p>
        ) : (
          <p className="font-display text-xl font-black uppercase leading-snug sm:text-3xl">
            {verdictLines[0]}
          </p>
        )}
        {verdictLines.slice(1).map((line, i) => (
          <p
            key={line}
            className={
              i === 0 && stampVerdict
                ? "font-display mt-4 text-sm font-bold uppercase tracking-wide sm:mt-5 sm:text-lg"
                : "font-display mt-1 text-sm font-bold uppercase tracking-wide sm:text-lg"
            }
          >
            {line}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
