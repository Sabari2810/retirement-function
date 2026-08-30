import Reveal from "@/components/Reveal";

export default function FillerHeadline({ text }: { text: string }) {
  return (
    <Reveal className="mx-auto mt-2 max-w-md text-center">
      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ink-faint)] sm:text-[10px]">
        <span aria-hidden>{"// "}</span>
        {text}
      </p>
    </Reveal>
  );
}
