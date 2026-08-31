"use client";

import Reveal from "@/components/Reveal";
import { useContent } from "@/lib/LanguageContext";

function withBoldQuotes(text: string) {
  return text
    .split(/“([^”]+)”/g)
    .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}

function OrderLine({ text }: { text: string }) {
  const parts = text.split(/“([^”]+)”/g);

  if (parts.length === 1) {
    return (
      <h2 className="font-display mt-3 text-2xl font-black uppercase sm:text-4xl">{text}</h2>
    );
  }

  return (
    <p className="mt-3 text-base leading-relaxed sm:text-lg">
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span
            key={i}
            className="font-display text-xl font-black uppercase text-[var(--stamp)] sm:text-2xl"
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </p>
  );
}

export default function Invitation() {
  const { invitation } = useContent();

  return (
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 px-4 py-12 sm:py-16">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          {invitation.eyebrow}
        </p>
        <p className="mt-4 text-base leading-relaxed sm:text-lg">{withBoldQuotes(invitation.lead)}</p>
        <OrderLine text={invitation.orderLine} />
        {invitation.closing && (
          <p className="font-display mt-4 text-base italic leading-relaxed sm:text-lg">
            {invitation.closing}
          </p>
        )}
      </Reveal>
    </section>
  );
}
