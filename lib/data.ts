// Placeholder data for the invitation. Swap these values for the real
// retiree's details, event info, and schedule before sending the invite.

export const invite = {
  retireeFullName: "Prabhakaran",
  retireeFirstName: "Prabhakaran",
  role: "Special Sub Inspector of Police",
  company: "CBCID",
  yearsOfService: 38,
  hostedBy: "Family & Friends of Prabhakaran",

  hireYear: "1988",
  paperName: "The Retirement Post",
  edition: "CBCID, Special Edition",
  headline: "THE LEGEND HAS RETIRED!",

  date: "Sunday, September 6, 2026",
  isoDate: "2026-09-06T18:00:00",
  time: "6:00 PM Onwards",
  rsvpBy: "September 3, 2026",

  venue: {
    name: "Grand Regency Mahal",
    address: "12 Anna Salai, Chennai, Tamil Nadu 600002",
    mapUrl: "https://maps.google.com/?q=Anna+Salai+Chennai+Tamil+Nadu",
  },

  message: [
    "For 38 remarkable years, Prabhakaran has served with courage, integrity, and dedication, cracking tough cases and mentoring younger officers along the way.",
    "Now it's time to trade case files for sunrise walks, and long shifts for slow mornings with coffee. Help us send him off in style.",
  ],

  schedule: [
    { time: "6:00 PM", label: "Guests Arrive & Refreshments" },
    { time: "7:00 PM", label: "Felicitation & Speeches" },
    { time: "8:00 PM", label: "Memento Presentation" },
    { time: "8:45 PM", label: "A Look Back: Career Highlights" },
    { time: "9:15 PM", label: "Dinner & Celebration" },
  ],

  milestones: [
    { year: "1988", label: "Joined the Police Department as a Constable" },
    { year: "2000", label: "Promoted to Sub Inspector" },
    { year: "2012", label: "Promoted to Special Sub Inspector, CBCID" },
    { year: "2026", label: "Retires after 38 years of service" },
  ],

  attire: "Traditional / Formal Attire",
  giftNote:
    "Your presence is the only gift we need. If you'd like to contribute, the family has set up a small fund toward Prabhakaran's dream vacation.",

  contact: {
    name: "The Family",
    phone: "+91 98765 43210",
    email: "family@example.com",
  },

  worldInHireYear: {
    leader: "Prime Minister: Rajiv Gandhi",
    population: "India's Population: 810 Million",
    factoid: "★ ★ ★ ★ ★  A Very Good Year",
  },

  whatHappened:
    "In 1988, Viswanathan Anand became India's first chess Grandmaster, Rajiv Gandhi was Prime Minister, and cricket commentary still crackled in over the radio for most households. It was a simpler time, and the exact year the force got very lucky, recruiting a sharp young officer named Prabhakaran.",

  costOfLiving: [
    { item: "New Car (Maruti 800)", price: "₹47,500" },
    { item: "New House", price: "₹1,50,000" },
    { item: "Loaf of Bread", price: "₹2" },
    { item: "Litre of Milk", price: "₹4" },
    { item: "Litre of Petrol", price: "₹7" },
    { item: "Dozen Eggs", price: "₹6" },
  ],
  averageSalary: "₹1,200 / month",

  closingLine:
    "Now it's time to relax and enjoy yourself, Prabhakaran, after 38 years of graft and hard work!",

  heroPhoto: "/photos/photo-10.jpeg",
} as const;

export const galleryPhotos = [
  { src: "/photos/photo-9.jpeg", caption: "At CBCID Headquarters" },
  { src: "/photos/photo-7.jpeg", caption: "Flag Hoisting Ceremony" },
  { src: "/photos/photo-6.jpeg", caption: "Certificate of Appreciation" },
  { src: "/photos/photo-5.jpeg", caption: "With Colleagues" },
  { src: "/photos/photo-4.jpeg", caption: "On Duty" },
  { src: "/photos/photo-3.jpeg", caption: "On Duty" },
  { src: "/photos/photo-1.jpeg", caption: "On Patrol" },
  { src: "/photos/photo-2.jpeg", caption: "Target Practice" },
  { src: "/photos/photo-8.jpeg", caption: "On Duty" },
];
