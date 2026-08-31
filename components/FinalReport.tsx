import CaseFileBox from "@/components/CaseFileBox";
import Reveal from "@/components/Reveal";
import { officer } from "@/lib/config";

const fields = [
  { k: "Name", v: officer.name },
  { k: "Qualification", v: officer.qualification },
  { k: "Designation", v: officer.designation },
  { k: "Department", v: officer.department },
  { k: "Service", v: officer.serviceBranch },
  { k: "Service Period", v: `${officer.joinedDate} – ${officer.finalDay}` },
  { k: "Total Service", v: officer.totalService },
  { k: "Sentence", v: "Rest. For the rest of his life." },
];

const findings = [
  "Never once late for duty in 38 years — a record no one dares contest.",
  "A city kept a little safer, one long shift at a time.",
  "A family that waited up more nights than they will ever admit.",
  "Enough stories collected to fill a second case file entirely.",
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
          corner={{ caseNo: "38", place: "Chennai" }}
          emphasize
          stampVerdict
        />
      </div>
    </section>
  );
}
