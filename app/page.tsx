import CaseFile from "@/components/CaseFile";
import EventDetails from "@/components/EventDetails";
import ExclusiveReport from "@/components/ExclusiveReport";
import FamilyNews from "@/components/FamilyNews";
import FeatureArticle from "@/components/FeatureArticle";
import FillerHeadline from "@/components/FillerHeadline";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HumourColumn from "@/components/HumourColumn";
import NewspaperHeader from "@/components/NewspaperHeader";
import PhotoArchive from "@/components/PhotoArchive";
import RetirementNotice from "@/components/RetirementNotice";
import Timeline from "@/components/Timeline";
import { fillerHeadlines } from "@/lib/config";

export default function Home() {
  return (
    <div className="paper-texture flex-1">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border-2 focus:border-[var(--ink)] focus:bg-[var(--paper)] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-8">
        <NewspaperHeader />
      </div>

      <main id="main">
        <Hero />

        <FillerHeadline text={fillerHeadlines[0]} />

        <CaseFile />

        <FillerHeadline text={fillerHeadlines[1]} />

        <ExclusiveReport />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-0 sm:grid-cols-2">
          <HumourColumn />
          <div className="flex flex-col justify-center">
            <FamilyNews />
            <FillerHeadline text={fillerHeadlines[2]} />
          </div>
        </div>

        <FeatureArticle />

        <PhotoArchive />

        <FillerHeadline text={fillerHeadlines[3]} />

        <Timeline />

        <RetirementNotice />

        <FillerHeadline text={fillerHeadlines[4]} />

        <EventDetails />

        <FillerHeadline text={fillerHeadlines[5]} />
      </main>

      <Footer />
    </div>
  );
}
