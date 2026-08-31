"use client";

import CaseFileBox from "@/components/CaseFileBox";
import { useContent } from "@/lib/LanguageContext";

export default function CaseFilePreview() {
  const { preliminaryReport } = useContent();

  return (
    <section className="px-4 py-12 sm:py-16">
      <CaseFileBox
        eyebrow={preliminaryReport.eyebrow}
        fields={preliminaryReport.fields}
        findings={preliminaryReport.findings}
        findingsLabel={preliminaryReport.findingsLabel}
        verdictLines={preliminaryReport.verdict}
        corner={{
          caseNoLabel: preliminaryReport.caseNoLabel,
          caseNo: preliminaryReport.caseNo,
          placeLabel: preliminaryReport.placeLabel,
          place: preliminaryReport.cornerPlace,
        }}
        emphasize
        stampVerdict
      />
    </section>
  );
}
