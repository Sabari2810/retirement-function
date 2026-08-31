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
};

export const event = {
  dateLabel: "06.09.2026 · Sunday",
  time: "18:00 – 21:00 Hrs",
  venueName: "Vijayalakshmi Party Hall A/C",
  addressLines: ["#98B, Sabari Salai,", "Madipakkam,", "Chennai – 600 091"],
  landmark: "Madipakkam Iyappan Temple",
  // Configure these to real destinations before sending the invite.
  mapsUrl: "https://maps.google.com/?q=Vijayalakshmi+Party+Hall+Madipakkam+Chennai",
  rsvpUrl: "https://wa.me/919876543210?text=I'll%20be%20there%20to%20celebrate%20Prabhakaran%20sir's%20retirement!",
};

export const heroPhoto = {
  src: "/photos/photo-10.jpeg",
  alt: `${officer.name} in dress uniform`,
};

export const careerTimeline = [
  {
    date: "09.05.1988",
    label: "The Beginning",
    posting: "Joined the Police Department",
    note: "Service begins.",
  },
  {
    date: "1988 – 1997",
    label: "The Constable Years Begin",
    posting: "Armed Reserve, Pudhupettai",
    note: "Served in Armed Reserve for nine years. The beginning of a career that would span nearly four decades.",
  },
  {
    date: "1997 – 2003",
    label: "A New Posting",
    posting: "Grade I, E3 Teynampet Traffic",
    note: "Traffic Writer.",
  },
  {
    date: "2003 – 2008",
    label: "A New Responsibility",
    posting: "Head Constable, R4 Traffic Investigation",
    note: "Five years of service in Traffic Investigation.",
  },
  {
    date: "2008 – 2011",
    label: "",
    posting: "E3 Traffic",
    note: "Traffic Writer.",
  },
  {
    date: "2012 – 2013",
    label: "",
    posting: "R5 Virugambakkam Traffic",
    note: "Traffic Writer.",
  },
  {
    date: "2013 – 2018",
    label: "Special Sub-Inspector",
    posting: "Special Sub-Inspector, E3 Crime",
    note: "Crime Writer.",
  },
  {
    date: "2018 – 2019",
    label: "",
    posting: "Special Sub-Inspector, E3 Traffic",
    note: "Traffic Writer.",
  },
  {
    date: "Jun 2019 – Aug 2019",
    label: "The Uniform Changes",
    posting: "Sub-Inspector Training, RR Stadium, Pudupet",
    note: "A new chapter.",
  },
  {
    date: "Aug 2019 – Nov 2019",
    label: "Sub-Inspector",
    posting: "Sub-Inspector Practical Training, F3 Nungambakkam",
    note: "",
  },
  {
    date: "2019 – 2021",
    label: "",
    posting: "Sub-Inspector, Crime Record Bureau",
    note: "A new responsibility. A new role.",
  },
  {
    date: "2022 – 31.08.2026",
    label: "The Final Posting",
    posting: "Sub-Inspector, Crime Branch CID Head Quarters",
    note: "The final posting. The final chapter. The final report.",
  },
];

export const betweenTheLines = [
  { top: "Some nights were for sleep.", bottom: "Some were for duty." },
  { top: "Some mornings started early.", bottom: "Some started before the city woke up." },
  { top: "Some family functions needed everyone.", bottom: "Sometimes, duty needed him more." },
  { top: "Some celebrations were missed.", bottom: "Because someone had to be there when others couldn't." },
  { top: "Some days were long.", bottom: "He still showed up the next morning." },
];

export const microContent = [
  { k: "Special Correspondent", v: "Retirement Desk" },
  { k: "Filed From", v: "Chennai" },
  { k: "Edition", v: "Final" },
  { k: "Archive No.", v: "1988–2026" },
  { k: "Report Status", v: "Complete" },
];
