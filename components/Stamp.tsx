"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function Stamp({
  children,
  rotate = -6,
  className = "",
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`stamp inline-block px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      initial={reduce ? undefined : { opacity: 0, scale: 1.4, rotate: rotate * 2 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1, rotate }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
