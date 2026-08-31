"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { content as enContent } from "@/lib/content.en";

export default function LanguageGate() {
  const { lang, setLang } = useLanguage();

  return (
    <AnimatePresence>
      {lang === null && (
        <motion.div
          className="paper-texture fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto w-full max-w-sm border-4 border-double border-[var(--ink)] p-6 text-center sm:p-10">
            <h1 className="font-display text-lg font-black uppercase leading-snug sm:text-2xl">
              {enContent.languageGate.prompt} &middot; உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்
            </h1>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8">
              <button
                type="button"
                onClick={() => setLang("en")}
                className="border-2 border-[var(--ink)] px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
              >
                {enContent.languageGate.english}
              </button>
              <button
                type="button"
                onClick={() => setLang("ta")}
                className="border-2 border-[var(--ink)] px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
              >
                {enContent.languageGate.tamil}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
