import CaseFileBox from "@/components/CaseFileBox";
import Reveal from "@/components/Reveal";
import { officer } from "@/lib/config";

const fields = [
  { k: "Case No.", v: "38" },
  { k: "Name", v: officer.name },
  { k: "Qualification", v: officer.qualification },
  { k: "Designation", v: officer.designation },
  { k: "Department", v: officer.department },
  { k: "Service", v: officer.serviceBranch },
  { k: "Service Period", v: `${officer.joinedDate} – ${officer.finalDay}` },
];

const findings = [
  "A career completed with honour.",
  "A city served with dedication.",
  "A family that waited through countless shifts.",
  "A lifetime of memories earned along the way.",
];

export default function FinalReport() {
  return (
    <section className="px-4 py-14 sm:py-20">
      <Reveal>
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ink-soft)] sm:text-xs">
          The Final Report
        </p>
      </Reveal>
      <div className="mt-6 sm:mt-8">
        <CaseFileBox
          eyebrow="Case File"
          fields={fields}
          findings={findings}
          verdictLines={["Case Closed.", "Career Complete.", "Rest Starts."]}
        />
      </div>
    </section>
  );
}
