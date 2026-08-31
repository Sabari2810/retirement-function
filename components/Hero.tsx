"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useContent, useLanguage } from "@/lib/LanguageContext";

const heroPhoto = { src: "/photos/photo-10.jpeg" };

export default function Hero() {
  const reduce = useReducedMotion();
  const { lang } = useLanguage();
  const { hero, officer } = useContent();
  const ready = lang !== null;
  const animKey = ready ? "on" : "off";
  const stagger = (i: number) => (reduce ? undefined : { duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const });

  return (
    <section className="mx-auto max-w-3xl px-4 pb-4 pt-12 text-center sm:pb-6 sm:pt-16">
      <motion.p
        key={`eyebrow-${animKey}`}
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--stamp)] sm:text-xs"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: ready ? 1 : 0 }}
        transition={stagger(0)}
      >
        {hero.eyebrow}
      </motion.p>

      <motion.h2
        key={`headline-${animKey}`}
        className="font-display mt-3 text-3xl font-black uppercase leading-tight sm:text-5xl"
        initial={reduce ? undefined : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: ready ? 1 : 0, y: ready ? 0 : 20 }}
        transition={stagger(1)}
      >
        {hero.headline[0]}
        <br />
        {hero.headline[1]}
      </motion.h2>

      <motion.div
        key={`photo-${animKey}`}
        className="relative mx-auto mt-8 aspect-[4/5] w-full max-w-[280px] overflow-hidden border-4 border-[var(--ink)] sm:max-w-xs"
        initial={reduce ? undefined : { opacity: 0, scale: 0.95 }}
        animate={reduce ? undefined : { opacity: ready ? 1 : 0, scale: ready ? 1 : 0.95 }}
        transition={stagger(2)}
      >
        <Image
          src={heroPhoto.src}
          alt={`${officer.name} in dress uniform`}
          fill
          sizes="(min-width: 640px) 320px, 280px"
          className="object-cover object-top sepia-[0.15] contrast-105"
          priority
        />
      </motion.div>

      <motion.h3
        key={`name-${animKey}`}
        className="font-display mt-8 text-2xl font-black uppercase sm:text-4xl"
        initial={reduce ? undefined : { opacity: 0, y: 12 }}
        animate={reduce ? undefined : { opacity: ready ? 1 : 0, y: ready ? 0 : 12 }}
        transition={stagger(3)}
      >
        {officer.name}, <span className="text-base sm:text-xl">{officer.qualification}</span>
      </motion.h3>

      <motion.p
        key={`designation-${animKey}`}
        className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)] sm:text-sm"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: ready ? 1 : 0 }}
        transition={stagger(4)}
      >
        {officer.designation}
        <br className="sm:hidden" /> {officer.department}
      </motion.p>

      <motion.p
        key={`serving-${animKey}`}
        className="font-display mt-4 text-base italic text-[var(--ink-soft)] sm:text-lg"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: ready ? 1 : 0 }}
        transition={stagger(5)}
      >
        {hero.servingSince}
      </motion.p>

      <motion.div
        key={`duty-${animKey}`}
        className="mt-4 inline-flex items-center gap-2 border border-[var(--ink)]/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-soft)] sm:text-[10px]"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: ready ? 1 : 0 }}
        transition={stagger(6)}
      >
        <span>{hero.dutyStatusLabel}:</span>
        <span className="font-bold text-[var(--stamp)]">{hero.dutyStatusValue}</span>
      </motion.div>
    </section>
  );
}
