import CaseFileBox from "@/components/CaseFileBox";
import Reveal from "@/components/Reveal";
import { officer } from "@/lib/config";

const fields = [
  { k: "வழக்கு எண்.", v: "38" },
  { k: "பெயர்", v: officer.name },
  { k: "தகுதி", v: officer.qualification },
  { k: "பதவி", v: officer.designation },
  { k: "துறை", v: officer.department },
  { k: "சேவை", v: officer.serviceBranch },
  { k: "சேவைக் காலம்", v: `${officer.joinedDate} – ${officer.finalDay}` },
  { k: "மொத்த சேவை", v: officer.totalService },
];

const findings = [
  "மரியாதையுடன் நிறைவு பெற்ற ஒரு பணிவாழ்க்கை.",
  "அர்ப்பணிப்புடன் சேவை செய்யப்பட்ட ஒரு நகரம்.",
  "எண்ணற்ற பணிநேரங்களை எதிர்பார்த்துக் காத்திருந்த ஒரு குடும்பம்.",
  "வழியில் ஈட்டிய வாழ்நாள் நினைவுகள்.",
];

export default function FinalReport() {
  return (
    <section className="px-4 py-14 sm:py-20">
      <Reveal>
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          இறுதி அறிக்கை
        </p>
      </Reveal>
      <div className="mt-6 sm:mt-8">
        <CaseFileBox
          eyebrow="வழக்குக் கோப்பு"
          fields={fields}
          findings={findings}
          verdictLines={["வழக்கு முடிந்தது.", "பணி முடிந்தது.", "ஓய்வு தொடங்குகிறது."]}
        />
      </div>
    </section>
  );
}
