import CaseFileBox from "@/components/CaseFileBox";
import { officer } from "@/lib/config";

const fields = [
  { k: "வழக்கு எண்.", v: "38" },
  { k: "பொருள்", v: officer.name },
  { k: "சேவை", v: officer.serviceBranch },
  { k: "இணைந்த நாள்", v: officer.joinedDate },
  { k: "இறுதி நாள்", v: officer.finalDay },
  { k: "நிலை", v: "ஓய்வு பெற்றார்" },
];

export default function CaseFilePreview() {
  return (
    <section className="px-4 py-12 sm:py-16">
      <CaseFileBox
        eyebrow="இறுதி அறிக்கை"
        fields={fields}
        verdictLines={["வழக்கு முடிந்தது.", "பணி முடிந்தது.", "ஓய்வு தொடங்குகிறது."]}
      />
    </section>
  );
}
