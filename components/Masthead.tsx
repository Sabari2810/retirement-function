"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useContent, useLanguage } from "@/lib/LanguageContext";

const TAPS_NEEDED = 10;
const TAP_RESET_MS = 2000;
const EGG_ROLL_MS = 3600;
const SHAKE_MS = 500;
const SHATTER_MS = 750;
const EGG_SRC = "/photos/easter-egg.png";
const SHARD_W = 220;
const SHARD_H = 160;

function EggIllustration({ className }: { className?: string }) {
  return <img src={EGG_SRC} alt="" aria-hidden className={className} />;
}

// Six irregular wedges radiating from an off-center point, together tiling the
// whole box seamlessly (so at rest the shards reconstruct the intact egg).
const CRACK_CENTER = "47% 50%";
const CRACK_BOUNDARY = ["22% 0%", "78% 0%", "100% 38%", "82% 100%", "24% 100%", "0% 55%"];
const SHARDS = CRACK_BOUNDARY.map((p, i) => {
  const next = CRACK_BOUNDARY[(i + 1) % CRACK_BOUNDARY.length];
  return {
    id: i,
    clipPath: `polygon(${CRACK_CENTER}, ${p}, ${next})`,
  };
});
const SHARD_MOTION = [
  { x: 0, y: -85, rotate: 22 },
  { x: 70, y: -55, rotate: -28 },
  { x: 90, y: 45, rotate: 34 },
  { x: 15, y: 95, rotate: -24 },
  { x: -75, y: 55, rotate: 30 },
  { x: -85, y: -35, rotate: -34 },
];

function RollingEgg({
  phase,
  onRollComplete,
  onCrackComplete,
}: {
  phase: "rolling" | "cracking";
  onRollComplete: () => void;
  onCrackComplete: () => void;
}) {
  const [shattered, setShattered] = useState(false);

  useEffect(() => {
    if (!shattered) return;
    // Reveal the note while the shards are still finishing their fade, so it
    // feels like the note grows directly out of the break instead of waiting.
    const t = setTimeout(onCrackComplete, SHATTER_MS * 0.55);
    return () => clearTimeout(t);
  }, [shattered, onCrackComplete]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[115] flex items-center justify-center">
      {phase === "rolling" ? (
        <motion.div
          initial={{ x: "70vw", rotate: 0 }}
          animate={{ x: 0, rotate: 1080 }}
          transition={{ duration: EGG_ROLL_MS / 1000, ease: [0.32, 0, 0.2, 1] }}
          onAnimationComplete={onRollComplete}
        >
          <EggIllustration className="h-40 w-auto drop-shadow-md" />
        </motion.div>
      ) : !shattered ? (
        <motion.div
          initial={{ x: 0, rotate: 0, scale: 1 }}
          animate={{
            x: [0, -6, 6, -7, 7, -5, 5, 0],
            rotate: [0, -3, 3, -4, 4, -2, 2, 0],
            scale: [1, 1, 1, 1, 1, 1, 1.08, 1],
          }}
          transition={{ duration: SHAKE_MS / 1000, times: [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.85, 1] }}
          onAnimationComplete={() => setShattered(true)}
        >
          <EggIllustration className="h-40 w-auto drop-shadow-md" />
        </motion.div>
      ) : (
        <div className="relative" style={{ width: SHARD_W, height: SHARD_H }}>
          {SHARDS.map((s, i) => {
            const m = SHARD_MOTION[i];
            return (
              <motion.div
                key={s.id}
                className="absolute inset-0"
                style={{ clipPath: s.clipPath }}
                initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                animate={{ x: m.x, y: m.y, rotate: m.rotate, opacity: 0 }}
                transition={{ duration: SHATTER_MS / 1000, ease: "easeOut" }}
              >
                <img
                  src={EGG_SRC}
                  alt=""
                  aria-hidden
                  className="h-full w-full object-cover drop-shadow-md"
                />
              </motion.div>
            );
          })}
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
          onRollComplete={() => setEggPhase("cracking")}
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
            transition={{ duration: 0.15 }}
            onClick={() => setShowNote(false)}
            role="dialog"
            aria-modal="true"
            aria-label="A special notice"
          >
            <motion.div
              className="paper-texture no-scrollbar relative max-h-[85vh] w-full max-w-md overflow-y-auto border-4 border-double border-[var(--ink)] p-6 text-center sm:p-8"
              initial={{ opacity: 0, scale: 0.25 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.25 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
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

              <p className="text-base leading-relaxed sm:text-lg">
                Hey, Jakkamma. You found the random little page made just for you.
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
