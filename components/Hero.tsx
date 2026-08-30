"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useNewspaperNav } from "@/components/NewspaperContext";
import Stamp from "@/components/Stamp";
import { dad } from "@/lib/config";

const labels = [
  { k: "CASE NO.", v: `${dad.yearsOfService}/${dad.yearsOfService}` },
  { k: "STATUS", v: "CASE CLOSED" },
  { k: "NEXT POSTING", v: "HOME" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const { goNext } = useNewspaperNav();
  const stagger = (i: number) => (reduce ? undefined : { duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const });

  return (
    <section className="mx-auto max-w-3xl px-1 py-3 text-center">
      <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--stamp)] sm:text-xs">
        Breaking News
      </p>

      <motion.h2
        className="font-display mt-2 text-xl font-black leading-[1.05] uppercase sm:text-3xl lg:text-4xl"
        initial={reduce ? undefined : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={stagger(1)}
      >
        After {dad.yearsOfService} Years of Service, the Man Who Never Missed a Duty Is Finally
        Missing One.
      </motion.h2>

      <motion.p
        className="mx-auto mt-2 max-w-xl text-xs leading-snug text-[var(--ink-soft)] sm:text-base"
        initial={reduce ? undefined : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={stagger(2)}
      >
        {dad.department} confirms the retirement of one of its longest-serving officers.
        After nearly four decades of faithfully serving Chennai, {dad.name} has finally been
        sentenced to retirement.
      </motion.p>

      <motion.div
        initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={stagger(3)}
        className="mt-7 sm:mt-6"
      >
        <Stamp rotate={-8}>Verdict: Retired</Stamp>
      </motion.div>

      <motion.dl
        className="mx-auto mt-3 flex max-w-lg flex-wrap items-center justify-center gap-x-6 gap-y-1 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ink-soft)] sm:text-xs"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={stagger(4)}
      >
        {labels.map((l) => (
          <div key={l.k} className="flex items-baseline gap-1.5">
            <dt className="opacity-70">{l.k}:</dt>
            <dd className="font-semibold text-[var(--ink)]">{l.v}</dd>
          </div>
        ))}
      </motion.dl>

      <motion.div
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={stagger(5)}
        className="mt-3"
      >
        <button
          type="button"
          onClick={goNext}
          className="inline-flex items-center gap-2 border-2 border-[var(--ink)] px-4 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)] sm:px-6 sm:py-2.5 sm:text-xs"
        >
          Read the Full Story
          <span aria-hidden>&rarr;</span>
        </button>
      </motion.div>
    </section>
  );
}
