import Reveal from "@/components/Reveal";

export default function MicroNote({ k, v }: { k: string; v: string }) {
  return (
    <Reveal className="mx-auto my-6 flex max-w-xs items-baseline justify-center gap-2 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--ink-faint)] sm:my-8 sm:text-xs">
      <span>{k}:</span>
      <span className="font-semibold text-[var(--ink-soft)]">{v}</span>
    </Reveal>
  );
}
