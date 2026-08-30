"use client";

import { motion, useReducedMotion } from "framer-motion";
import { event, masthead } from "@/lib/config";

export default function NewspaperHeader() {
  const reduce = useReducedMotion();

  return (
    <motion.header
      className="border-b-2 border-double border-[var(--ink)] pb-2 text-center"
      initial={reduce ? undefined : { scaleY: 0.4, opacity: 0 }}
      animate={reduce ? undefined : { scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "top center" }}
    >
      <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
        {masthead.volumeLine}
      </p>
      <h1 className="font-display mt-1 text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
        {masthead.paperName}
      </h1>
      <div className="mx-auto mt-2.5 flex max-w-md items-center justify-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[var(--ink-soft)] sm:mt-2 sm:text-xs">
        <span>சிறப்பு ஓய்வூதிய பதிப்பு</span>
        <span aria-hidden>&bull;</span>
        <span>{event.dateLabel}</span>
      </div>
    </motion.header>
  );
}
