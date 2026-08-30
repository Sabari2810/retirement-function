import Reveal from "@/components/Reveal";
import { officer } from "@/lib/config";

export default function Invitation() {
  return (
    <section className="paper-alt border-y-2 border-[var(--ink)]/20 px-4 py-12 sm:py-16">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          You Are Cordially Invited
        </p>
        <p className="mt-4 text-base leading-relaxed sm:text-lg">
          After {officer.totalService} of service in the {officer.serviceBranch}, we invite you to
          join us in celebrating the retirement of
        </p>
        <h2 className="font-display mt-3 text-2xl font-black uppercase sm:text-4xl">
          {officer.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
          A career built on duty, responsibility, countless shifts and a lifetime of service to
          the city.
        </p>
        <p className="font-display mt-4 text-base italic leading-relaxed sm:text-lg">
          Come celebrate the man behind the uniform, the journey behind the years, and the
          beginning of everything that comes after.
        </p>
      </Reveal>
    </section>
  );
}
