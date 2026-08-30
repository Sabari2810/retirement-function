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
import Newspaper from "@/components/Newspaper";
import PageShell from "@/components/PageShell";
import PhotoArchive from "@/components/PhotoArchive";
import RetirementNotice from "@/components/RetirementNotice";
import Timeline from "@/components/Timeline";
import { fillerHeadlines } from "@/lib/config";

const titles = [
  "The Front Page",
  "The Case File",
  "Exclusive Report",
  "Wanted",
  "Behind the Headlines",
  "From the Archives",
  "The Record",
  "Retirement Notice",
  "Report for Duty",
  "The Final Word",
];

export default function Home() {
  const pages = [
    <PageShell key="cover">
      <div className="paper-texture flex min-h-full flex-col px-4 pt-6 sm:px-8">
        <NewspaperHeader />
        <Hero />
        <FillerHeadline text={fillerHeadlines[0]} />
      </div>
    </PageShell>,

    <PageShell key="case-file">
      <CaseFile />
    </PageShell>,

    <PageShell key="exclusive-report">
      <div className="paper-texture flex min-h-full flex-col justify-center">
        <ExclusiveReport />
        <FillerHeadline text={fillerHeadlines[1]} />
      </div>
    </PageShell>,

    <PageShell key="wanted">
      <div className="paper-texture grid min-h-full grid-cols-1 content-center gap-0 sm:grid-cols-2">
        <HumourColumn />
        <div className="flex flex-col justify-center">
          <FamilyNews />
          <FillerHeadline text={fillerHeadlines[2]} />
        </div>
      </div>
    </PageShell>,

    <PageShell key="feature-article">
      <FeatureArticle />
    </PageShell>,

    <PageShell key="photo-archive">
      <div className="paper-texture flex min-h-full flex-col justify-start">
        <PhotoArchive />
        <FillerHeadline text={fillerHeadlines[3]} />
      </div>
    </PageShell>,

    <PageShell key="timeline">
      <Timeline />
    </PageShell>,

    <PageShell key="retirement-notice">
      <div className="paper-texture flex min-h-full flex-col justify-center">
        <RetirementNotice />
        <FillerHeadline text={fillerHeadlines[4]} />
      </div>
    </PageShell>,

    <PageShell key="event-details">
      <div className="paper-texture flex min-h-full flex-col justify-center">
        <EventDetails />
        <FillerHeadline text={fillerHeadlines[5]} />
      </div>
    </PageShell>,

    <PageShell key="footer">
      <div className="paper-texture flex min-h-full flex-col justify-center">
        <Footer />
      </div>
    </PageShell>,
  ];

  return <Newspaper pages={pages} titles={titles} />;
}
