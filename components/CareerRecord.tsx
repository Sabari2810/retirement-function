"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { careerTimeline, officer } from "@/lib/config";

function TimelineEntry({ item, delay }: { item: (typeof careerTimeline)[number]; delay: number }) {
  return (
    <Reveal
      delay={delay}
      className="mb-7 break-inside-avoid border-b border-[var(--ink)]/15 pb-7 sm:mb-9 sm:pb-9"
    >
      <p className="font-display text-2xl font-black leading-none sm:text-3xl">{item.date}</p>
      {item.label && (
        <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--stamp)] sm:text-xs">
          {item.label}
        </p>
      )}
      <p className="mt-1.5 text-base font-bold leading-snug sm:text-lg">{item.posting}</p>
      {item.note && (
        <p className="mt-1 text-sm italic leading-snug text-[var(--ink-soft)] sm:text-base">
          {item.note}
        </p>
      )}
    </Reveal>
  );
}

export default function CareerRecord() {
  const [isOpen, setIsOpen] = useState(false);
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
    <section id="the-record" className="px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
            Page 2 &middot; The Career Record
          </p>
          <h2 className="font-display mt-3 text-center text-3xl font-black uppercase sm:text-5xl">
            The Record
          </h2>
          <p className="mt-2 text-center font-mono text-sm uppercase tracking-[0.15em] text-[var(--ink-soft)] sm:text-base">
            {officer.totalService}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm italic text-[var(--ink-soft)] sm:text-base">
            A career measured not merely in years, but in places served, responsibilities carried
            and shifts completed.
          </p>
        </Reveal>

        <div className="mt-10 border-t-2 border-[var(--ink)]/20 pt-8 sm:columns-2 sm:gap-10 sm:pt-12">
          {preview.map((item, i) => (
            <TimelineEntry key={item.date + item.posting} item={item} delay={Math.min(i * 0.05, 0.4)} />
          ))}
        </div>

        <Reveal className="text-center">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="border-2 border-[var(--ink)] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
          >
            View Full Timeline
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
            aria-label="Full career timeline"
          >
            <motion.div
              className="paper-texture relative max-h-[85vh] w-full max-w-3xl overflow-y-auto border-4 border-double border-[var(--ink)] p-5 sm:p-10"
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
                className="absolute right-4 top-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)] hover:text-[var(--ink)]"
              >
                Close &times;
              </button>

              <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
                Page 2 &middot; The Career Record
              </p>
              <h2 className="font-display mt-3 text-center text-2xl font-black uppercase sm:text-4xl">
                The Full Record
              </h2>

              <div className="mt-8 border-t-2 border-[var(--ink)]/20 pt-8 sm:columns-2 sm:gap-10">
                {careerTimeline.map((item) => (
                  <TimelineEntry key={item.date + item.posting} item={item} delay={0} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
