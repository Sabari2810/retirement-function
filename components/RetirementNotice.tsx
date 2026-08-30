import Reveal from "@/components/Reveal";
import Stamp from "@/components/Stamp";
import { dad } from "@/lib/config";

const fields = [
  { k: "பெயர்", v: dad.name },
  { k: "துறை", v: dad.department },
  { k: "சேவை", v: `${dad.yearsOfService} ஆண்டுகள்` },
  { k: "நிலை", v: "அதிகாரப்பூர்வமாக ஓய்வு பெற்றார்" },
  { k: "அடுத்த பணி", v: "வாழ்க்கை" },
  { k: "அறிக்கை அளிக்கும் இடம்", v: "வீடு" },
  { k: "ஷிப்ட்", v: "நெகிழ்வானது" },
  { k: "முதலாளி", v: "குடும்பம்" },
];

export default function RetirementNotice() {
  return (
    <section className="px-4 py-2 sm:px-8">
      <Reveal className="relative mx-auto max-w-xl border-2 border-[var(--ink)] p-3 sm:p-8">
        <p className="text-center font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          அதிகாரப்பூர்வ அறிவிப்பு
        </p>
        <h2 className="font-display mt-1 text-center text-lg font-black sm:mt-2 sm:text-3xl">
          ஓய்வூதிய அறிவிப்பு
        </h2>

        <dl className="mt-2 divide-y divide-dotted divide-[var(--ink)]/30 sm:mt-6">
          {fields.map((f) => (
            <div key={f.k} className="flex justify-between gap-4 py-1 text-xs sm:py-2.5 sm:text-base">
              <dt className="font-mono uppercase tracking-wide text-[var(--ink-soft)]">{f.k}</dt>
              <dd className="text-right font-semibold">{f.v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-2 flex justify-center sm:mt-6">
          <Stamp rotate={-8}>அங்கீகரிக்கப்பட்டது</Stamp>
        </div>
      </Reveal>
    </section>
  );
}
