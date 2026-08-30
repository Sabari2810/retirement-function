"use client";

import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { ChevronLeftIcon, ChevronRightIcon, SoundOffIcon, SoundOnIcon } from "@/components/icons";
import { NewspaperContext } from "@/components/NewspaperContext";
import { playPageTurn } from "@/lib/sound";

type Flip = { from: number; to: number; dir: "next" | "prev" } | null;

export default function Newspaper({ pages, titles }: { pages: ReactNode[]; titles: string[] }) {
  const total = pages.length;
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState<Flip>(null);
  // Starts false on both server and first client render to avoid a hydration
  // mismatch, then syncs from localStorage right after mount.
  const [muted, setMuted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    // One-time sync from a browser-only API after mount; a lazy initializer
    // would read localStorage during SSR/hydration and cause a mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMuted(window.localStorage.getItem("newspaper-muted") === "true");
  }, []);

  const rotateY = useMotionValue(0);
  // Paper compresses visually as it turns edge-on, then relaxes back out.
  const foldScale = useTransform(rotateY, (v) => {
    const a = Math.abs(v);
    const p = a <= 90 ? a / 90 : (180 - a) / 90;
    return 1 - p * 0.3;
  });

  function toggleMuted() {
    setMuted((m) => {
      const next = !m;
      window.localStorage.setItem("newspaper-muted", String(next));
      return next;
    });
  }

  function go(to: number, dir: "next" | "prev") {
    if (flip || to < 0 || to >= total || to === index) return;
    if (!muted) playPageTurn();

    if (reduce) {
      setIndex(to);
      return;
    }

    setFlip({ from: index, to, dir });
    rotateY.set(0);
    animate(rotateY, dir === "next" ? -180 : 180, {
      duration: 0.5,
      ease: [0.6, 0.05, 0.3, 1],
      onComplete: () => {
        setIndex(to);
        setFlip(null);
        rotateY.set(0);
      },
    });
  }

  const goNext = () => go(index + 1, "next");
  const goPrev = () => go(index - 1, "prev");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, flip, muted, reduce]);

  const displayIndex = flip ? flip.to : index;

  return (
    <NewspaperContext.Provider value={{ goNext, goPrev }}>
      <div className="relative flex h-[100dvh] w-full items-center justify-center bg-[var(--ink)] p-2 sm:p-6">
        <div aria-live="polite" className="sr-only">
          பக்கம் {index + 1} / {total}: {titles[index]}
        </div>

        <motion.div
          className="relative h-full w-full touch-pan-y overflow-hidden rounded-sm"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -70) goNext();
            else if (info.offset.x > 70) goPrev();
          }}
          style={{ perspective: 1100 }}
        >
          <div className="absolute inset-0">{pages[displayIndex]}</div>

          {/* static spine shadow, gives the flipping sheet something to turn against */}
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-y-0 z-10 w-10 ${
              flip?.dir === "prev" ? "right-0 bg-gradient-to-l" : "left-0 bg-gradient-to-r"
            } from-black/20 to-transparent`}
          />

          {flip && (
            <motion.div
              className="absolute inset-0 z-20"
              style={{
                rotateY,
                scaleX: foldScale,
                transformStyle: "preserve-3d",
                transformOrigin: flip.dir === "next" ? "0% 50%" : "100% 50%",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {pages[flip.from]}
            </motion.div>
          )}
        </motion.div>

        {/* mobile: tap the left/right edge of the page to turn it (sits outside the
            draggable layer so it isn't swallowed by Framer's pan gesture handling) */}
        <button
          type="button"
          aria-label="முந்தைய பக்கம்"
          onClick={goPrev}
          disabled={index === 0}
          className="absolute left-2 top-2 bottom-2 z-[15] w-1/4 disabled:pointer-events-none sm:hidden"
        />
        <button
          type="button"
          aria-label="அடுத்த பக்கம்"
          onClick={goNext}
          disabled={index === total - 1}
          className="absolute right-2 top-2 bottom-2 z-[15] w-1/4 disabled:pointer-events-none sm:hidden"
        />

        <button
          type="button"
          aria-label="முந்தைய பக்கம்"
          onClick={goPrev}
          disabled={index === 0}
          className="absolute left-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-[var(--paper)]/90 p-3 text-[var(--ink)] shadow-lg transition-opacity hover:bg-[var(--paper)] disabled:opacity-0 sm:block"
        >
          <ChevronLeftIcon />
        </button>

        <button
          type="button"
          aria-label="அடுத்த பக்கம்"
          onClick={goNext}
          disabled={index === total - 1}
          className="absolute right-3 top-1/2 z-30 hidden -translate-y-1/2 rounded-full bg-[var(--paper)]/90 p-3 text-[var(--ink)] shadow-lg transition-opacity hover:bg-[var(--paper)] disabled:opacity-0 sm:block"
        >
          <ChevronRightIcon />
        </button>

        <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-full bg-[var(--ink)]/85 px-4 py-2 backdrop-blur-sm">
          <div className="hidden items-center gap-1.5 sm:flex">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`பக்கம் ${i + 1} க்குச் செல்ல: ${titles[i]}`}
                aria-current={i === index}
                onClick={() => go(i, i > index ? "next" : "prev")}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-[var(--paper)]" : "bg-[var(--paper)]/30"
                }`}
              />
            ))}
          </div>

          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--paper)]/80">
            {index + 1} / {total}
          </span>

          <button
            type="button"
            aria-pressed={muted}
            aria-label={muted ? "பக்கம் புரட்டும் ஒலியை இயக்கு" : "பக்கம் புரட்டும் ஒலியை நிறுத்து"}
            onClick={toggleMuted}
            className="text-[var(--paper)]/80 transition-colors hover:text-[var(--paper)]"
          >
            {muted ? <SoundOffIcon /> : <SoundOnIcon />}
          </button>
        </div>
      </div>
    </NewspaperContext.Provider>
  );
}
