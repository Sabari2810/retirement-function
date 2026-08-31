"use client";

import BeforeAfter from "@/components/BeforeAfter";
import BetweenTheLines from "@/components/BetweenTheLines";
import CareerRecord from "@/components/CareerRecord";
import CaseFilePreview from "@/components/CaseFilePreview";
import EventDetails from "@/components/EventDetails";
import FinalInvitation from "@/components/FinalInvitation";
import FinalSmile from "@/components/FinalSmile";
import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import LanguageGate from "@/components/LanguageGate";
import Masthead from "@/components/Masthead";
import MicroNote from "@/components/MicroNote";
import NewPosting from "@/components/NewPosting";
import NumbersPanel from "@/components/NumbersPanel";
import QuietHumor from "@/components/QuietHumor";
import Rsvp from "@/components/Rsvp";
import TurnPage from "@/components/TurnPage";
import { useContent } from "@/lib/LanguageContext";

export default function Home() {
  const { skipLink, microNotes } = useContent();

  return (
    <div className="paper-texture flex-1">
      <LanguageGate />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border-2 focus:border-[var(--ink)] focus:bg-[var(--paper)] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase"
      >
        {skipLink}
      </a>

      <Masthead />

      <main id="main">
        <Hero />
        <MicroNote k={microNotes.special.k} v={microNotes.special.v} />
        <Invitation />
        <CaseFilePreview />
        <EventDetails />
        <Rsvp />

        <TurnPage targetId="the-record" />

        <CareerRecord />
        <BeforeAfter />
        <BetweenTheLines />
        <NumbersPanel />
        <QuietHumor />
        <NewPosting />
        <FinalSmile />
      </main>

      <FinalInvitation />
    </div>
  );
}
