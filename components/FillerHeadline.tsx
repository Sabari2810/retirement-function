import Reveal from "@/components/Reveal";

export default function FillerHeadline({ text }: { text: string }) {
  return (
    <Reveal className="mx-auto my-8 max-w-md text-center sm:my-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--ink-faint)] sm:text-xs">
        <span aria-hidden>{"// "}</span>
        {text}
      </p>
    </Reveal>
  );
}
