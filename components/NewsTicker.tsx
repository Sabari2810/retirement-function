"use client";

import { useReducedMotion } from "framer-motion";

export default function NewsTicker({
  label,
  text,
  className = "",
}: {
  label: string;
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();

  const group = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {[0, 1, 2].map((i) => (
        <span key={i} className="flex shrink-0 items-center whitespace-nowrap">
          <span className="mx-4 font-mono text-xs font-black uppercase tracking-[0.2em] text-[var(--paper)] sm:text-sm">
            <span className="siren-light">&#x1F6A8;</span> {label}{" "}
            <span className="siren-light">&#x1F6A8;</span>
          </span>
          <span className="mr-4 font-mono text-xs font-black uppercase tracking-[0.2em] text-[var(--paper)] sm:text-sm">
            {text}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y-2 border-[var(--stamp)] bg-[var(--stamp)] ${className}`}
    >
      <div className={reduce ? "flex" : "flex w-max animate-marquee"}>
        {group(false)}
        {!reduce && group(true)}
      </div>
    </div>
  );
}
