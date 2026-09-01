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
              {enContent.languageGate.prompt}
            </h1>

            <div className="mt-6 flex flex-row items-center justify-center gap-3 sm:mt-8">
              <button
                type="button"
                onClick={() => setLang("en")}
                className="border-2 border-[var(--ink)] px-4 py-2 font-mono text-sm font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
              >
                {enContent.languageGate.english}
              </button>
              <span className="text-[var(--ink-faint)]">&middot;</span>
              <button
                type="button"
                onClick={() => setLang("ta")}
                className="border-2 border-[var(--ink)] px-4 py-2 font-mono text-sm font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
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
