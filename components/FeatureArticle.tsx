import Reveal from "@/components/Reveal";

export default function FeatureArticle() {
  return (
    <section className="flex min-h-full flex-col justify-center bg-[var(--ink)] px-4 py-20 text-[var(--paper)] sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-60 sm:text-xs">
            Behind the Headlines
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display mt-6 text-xl leading-relaxed italic sm:text-2xl">
            For 38 years, he wore the uniform with pride.
          </p>
          <p className="mt-4 text-base leading-relaxed opacity-80 sm:text-lg">
            He served a city. He protected people. He carried responsibilities most of us will
            never fully understand.
          </p>
          <p className="mt-4 text-base leading-relaxed opacity-80 sm:text-lg">
            And through it all, he came home to be Dad.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 text-base leading-relaxed opacity-80 sm:text-lg">
            Today, we don&apos;t just celebrate his retirement.
          </p>
          <p className="mt-2 text-base leading-relaxed opacity-80 sm:text-lg">
            We celebrate 38 years of service, sacrifice, courage, and countless stories that will
            stay with us forever.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="font-display mt-12 text-3xl font-black uppercase leading-tight sm:text-5xl">
            The Uniform May Retire.
            <br />
            The Memories Never Will.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
