"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useContent, useLanguage } from "@/lib/LanguageContext";

export default function Masthead() {
  const reduce = useReducedMotion();
  const { masthead, languageToggle } = useContent();
  const { lang, setLang } = useLanguage();

  return (
    <motion.header
      className="relative border-b-4 border-double border-[var(--ink)] px-4 pb-4 pt-14 text-center sm:pt-12"
      initial={reduce ? undefined : { scaleY: 0.4, opacity: 0 }}
      animate={reduce ? undefined : { scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "top center" }}
    >
      {lang !== null && (
        <div className="absolute right-4 top-4 flex overflow-hidden border border-[var(--ink)] font-mono text-[10px] uppercase tracking-wide sm:right-6 sm:top-6">
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

      <h1 className="font-masthead text-5xl leading-none sm:text-7xl lg:text-8xl">
        {masthead.paperName}
      </h1>
      <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--ink-faint)] sm:text-[11px]">
        {masthead.volumeLine}
      </p>
    </motion.header>
  );
}
