import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { officer } from "@/lib/config";

const facts = [
  { k: "Joined", v: officer.joinedDate },
  { k: "Retired", v: officer.finalDay },
  { k: "Department", v: officer.department },
  { k: "Final Designation", v: officer.designation },
];

export default function NumbersPanel() {
  return (
    <section className="px-4 py-14 text-center sm:py-20">
      <Reveal>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          The Numbers Behind the Uniform
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-6 flex items-end justify-center gap-6 sm:mt-8 sm:gap-10">
        <div>
          <Counter to={38} className="font-display text-6xl font-black leading-none sm:text-8xl" />
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)] sm:text-xs">
            Years
          </p>
        </div>
        <div>
          <Counter to={3} pad={2} className="font-display text-4xl font-black leading-none sm:text-6xl" />
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)] sm:text-xs">
            Months
          </p>
        </div>
        <div>
          <Counter to={22} className="font-display text-4xl font-black leading-none sm:text-6xl" />
          <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)] sm:text-xs">
            Days
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <dl className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-x-6 gap-y-3 text-left sm:mt-12">
          {facts.map((f) => (
            <div key={f.k}>
              <dt className="font-mono text-[9px] uppercase tracking-widest text-[var(--ink-soft)] sm:text-[10px]">
                {f.k}
              </dt>
              <dd className="font-display text-sm font-bold sm:text-base">{f.v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
