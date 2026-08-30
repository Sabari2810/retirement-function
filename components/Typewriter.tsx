"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Typewriter({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => {
      setShown((n) => {
        if (n >= text.length) {
          clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 28);
    return () => clearInterval(id);
  }, [inView, reduce, text.length]);

  return (
    <span ref={ref} className={className}>
      {text.slice(0, shown)}
      <span aria-hidden className={shown < text.length ? "opacity-60" : "opacity-0"}>
        ▌
      </span>
    </span>
  );
}
