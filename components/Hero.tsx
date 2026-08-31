"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroPhoto, officer } from "@/lib/config";

export default function Hero() {
  const reduce = useReducedMotion();
  const stagger = (i: number) =>
    reduce ? undefined : { duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 text-center sm:py-16">
      <motion.p
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--stamp)] sm:text-xs"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={stagger(0)}
      >
        The Final Report
      </motion.p>

      <motion.h2
        className="font-display mt-3 text-3xl font-black uppercase leading-tight sm:text-5xl"
        initial={reduce ? undefined : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={stagger(1)}
      >
        After 38 Years, 3 Months &amp; 22 Days,
        <br />
        the Final Shift Has Arrived.
      </motion.h2>

      <motion.div
        className="relative mx-auto mt-8 aspect-[4/5] w-full max-w-[280px] overflow-hidden border-4 border-[var(--ink)] sm:max-w-xs"
        initial={reduce ? undefined : { opacity: 0, scale: 0.95 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={stagger(2)}
      >
        <Image
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          fill
          sizes="(min-width: 640px) 320px, 280px"
          className="object-cover object-top sepia-[0.15] contrast-105"
          priority
        />
      </motion.div>

      <motion.h3
        className="font-display mt-8 text-2xl font-black uppercase sm:text-4xl"
        initial={reduce ? undefined : { opacity: 0, y: 12 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={stagger(3)}
      >
        {officer.name}, <span className="text-base sm:text-xl">{officer.qualification}</span>
      </motion.h3>

      <motion.p
        className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)] sm:text-sm"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={stagger(4)}
      >
        {officer.designation}
        <br className="sm:hidden" /> {officer.department}
      </motion.p>

      <motion.p
        className="font-display mt-4 text-base italic text-[var(--ink-soft)] sm:text-lg"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={stagger(5)}
      >
        Serving the city since 1988.
      </motion.p>
    </section>
  );
}
