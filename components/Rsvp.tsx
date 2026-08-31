import Reveal from "@/components/Reveal";

export default function Rsvp() {
  return (
    <section className="border-b-4 border-double border-[var(--ink)] px-4 py-12 text-center sm:py-16">
      <Reveal className="mx-auto max-w-md">
        <h2 className="font-display text-xl font-black uppercase leading-snug sm:text-2xl">
          All Units, Family &amp; Friends
          <br />
          Report for Duty.
        </h2>
        <p className="mt-3 text-sm text-[var(--ink-soft)] sm:text-base">
          Your presence would make this celebration even more special.
        </p>
      </Reveal>
    </section>
  );
}
