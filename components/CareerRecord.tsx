"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";
import type { CareerEntry } from "@/lib/content";

function TimelineEntry({ item, delay }: { item: CareerEntry; delay: number }) {
  return (
    <Reveal delay={delay} className="relative pb-9 pl-8 last:pb-0 sm:pl-10">
      <span className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full border-2 border-[var(--ink)] bg-[var(--paper)] sm:h-4 sm:w-4" />
      <div className="inline-block border-2 border-[var(--ink)] px-3 py-1 font-mono text-xs font-bold sm:text-sm">
        {item.date}
      </div>
      <p className="mt-2 text-lg font-bold leading-snug sm:text-xl">{item.grade}</p>
      <p className="mt-0.5 text-base text-[var(--ink-soft)] sm:text-lg">{item.department}</p>
    </Reveal>
  );
}

export default function CareerRecord() {
  const [isOpen, setIsOpen] = useState(false);
  const { careerRecord, careerTimeline } = useContent();
  const preview = careerTimeline.slice(0, 2);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  return (
    <section id="the-record" className="paper-alt px-4 pb-4 pt-10 sm:pb-6 sm:pt-14">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="hidden text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:block sm:text-xs">
            {careerRecord.eyebrow}
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-black uppercase sm:text-5xl">
            {careerRecord.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-[var(--ink-soft)] sm:text-base">
            {careerRecord.sub}
          </p>
        </Reveal>

        <div className="mt-10 border-t-2 border-[var(--ink)]/20 pt-10 sm:pt-12">
          <div className="relative">
            <div className="absolute bottom-2 left-[6px] top-2 w-px bg-[var(--ink)]/25 sm:left-[7px]" />
            {preview.map((item, i) => (
              <TimelineEntry key={item.date + item.department} item={item} delay={Math.min(i * 0.05, 0.4)} />
            ))}
          </div>
        </div>

        <Reveal className="mt-8 text-center sm:mt-10">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="border-2 border-[var(--ink)] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
          >
            {careerRecord.viewFullTimeline}
          </button>
        </Reveal>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--ink)]/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={careerRecord.fullHeading}
          >
            <motion.div
              className="paper-texture no-scrollbar relative max-h-[85vh] w-full max-w-2xl overflow-y-auto border-4 border-double border-[var(--ink)] p-5 sm:p-10"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 text-2xl leading-none text-[var(--ink-soft)] hover:text-[var(--ink)]"
              >
                &times;
              </button>

              <h2 className="font-display text-center text-2xl font-black uppercase sm:text-4xl">
                {careerRecord.fullHeading}
              </h2>

              <div className="mt-8 border-t-2 border-[var(--ink)]/20 pt-8">
                <div className="relative">
                  <div className="absolute bottom-2 left-[6px] top-2 w-px bg-[var(--ink)]/25 sm:left-[7px]" />
                  {careerTimeline.map((item) => (
                    <TimelineEntry key={item.date + item.department} item={item} delay={0} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
