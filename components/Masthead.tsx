"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useContent, useLanguage } from "@/lib/LanguageContext";

const TAPS_NEEDED = 10;
const TAP_RESET_MS = 2000;
const EGG_ROLL_MS = 3600;
const EGG_CRACK_MS = 900;

function EggIllustration({ className }: { className?: string }) {
  return <img src="/photos/easter-egg.png" alt="" aria-hidden className={className} />;
}

const SHARD_COLORS = ["#f0c85e", "#7a2f2a", "#232f42", "#c94f4f"];

function RollingEgg({
  phase,
  onRollComplete,
  onCrackComplete,
}: {
  phase: "rolling" | "cracking";
  onRollComplete: () => void;
  onCrackComplete: () => void;
}) {
  const shards = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 300,
        y: (Math.random() - 0.5) * 240 - 30,
        rotate: Math.random() * 360,
        color: SHARD_COLORS[i % SHARD_COLORS.length],
        size: 12 + Math.random() * 14,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[115] flex items-center justify-center">
      {phase === "rolling" ? (
        <motion.div
          initial={{ x: "70vw", rotate: 0 }}
          animate={{ x: 0, rotate: 900 }}
          transition={{ duration: EGG_ROLL_MS / 1000, ease: [0.32, 0, 0.2, 1] }}
          onAnimationComplete={onRollComplete}
        >
          <EggIllustration className="h-40 w-auto drop-shadow-md" />
        </motion.div>
      ) : (
        <div className="relative flex items-center justify-center">
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 320,
              height: 320,
              background:
                "radial-gradient(circle, rgba(244,201,94,0.95) 0%, rgba(244,201,94,0.5) 35%, rgba(244,201,94,0) 70%)",
            }}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: [0, 0, 1, 0.9, 0], scale: [0.3, 0.3, 1.3, 1.7, 2] }}
            transition={{
              duration: EGG_CRACK_MS / 1000 + 0.35,
              times: [0, 0.55, 0.7, 0.85, 1],
              ease: "easeOut",
            }}
          />

          <motion.div
            initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }}
            animate={{
              x: [0, -6, 6, -7, 7, -5, 5, 0, 0],
              y: [0, 1, -1, 1, -1, 0, 0, 0, 0],
              rotate: [0, -3, 3, -4, 4, -2, 2, 0, 0],
              scale: [1, 1, 1, 1, 1, 1, 1, 1.2, 0],
              opacity: [1, 1, 1, 1, 1, 1, 1, 1, 0],
            }}
            transition={{
              duration: EGG_CRACK_MS / 1000,
              times: [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.72, 0.86, 1],
            }}
            onAnimationComplete={onCrackComplete}
          >
            <EggIllustration className="h-40 w-auto drop-shadow-md" />
          </motion.div>

          {shards.map((s) => (
            <motion.span
              key={s.id}
              className="absolute rounded-sm"
              style={{ width: s.size, height: s.size, backgroundColor: s.color }}
              initial={{ x: 0, y: 0, opacity: 0, rotate: 0 }}
              animate={{ x: [0, 0, s.x], y: [0, 0, s.y], opacity: [0, 1, 0], rotate: [0, 0, s.rotate] }}
              transition={{
                duration: EGG_CRACK_MS / 1000 + 0.3,
                times: [0, 0.72, 1],
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Masthead() {
  const reduce = useReducedMotion();
  const { masthead, languageToggle } = useContent();
  const { lang, setLang } = useLanguage();
  const [showNote, setShowNote] = useState(false);
  const [eggPhase, setEggPhase] = useState<"idle" | "rolling" | "cracking">("idle");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const tapCount = useRef(0);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTitleTap = () => {
    tapCount.current += 1;
    if (tapTimer.current) clearTimeout(tapTimer.current);

    if (tapCount.current >= TAPS_NEEDED) {
      tapCount.current = 0;
      if (reduce) {
        setShowNote(true);
      } else {
        setEggPhase("rolling");
      }
      return;
    }

    tapTimer.current = setTimeout(() => {
      tapCount.current = 0;
    }, TAP_RESET_MS);
  };

  useEffect(() => {
    if (!showNote && eggPhase === "idle") return;

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
  }, [showNote, eggPhase]);

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

      <img src="/photos/easter-egg.png" alt="" aria-hidden className="hidden" />

      <h1
        onClick={handleTitleTap}
        className="font-masthead cursor-default select-none text-5xl leading-none sm:text-7xl lg:text-8xl"
      >
        {masthead.paperName}
      </h1>
      <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-faint)] sm:text-[11px]">
        {masthead.volumeLine}
      </p>

      {eggPhase !== "idle" && (
        <RollingEgg
          phase={eggPhase}
          onRollComplete={() => {
            setEggPhase("idle");
            setShowNote(true);
          }}
          onCrackComplete={() => {
            setEggPhase("idle");
            setShowNote(true);
          }}
        />
      )}

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
                Hey, Jakkamma! You found the random little page made just for you.
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
