import CaseFileBox from "@/components/CaseFileBox";
import { officer } from "@/lib/config";

const fields = [
  { k: "Subject", v: officer.name },
  { k: "Service", v: officer.serviceBranch },
  { k: "Joined", v: officer.joinedDate },
  { k: "Final Day", v: officer.finalDay },
  { k: "Status", v: "Retired" },
  { k: "Sentence", v: "Rest. For the rest of his life." },
];

const findings = [
  "Never once late for duty in 38 years — a record no one dares contest.",
  "A city kept a little safer, one long shift at a time.",
  "A family that waited up more nights than they will ever admit.",
  "Enough stories collected to fill a second case file entirely.",
];

export default function CaseFilePreview() {
  return (
    <section className="px-4 py-12 sm:py-16">
      <CaseFileBox
        eyebrow="Preliminary Report"
        fields={fields}
        findings={findings}
        verdictLines={["Case Closed.", "Career Complete.", "Rest Starts."]}
        corner={{ caseNo: "38", place: "Chennai" }}
        emphasize
        stampVerdict
      />
    </section>
  );
}
