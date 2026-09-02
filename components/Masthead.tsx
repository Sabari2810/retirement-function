"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useContent, useLanguage } from "@/lib/LanguageContext";

const TAPS_NEEDED = 10;
const TAP_RESET_MS = 2000;
const CONFETTI_EMOJI = ["✨", "🎉", "💫", "🎊", "⭐"];
const EGG_ROLL_MS = 900;
const EGG_CRACK_MS = 450;

function EggIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 130" className={className} aria-hidden>
      <ellipse cx="50" cy="68" rx="46" ry="58" fill="#f0c85e" stroke="#221f1a" strokeWidth="2" />
      <path d="M6,46 Q50,26 94,46" stroke="#7a2f2a" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M6,86 Q50,106 94,86" stroke="#232f42" strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx="27" cy="36" r="4.5" fill="#c94f4f" />
      <circle cx="73" cy="38" r="4.5" fill="#c94f4f" />
      <circle cx="50" cy="98" r="4.5" fill="#c94f4f" />
    </svg>
  );
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
        x: (Math.random() - 0.5) * 220,
        y: (Math.random() - 0.5) * 180 - 20,
        rotate: Math.random() * 360,
        color: SHARD_COLORS[i % SHARD_COLORS.length],
        size: 8 + Math.random() * 10,
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
          <EggIllustration className="h-24 w-auto drop-shadow-md" />
        </motion.div>
      ) : (
        <>
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: [1, 1.15, 0], opacity: [1, 1, 0] }}
            transition={{ duration: EGG_CRACK_MS / 1000, times: [0, 0.35, 1] }}
            onAnimationComplete={onCrackComplete}
          >
            <EggIllustration className="h-24 w-auto drop-shadow-md" />
          </motion.div>
          {shards.map((s) => (
            <motion.span
              key={s.id}
              className="absolute rounded-sm"
              style={{ width: s.size, height: s.size, backgroundColor: s.color }}
              initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
              animate={{ x: s.x, y: s.y, opacity: 0, rotate: s.rotate }}
              transition={{ duration: EGG_CRACK_MS / 1000 + 0.3, ease: "easeOut" }}
            />
          ))}
        </>
      )}
    </div>
  );
}

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 360,
        fall: 420 + Math.random() * 160,
        rotate: (Math.random() - 0.5) * 720,
        delay: Math.random() * 0.25,
        duration: 1.6 + Math.random() * 0.7,
        size: 14 + Math.random() * 14,
        emoji: CONFETTI_EMOJI[i % CONFETTI_EMOJI.length],
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[120] overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute left-1/2 top-1/3"
          style={{ fontSize: p.size }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.3 }}
          animate={{
            x: [0, p.x * 0.6, p.x],
            y: [0, -60 - Math.random() * 60, p.fall],
            opacity: [1, 1, 0],
            rotate: [0, p.rotate * 0.5, p.rotate],
            scale: [0.3, 1.1, 0.9],
          }}
          transition={{ duration: p.duration, delay: p.delay, times: [0, 0.3, 1], ease: "easeOut" }}
        >
          {p.emoji}
        </motion.span>
      ))}
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
          onRollComplete={() => setEggPhase("cracking")}
          onCrackComplete={() => {
            setEggPhase("idle");
            setShowNote(true);
          }}
        />
      )}

      {showNote && !reduce && <Confetti />}

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
