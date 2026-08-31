import CaseFileBox from "@/components/CaseFileBox";
import { officer } from "@/lib/config";

const fields = [
  { k: "Case No.", v: "38" },
  { k: "Subject", v: officer.name },
  { k: "Service", v: officer.serviceBranch },
  { k: "Joined", v: officer.joinedDate },
  { k: "Final Day", v: officer.finalDay },
  { k: "Status", v: "Retired" },
];

export default function CaseFilePreview() {
  return (
    <section className="px-4 py-12 sm:py-16">
      <CaseFileBox
        eyebrow="Preliminary Report"
        fields={fields}
        verdictLines={["Case Closed.", "Career Complete.", "Rest Starts."]}
      />
    </section>
  );
}
