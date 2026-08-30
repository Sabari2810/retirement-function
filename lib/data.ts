// Placeholder data for the invitation. Swap these values for the real
// retiree's details, event info, and schedule before sending the invite.

export const invite = {
  retireeFullName: "Prabhakaran",
  retireeFirstName: "Prabhakaran",
  role: "Vice President of Engineering",
  company: "Nordic Systems Inc.",
  yearsOfService: 38,
  hostedBy: "Family & Friends of Prabhakaran",

  hireYear: "1988",
  paperName: "The Retirement Post",
  edition: "Nordic Systems Inc. — Special Edition",
  headline: "THE LEGEND HAS RETIRED!",

  date: "Sunday, September 6, 2026",
  isoDate: "2026-09-06T18:00:00",
  time: "6:00 PM Onwards",
  rsvpBy: "September 3, 2026",

  venue: {
    name: "The Grand Oak Banquet Hall",
    address: "4820 Lakeview Drive, Portland, OR 97201",
    mapUrl: "https://maps.google.com/?q=4820+Lakeview+Drive+Portland+OR+97201",
  },

  message: [
    "For 38 remarkable years, Prabhakaran has led with patience, humor, and an open door — mentoring three generations of engineers and never once missing a Friday donut run.",
    "Now it's time to trade standup meetings for sunrise hikes, and sprint reviews for slow mornings with coffee. Help us send him off in style.",
  ],

  schedule: [
    { time: "6:00 PM", label: "Cocktail Hour & Arrivals" },
    { time: "7:00 PM", label: "Dinner is Served" },
    { time: "8:00 PM", label: "Toasts & Tributes" },
    { time: "8:45 PM", label: "A Look Back: Career Highlights" },
    { time: "9:15 PM", label: "Cake, Dancing & Celebration" },
  ],

  milestones: [
    { year: "1988", label: "Joined Nordic Systems as a Junior Engineer" },
    { year: "2000", label: "Promoted to Engineering Manager" },
    { year: "2012", label: "Named Vice President of Engineering" },
    { year: "2026", label: "Retires after 38 years of service" },
  ],

  attire: "Cocktail Attire",
  giftNote:
    "Your presence is the only gift we need. If you'd like to contribute, the family has set up a small fund toward Prabhakaran's first fishing boat.",

  contact: {
    name: "The Family",
    phone: "(503) 555-0148",
    email: "family@example.com",
  },

  worldInHireYear: {
    leader: "President: Ronald Reagan",
    population: "World Population: 5.1 Billion",
    factoid: "★ ★ ★ ★ ★  A Very Good Year",
  },

  whatHappened:
    "In 1988, the Summer Olympics were held in Seoul, the first Pixar short film premiered, and personal computers were just starting to show up in office cubicles. It was a simpler time — and the exact year Nordic Systems got very lucky, hiring a bright young engineer named Prabhakaran.",

  costOfLiving: [
    { item: "New Car", price: "$10,400" },
    { item: "New House", price: "$95,000" },
    { item: "Loaf of Bread", price: "$0.60" },
    { item: "Gallon of Milk", price: "$2.19" },
    { item: "Gallon of Gas", price: "$0.95" },
    { item: "Dozen Eggs", price: "$0.79" },
  ],
  averageSalary: "$20,468 / year",

  closingLine:
    "Now it's time to relax and enjoy yourself, Prabhakaran — after 38 years of graft and hard work!",
} as const;

export const galleryPlaceholders = [
  "First Day, 1988",
  "The 2000 Team",
  "VP Promotion, 2012",
  "Office Farewell",
];
