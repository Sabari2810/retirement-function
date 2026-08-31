// ============================================================================
// THE RETIREMENT TIMES: CONFIG
// Every editable fact lives here: name, dates, venue, RSVP/Maps links, and
// the full career timeline. Nothing below should be hard-coded elsewhere.
// ============================================================================

export const officer = {
  name: "Prabhakaran. V",
  qualification: "M.A.",
  designation: "Sub-Inspector",
  department: "Greater Chennai Police",
  serviceBranch: "Tamil Nadu Police Service",
  joinedDate: "09.05.1988",
  finalDay: "31.08.2026",
  totalService: "38 Years, 3 Months, 22 Days",
  serviceYears: "38",
  serviceMonths: "03",
  serviceDays: "22",
};

export const masthead = {
  paperName: "The Retirement Times",
  volumeLine: "Vol. 38 · Final Edition · 06 September 2026",
};

export const event = {
  dateLabel: "06.09.2026 · Sunday",
  time: "18:00 – 21:00 Hrs",
  venueName: "Vijayalakshmi Party Hall A/C",
  addressLines: ["#98B, Sabari Salai,", "Madipakkam,", "Chennai – 600 091"],
  landmark: "Madipakkam Iyappan Temple",
  // Configure these to real destinations before sending the invite.
  mapsUrl: "https://share.google/6s2Cy8kdROrbxm0rx",
  rsvpUrl: "https://wa.me/919876543210?text=I'll%20be%20there%20to%20celebrate%20Prabhakaran%20sir's%20retirement!",
};

export const heroPhoto = {
  src: "/photos/photo-10.jpeg",
  alt: `${officer.name} in dress uniform`,
};

export const careerTimeline = [
  {
    date: "09.05.1988",
    grade: "Constable",
    department: "Police Department (Joined)",
    note: "Service begins.",
  },
  {
    date: "1988 – 1997",
    grade: "Constable",
    department: "Armed Reserve, Pudhupettai",
    note: "Nine years in this posting — the start of a long career.",
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
];

export const betweenTheLines = [
  { top: "Some nights were for sleep.", bottom: "Too many were spent on duty instead." },
  { top: "Some mornings started early.", bottom: "Some began with a call before sunrise, asking him to cover for someone else." },
  { top: "Some family functions needed everyone there.", bottom: "Duty needed him more, more often than it should have." },
  { top: "Some celebrations were missed entirely.", bottom: "Because someone had to be there when others couldn't." },
  { top: "Some shifts ended only for the next to begin.", bottom: "Proper rest was often the first thing given up." },
  { top: "A few accidents came along the way.", bottom: "Some minor, a couple not so minor — he still came back." },
  { top: "Some days were long, and some were longer.", bottom: "He still showed up the next morning, smiling." },
];

export const microContent = [
  { k: "Special Correspondent", v: "Retirement Desk" },
  { k: "Filed From", v: "Chennai" },
  { k: "Edition", v: "Final" },
  { k: "Archive No.", v: "1988–2026" },
  { k: "Report Status", v: "Complete" },
];
