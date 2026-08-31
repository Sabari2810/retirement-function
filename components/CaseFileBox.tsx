"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function CaseFileBox({
  eyebrow,
  fields,
  findings,
  verdictLines,
  corner,
  emphasize = false,
  stampVerdict = false,
}: {
  eyebrow: string;
  fields: { k: string; v: string }[];
  findings?: string[];
  verdictLines: string[];
  corner?: { caseNo: string; place: string };
  emphasize?: boolean;
  stampVerdict?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <Reveal className="relative mx-auto max-w-xl border-2 border-[var(--ink)] p-5 sm:p-8">
      {corner && (
        <div className="absolute left-4 top-4 text-left sm:left-6 sm:top-6">
          <p className="font-mono text-[9px] uppercase leading-snug tracking-[0.15em] text-[var(--ink-soft)] sm:text-[11px]">
            Case No. <span className="font-bold text-[var(--ink)]">{corner.caseNo}</span>
          </p>
          <p className="font-mono text-[9px] uppercase leading-snug tracking-[0.15em] text-[var(--ink-soft)] sm:text-[11px]">
            Place: <span className="font-bold text-[var(--ink)]">{corner.place}</span>
          </p>
        </div>
      )}

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
            Findings
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

      <div className="mt-6 text-center sm:mt-8">
        {stampVerdict ? (
          <motion.p
            className="stamp inline-block px-6 py-2.5 font-display text-2xl font-black uppercase leading-snug tracking-wide sm:text-4xl"
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
        {verdictLines.slice(1).map((line) => (
          <p key={line} className="font-display mt-1 text-sm font-bold uppercase tracking-wide sm:text-lg">
            {line}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
