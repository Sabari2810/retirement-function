"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useContent, useLanguage } from "@/lib/LanguageContext";

const TAPS_NEEDED = 10;
const TAP_RESET_MS = 2000;

export default function Masthead() {
  const reduce = useReducedMotion();
  const { masthead, languageToggle } = useContent();
  const { lang, setLang } = useLanguage();
  const [showNote, setShowNote] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const tapCount = useRef(0);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTitleTap = () => {
    tapCount.current += 1;
    if (tapTimer.current) clearTimeout(tapTimer.current);

    if (tapCount.current >= TAPS_NEEDED) {
      setShowNote(true);
      tapCount.current = 0;
      return;
    }

    tapTimer.current = setTimeout(() => {
      tapCount.current = 0;
    }, TAP_RESET_MS);
  };

  useEffect(() => {
    if (!showNote) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowNote(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      audioRef.current?.pause();
    };
  }, [showNote]);

  return (
    <motion.header
      key={lang !== null ? "on" : "off"}
      className="relative border-b-4 border-double border-[var(--ink)] px-4 pb-4 pt-14 text-center sm:pt-12"
      initial={reduce ? undefined : { scaleY: 0.4, opacity: 0 }}
      animate={reduce ? undefined : { scaleY: lang !== null ? 1 : 0.4, opacity: lang !== null ? 1 : 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "top center" }}
    >
      {lang !== null && (
        <div className="fixed right-4 top-4 z-40 flex overflow-hidden border border-[var(--ink)] bg-[var(--paper)] font-mono text-[10px] uppercase tracking-wide sm:right-6 sm:top-6">
          <button
            type="button"
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
            className={`px-2 py-1 transition-colors ${
              lang === "en" ? "bg-[var(--ink)] text-[var(--paper)]" : "text-[var(--ink-soft)]"
            }`}
          >
            {languageToggle.en}
          </button>
          <button
            type="button"
            onClick={() => setLang("ta")}
            aria-pressed={lang === "ta"}
            className={`px-2 py-1 transition-colors ${
              lang === "ta" ? "bg-[var(--ink)] text-[var(--paper)]" : "text-[var(--ink-soft)]"
            }`}
          >
            {languageToggle.ta}
          </button>
        </div>
      )}

      <h1
        onClick={handleTitleTap}
        className="font-masthead cursor-default select-none text-5xl leading-none sm:text-7xl lg:text-8xl"
      >
        {masthead.paperName}
      </h1>
      <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-faint)] sm:text-[11px]">
        {masthead.volumeLine}
      </p>

      <AnimatePresence>
        {showNote && (
          <motion.div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-[var(--ink)]/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowNote(false)}
            role="dialog"
            aria-modal="true"
            aria-label="A special notice"
          >
            <motion.div
              className="paper-texture no-scrollbar relative max-h-[85vh] w-full max-w-md overflow-y-auto border-4 border-double border-[var(--ink)] p-6 text-center sm:p-8"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowNote(false)}
                aria-label="Close"
                className="absolute right-4 top-4 text-2xl leading-none text-[var(--ink-soft)] hover:text-[var(--ink)]"
              >
                &times;
              </button>

              <p className="font-display text-base font-bold italic sm:text-lg">P.S.</p>
              <p className="font-display mt-4 text-base leading-relaxed sm:text-lg">
                Hey, Jakkamma! You found the random little page made just for you. &#x1F90D;
              </p>

              <div className="mt-6 flex items-center justify-center gap-3 border-t border-[var(--ink)]/20 pt-5">
                <button
                  type="button"
                  onClick={() => {
                    const el = audioRef.current;
                    if (!el) return;
                    if (audioPlaying) {
                      el.pause();
                    } else {
                      void el.play();
                    }
                  }}
                  aria-label={audioPlaying ? "Pause audio" : "Play audio"}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[var(--ink)] text-sm transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
                >
                  {audioPlaying ? "⏸" : "▶"}
                </button>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--ink-soft)]">
                  A little something for you
                </span>
                <audio
                  ref={audioRef}
                  src="/audio/sowmi-note.m4a"
                  onPlay={() => setAudioPlaying(true)}
                  onPause={() => setAudioPlaying(false)}
                  onEnded={() => setAudioPlaying(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
