"use client";

import { motion, useReducedMotion } from "framer-motion";
import { masthead } from "@/lib/config";

export default function Masthead() {
  const reduce = useReducedMotion();

  return (
    <motion.header
      className="border-b-4 border-double border-[var(--ink)] px-4 pb-4 pt-8 text-center sm:pt-12"
      initial={reduce ? undefined : { scaleY: 0.4, opacity: 0 }}
      animate={reduce ? undefined : { scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "top center" }}
    >
      <h1 className="font-masthead text-5xl leading-none sm:text-7xl lg:text-8xl">
        {masthead.paperName}
      </h1>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--ink-soft)] sm:text-xs">
        {masthead.strapline}
      </p>
      <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-faint)] sm:text-[11px]">
        {masthead.volumeLine}
      </p>
    </motion.header>
  );
}
