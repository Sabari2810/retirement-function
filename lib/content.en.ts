import type { Content } from "./content";

const name = "V. Prabhakaran";

export const content: Content = {
  meta: {
    title: `The Retirement Times: ${name}'s Final Report`,
    description: `A special-edition newspaper honouring ${name}'s 38 Years, 3 Months, 22 Days of service. Come celebrate the final shift.`,
  },
  skipLink: "Skip to content",
  masthead: {
    paperName: "The Retirement Times",
    volumeLine: "Vol. 38 · Final Edition · 06 September 2026",
  },
  officer: {
    name,
    qualification: "M.A.",
    designation: "Sub-Inspector",
    department: "Greater Chennai Police",
    serviceBranch: "Tamil Nadu Police Department",
    joinedDate: "09.05.1988",
    finalDay: "31.08.2026",
  },
  hero: {
    eyebrow: "Breaking News",
    headline: [
      "After 38 Years, 3 Months & 22 Days of Service,",
      "Officer Has Officially Been Released From Duty.",
    ],
    servingSince: "Serving the city since 1988.",
  },
  microNotes: {
    special: { k: "City Desk", v: "Chennai" },
    archive: { k: "Archive No.", v: "1988–2026" },
    status: { k: "Report Status", v: "Complete" },
  },
  invitation: {
    eyebrow: "A Special Announcement",
    lead: "After almost four decades of reporting for duty, V. Prabhakaran has finally received one last order:",
    orderLine: "Retire. And Enjoy.",
    closing: "Come celebrate the man behind the uniform and the beautiful chapter ahead.",
  },
  preliminaryReport: {
    eyebrow: "Preliminary Report",
    caseNoLabel: "Case No.",
    placeLabel: "Place",
    cornerPlace: "Chennai",
    caseNo: "38",
    findingsLabel: "Findings",
    fields: [
      { k: "Subject", v: name },
      { k: "Service", v: "Tamil Nadu Police Department" },
      { k: "Joined", v: "09.05.1988" },
      { k: "Final Day", v: "31.08.2026" },
      { k: "Sentence", v: "Rest. For the rest of his life." },
    ],
    findings: [
      "Never late for duty. Not once.",
      "Zero black marks. Zero memos.",
      "Still supervising, even when off duty.",
    ],
    verdict: ["Retirement Approved.", "Case Closed."],
  },
  event: {
    dateLabel: "06.09.2026 · Sunday",
    time: "18:00 – 21:00 Hrs",
    venueName: "Vijayalakshmi Party Hall A/C",
    addressLines: ["#98B, Sabari Salai,", "Madipakkam,", "Chennai – 600 091"],
    landmark: "Madipakkam Iyappan Temple",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Vijayalakshmi%20Party%20Hall%20A%2FC%2C%20%2398B%2C%20Sabari%20Salai%2C%20Madipakkam%2C%20Chennai%20-%20600091",
    rsvpUrl: "https://wa.me/919876543210?text=I'll%20be%20there%20to%20celebrate%20Prabhakaran%20sir's%20retirement!",
  },
  eventDetails: {
    eyebrow: "Now It's Time for You to Report to Duty",
    dutyOrder: "Duty Order",
    dutyOrderNote: "(Retirement Function)",
    dateFieldLabel: "Date",
    timeFieldLabel: "Time",
    venueFieldLabel: "Venue",
    landmarkFieldLabel: "Landmark",
    viewLocation: "View Location",
  },
  rsvp: {
    heading: ["All Units, Family & Friends", "Report for Duty."],
    sub: "Your presence would make this celebration even more special.",
  },
  turnPage: { label: "Turn the Page" },
  careerRecord: {
    eyebrow: "The Career Record",
    heading: "The Career Record",
    sub: "A quick journey through the years.",
    viewFullTimeline: "View Full Timeline",
    fullHeading: "The Career Record",
  },
  careerTimeline: [
    {
      date: "09.05.1988",
      grade: "Armed Reserve",
      department: "Police Department (Joined)",
      note: "Service begins.",
    },
    {
      date: "1988 – 1997",
      grade: "Armed Reserve",
      department: "Armed Reserve, Pudhupettai",
      note: "Nine years in this posting, the start of a long career.",
    },
    {
      date: "1997 – 2003",
      grade: "Grade I",
      department: "E3 Teynampet Traffic",
      note: "Handled documentation and daily records.",
    },
    {
      date: "2003 – 2008",
      grade: "Head Constable",
      department: "R4 Traffic Investigation",
      note: "Five years in this posting.",
    },
    {
      date: "2008 – 2011",
      grade: "Head Constable",
      department: "E3 Traffic",
      note: "Continued handling documentation and records.",
    },
    {
      date: "2012 – 2013",
      grade: "Head Constable",
      department: "R5 Virugambakkam Traffic",
      note: "Continued the same records duty.",
    },
    {
      date: "2013 – 2018",
      grade: "Special Sub-Inspector",
      department: "E3 Crime",
      note: "Handled documentation and case records.",
    },
    {
      date: "2018 – 2019",
      grade: "Special Sub-Inspector",
      department: "E3 Traffic",
      note: "Back to handling documentation and records.",
    },
    {
      date: "Jun 2019 – Aug 2019",
      grade: "Sub-Inspector (Training)",
      department: "RR Stadium, Pudupet",
      note: "A new chapter begins.",
    },
    {
      date: "Aug 2019 – Nov 2019",
      grade: "Sub-Inspector (Practical Training)",
      department: "F3 Nungambakkam",
      note: "",
    },
    {
      date: "2019 – 2021",
      grade: "Sub-Inspector",
      department: "Crime Record Bureau",
      note: "A new responsibility. A new role.",
    },
    {
      date: "2022 – 31.08.2026",
      grade: "Sub-Inspector",
      department: "Crime Branch, CID Head Quarters",
      note: "The final posting. The final chapter. The final report.",
    },
  ],
  beforeAfter: {
    eyebrow: "38 Years Apart",
    heading: "Then & Now",
    sub: "The same uniform. A different lifetime.",
    thenLabel: "The Beginning · 1988",
    nowLabel: "The Final Chapter · 2026",
  },
  betweenTheLines: {
    heading: "Between the Lines",
    sub: "Because a service record can never tell the whole story.",
    lines: [
      ["There were dinners he missed.", "Nights he wasn't home.", "Mornings he left before we woke."],
      [
        "There were a few bumps along the way,",
        "some small, some harder to forget.",
        "He always found his way back.",
      ],
      ["Still, he showed up.", "Because duty came first."],
    ],
    quote: "The years are easy to count. The moments he gave up for them are not.",
  },
  numbersPanel: {
    eyebrow: "The Numbers Behind the Uniform",
    years: "Years",
    months: "Months",
    days: "Days",
    facts: [
      { k: "Joined", v: "09.05.1988" },
      { k: "Retired", v: "31.08.2026" },
      { k: "Department", v: "Greater Chennai Police" },
      { k: "Final Designation", v: "Sub-Inspector" },
    ],
  },
  quietHumor: {
    breakingNews: "Breaking News",
    headline: "Officer finally reports for duty… at home.",
  },
  finalSmile: {
    quote: "After all these years of reporting for duty, it's finally time to report to life.",
    closing: ["The Uniform May Retire.", "The Man Doesn't."],
    chapter: "Here's to the Next Chapter.",
    loveNote: "With Love, Pride & Gratitude.",
  },
  finalInvitation: {
    heading: "We Would Love to Have You With Us.",
    landmarkLabel: "Landmark",
    closing: "Until the Next Edition.",
  },
  languageGate: {
    prompt: "Choose your language",
    english: "English",
    tamil: "தமிழ்",
  },
  languageToggle: { en: "EN", ta: "TA" },
};
