"use client";

import { motion, useReducedMotion } from "framer-motion";
import { event } from "@/lib/config";

export default function NewspaperHeader() {
  const reduce = useReducedMotion();

  return (
    <motion.header
      className="border-b-4 border-double border-[var(--ink)] pb-4 text-center"
      initial={reduce ? undefined : { scaleY: 0.4, opacity: 0 }}
      animate={reduce ? undefined : { scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "top center" }}
    >
      <p className="pt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
        Vol. XXXVIII &middot; No. 1 &middot; Special Retirement Edition
      </p>
      <h1 className="font-display mt-3 text-5xl font-black leading-none sm:text-7xl lg:text-8xl">
        The Chennai Daily
      </h1>
      <div className="mx-auto mt-4 flex max-w-md items-center justify-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[var(--ink-soft)] sm:text-xs">
        <span>Special Retirement Edition</span>
        <span aria-hidden>&bull;</span>
        <span>{event.dateLabel}</span>
      </div>
    </motion.header>
  );
}
