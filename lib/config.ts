// ============================================================================
// SPECIAL EDITION CONFIG
// Every piece of editable content for the site lives here. Change a name,
// date, photo, or timeline entry here and it updates everywhere it's used.
// ============================================================================

export const dad = {
  name: "Prabhakaran",
  designation: "Special Sub Inspector of Police",
  department: "Chennai City Police",
  yearsOfService: 38,
  hireYear: 1988,
  retirementYear: 2026,
};

export const masthead = {
  paperName: "The Retirement Times",
  volumeLine: `Vol. ${dad.yearsOfService} · The Final Edition`,
};

export const event = {
  dateLabel: "September 6, 2026",
  isoDate: "2026-09-06T18:00:00",
  time: "6:00 PM Onwards",
  venue: "Grand Regency Mahal, Anna Salai, Chennai",
  dressCode: "Come dressed to celebrate",
  mission: "Good food. Good stories. Good people.",
  // Configure this to a WhatsApp link, a form URL, or a mailto: link.
  rsvpUrl: "https://wa.me/919876543210?text=I'll%20be%20there%20to%20celebrate%20Prabhakaran's%20retirement!",
};

export const photos = {
  hero: { src: "/photos/photo-10.jpeg", alt: `${dad.name} in dress uniform`, label: "OFFICIAL PORTRAIT" },
  wanted: { src: "/photos/photo-1.jpeg", alt: `${dad.name} on patrol`, label: "LAST SEEN ON DUTY" },
  archive: [
    { src: "/photos/photo-9.jpeg", caption: "At CBCID Headquarters" },
    { src: "/photos/photo-7.jpeg", caption: "Flag Hoisting Ceremony" },
    { src: "/photos/photo-6.jpeg", caption: "Certificate of Appreciation" },
    { src: "/photos/photo-5.jpeg", caption: "With Colleagues" },
    { src: "/photos/photo-4.jpeg", caption: "On Duty" },
    { src: "/photos/photo-3.jpeg", caption: "On Duty" },
    { src: "/photos/photo-2.jpeg", caption: "Target Practice" },
    { src: "/photos/photo-8.jpeg", caption: "On Duty" },
  ],
};

export const timeline = [
  { year: "1988", label: "Joined the Police Department", note: "Where it all began." },
  { year: "1994", label: "[FIRST POSTING]", note: "Details to be added." },
  { year: "2000", label: "Promoted to Sub Inspector", note: "The years of service." },
  { year: "2012", label: "Promoted to Special Sub Inspector, CBCID", note: "The years of service." },
  { year: "2024", label: "[IMPORTANT MILESTONE]", note: "Details to be added." },
  { year: "2026", label: "The Final Shift", note: "Case closed." },
];

export const fillerHeadlines = [
  "LOCAL MAN FINALLY ESCAPES DUTY ROSTER",
  "38 YEARS LATER, OFFICER DISCOVERS WEEKENDS",
  "FAMILY EXPECTS SIGNIFICANT INCREASE IN TEA CONSUMPTION",
  "RETIREMENT APPROVED. APPEAL DENIED.",
  "OFFICER PROMOTED TO FULL TIME FAMILY MEMBER",
  "NO MORE NIGHT DUTIES. POSSIBLY.",
];

export const wantedHabits = [
  "Waking up early for absolutely no reason",
  "Giving unsolicited instructions",
  "Saying \"5 minutes\" and taking 30",
  "Checking things that don't need checking",
  "Still behaving like he's on duty",
];
