export type Lang = "en" | "ta";

export interface CareerEntry {
  date: string;
  grade: string;
  department: string;
  note: string;
}

export interface BetweenLine {
  top: string;
  bottom: string;
}

export interface Field {
  k: string;
  v: string;
}

export interface Content {
  meta: { title: string; description: string };
  skipLink: string;
  masthead: { paperName: string; volumeLine: string };
  officer: {
    name: string;
    qualification: string;
    designation: string;
    department: string;
    serviceBranch: string;
    joinedDate: string;
    finalDay: string;
  };
  hero: {
    eyebrow: string;
    headline: string[];
    servingSince: string;
  };
  microNotes: { special: Field; archive: Field; status: Field };
  invitation: {
    lead: string;
    body: string;
    closing: string;
  };
  preliminaryReport: {
    eyebrow: string;
    caseNoLabel: string;
    placeLabel: string;
    cornerPlace: string;
    caseNo: string;
    fields: Field[];
    findingsLabel: string;
    findings: string[];
    verdict: string[];
  };
  event: {
    dateLabel: string;
    time: string;
    venueName: string;
    addressLines: string[];
    landmark: string;
    mapsUrl: string;
    rsvpUrl: string;
  };
  eventDetails: {
    eyebrow: string;
    dutyOrder: string;
    dateFieldLabel: string;
    timeFieldLabel: string;
    venueFieldLabel: string;
    landmarkFieldLabel: string;
    viewLocation: string;
  };
  rsvp: {
    heading: string[];
    sub: string;
  };
  turnPage: { label: string };
  careerRecord: {
    eyebrow: string;
    heading: string;
    sub: string;
    viewFullTimeline: string;
    fullHeading: string;
  };
  careerTimeline: CareerEntry[];
  beforeAfter: {
    eyebrow: string;
    heading: string;
    sub: string;
    thenLabel: string;
    nowLabel: string;
  };
  betweenTheLines: {
    heading: string;
    sub: string;
    lines: BetweenLine[];
    quote: string;
  };
  numbersPanel: {
    eyebrow: string;
    years: string;
    months: string;
    days: string;
    facts: Field[];
  };
  quietHumor: {
    officialNotice: string;
    body: string;
    dayOff: string;
    note: string;
    breakingNews: string;
    headline: string;
  };
  finalSmile: {
    andNow: string;
    heading: string;
    quote: string;
    lines: string[];
    closing: string[];
    chapter: string;
    loveNote: string;
  };
  finalInvitation: {
    heading: string;
    landmarkLabel: string;
    closing: string;
  };
  languageGate: { prompt: string; english: string; tamil: string };
  languageToggle: { en: string; ta: string };
}
