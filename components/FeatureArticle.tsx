import Reveal from "@/components/Reveal";

export default function FeatureArticle() {
  return (
    <section className="flex h-full flex-col justify-center bg-[var(--ink)] px-4 py-3 text-[var(--paper)] sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-60 sm:text-xs">
            Behind the Headlines
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display mt-2 text-base leading-snug italic sm:mt-6 sm:text-2xl">
            For 38 years, he wore the uniform with pride.
          </p>
          <p className="mt-1.5 text-xs leading-snug opacity-80 sm:mt-4 sm:text-lg">
            He served a city. He protected people. He carried responsibilities most of us will
            never fully understand.
          </p>
          <p className="mt-1.5 text-xs leading-snug opacity-80 sm:mt-4 sm:text-lg">
            And through it all, he came home to be Dad.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-3 text-xs leading-snug opacity-80 sm:mt-8 sm:text-lg">
            Today, we don&apos;t just celebrate his retirement. We celebrate 38 years of service,
            sacrifice, courage, and countless stories that will stay with us forever.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="font-display mt-3 text-lg font-black uppercase leading-tight sm:mt-10 sm:text-4xl">
            The Uniform May Retire.
            <br />
            The Memories Never Will.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
