"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function TurnPage({ targetId }: { targetId: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="hidden border-t-4 border-double border-[var(--ink)] py-10 text-center sm:block">
      <motion.a
        href={`#${targetId}`}
        className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
        animate={reduce ? undefined : { y: [0, 6, 0] }}
        transition={reduce ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        Turn the Page
        <span aria-hidden>&darr;</span>
      </motion.a>
    </div>
  );
}
