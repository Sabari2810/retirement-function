"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useNewspaperNav } from "@/components/NewspaperContext";
import Stamp from "@/components/Stamp";
import { dad } from "@/lib/config";

const labels = [
  { k: "வழக்கு எண்.", v: `${dad.yearsOfService}/${dad.yearsOfService}` },
  { k: "நிலை", v: "வழக்கு முடிவு" },
  { k: "அடுத்த பணியிடம்", v: "வீடு" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const { goNext } = useNewspaperNav();
  const stagger = (i: number) => (reduce ? undefined : { duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const });

  return (
    <section className="mx-auto max-w-3xl px-1 py-3 text-center">
      <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--stamp)] sm:text-xs">
        உடனடி செய்தி
      </p>

      <motion.h2
        className="font-display mt-2 text-xl font-black leading-[1.05] sm:text-3xl lg:text-4xl"
        initial={reduce ? undefined : { opacity: 0, y: 20 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={stagger(1)}
      >
        38 ஆண்டுகள் சேவை செய்த பிறகு, ஒருநாள் கூடத் தவறாமல் பணிக்குச் சென்ற அவர், இப்போது ஒரே ஒரு
        பணியை மட்டும் தவறவிட்டிருக்கிறார்.
      </motion.h2>

      <motion.p
        className="mx-auto mt-2 max-w-xl text-xs leading-snug text-[var(--ink-soft)] sm:text-base"
        initial={reduce ? undefined : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={stagger(2)}
      >
        {dad.department}, நீண்டகாலம் சேவை செய்த தனது அதிகாரிகளில் ஒருவரின் ஓய்வூதியத்தை
        உறுதிப்படுத்துகிறது. கிட்டத்தட்ட நாற்பது ஆண்டுகள் சென்னைக்கு உண்மையாக சேவை செய்த{" "}
        {dad.name}, இறுதியாக ஓய்வூதியம் என்ற தண்டனையைப் பெற்றுள்ளார்.
      </motion.p>

      <motion.div
        initial={reduce ? undefined : { opacity: 0, scale: 0.9 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={stagger(3)}
        className="mt-7 sm:mt-6"
      >
        <Stamp rotate={-8}>தீர்ப்பு: ஓய்வு பெற்றார்</Stamp>
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
          முழு செய்தியை படிக்க
          <span aria-hidden>&rarr;</span>
        </button>
      </motion.div>
    </section>
  );
}
