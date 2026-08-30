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
  "Other News",
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
      <div className="paper-texture flex h-full flex-col justify-center px-4 sm:px-8">
        <NewspaperHeader />
        <Hero />
        <FillerHeadline text={fillerHeadlines[0]} />
      </div>
    </PageShell>,

    <PageShell key="case-file">
      <CaseFile />
    </PageShell>,

    <PageShell key="exclusive-report">
      <div className="paper-texture flex h-full flex-col justify-center">
        <ExclusiveReport />
        <FillerHeadline text={fillerHeadlines[1]} />
      </div>
    </PageShell>,

    <PageShell key="wanted">
      <div className="paper-texture flex h-full flex-col justify-center">
        <HumourColumn />
      </div>
    </PageShell>,

    <PageShell key="family-news">
      <div className="paper-texture flex h-full flex-col justify-center">
        <FamilyNews />
        <FillerHeadline text={fillerHeadlines[2]} />
      </div>
    </PageShell>,

    <PageShell key="feature-article">
      <FeatureArticle />
    </PageShell>,

    <PageShell key="photo-archive">
      <div className="paper-texture flex h-full flex-col justify-center">
        <PhotoArchive />
      </div>
    </PageShell>,

    <PageShell key="timeline">
      <Timeline />
    </PageShell>,

    <PageShell key="retirement-notice">
      <div className="paper-texture flex h-full flex-col justify-center">
        <RetirementNotice />
      </div>
    </PageShell>,

    <PageShell key="event-details">
      <div className="paper-texture flex h-full flex-col justify-center">
        <EventDetails />
      </div>
    </PageShell>,

    <PageShell key="footer">
      <div className="paper-texture flex h-full flex-col justify-center">
        <Footer />
      </div>
    </PageShell>,
  ];

  return <Newspaper pages={pages} titles={titles} />;
}
