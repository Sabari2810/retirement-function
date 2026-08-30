// ============================================================================
// SPECIAL EDITION CONFIG (தமிழ் பதிப்பு)
// Every piece of editable content for the site lives here. Change a name,
// date, photo, or timeline entry here and it updates everywhere it's used.
// ============================================================================

export const dad = {
  name: "பிரபாகரன்",
  designation: "சிறப்பு சப் இன்ஸ்பெக்டர்",
  department: "சென்னை நகர காவல்துறை",
  yearsOfService: 38,
  hireYear: 1988,
  retirementYear: 2026,
};

export const masthead = {
  paperName: "ஓய்வு காலம்",
  volumeLine: `தொகுதி ${dad.yearsOfService} · இறுதி பதிப்பு`,
};

export const event = {
  dateLabel: "செப்டம்பர் 6, 2026",
  isoDate: "2026-09-06T18:00:00",
  time: "மாலை 6 மணி முதல்",
  venue: "கிராண்ட் ரீஜென்சி மஹால், அண்ணா சாலை, சென்னை",
  dressCode: "கொண்டாட்டத்திற்கு ஏற்ப உடை அணியவும்",
  mission: "நல்ல உணவு. நல்ல கதைகள். நல்ல மனிதர்கள்.",
  // Configure this to a WhatsApp link, a form URL, or a mailto: link.
  rsvpUrl: "https://wa.me/919876543210?text=%E0%AE%AA%E0%AF%8D%E0%AE%B0%E0%AE%AA%E0%AE%BE%E0%AE%95%E0%AE%B0%E0%AE%A9%E0%AF%8D%20%E0%AE%93%E0%AE%AF%E0%AF%8D%E0%AE%B5%E0%AF%81%20%E0%AE%B5%E0%AE%BF%E0%AE%B4%E0%AE%BE%E0%AE%B5%E0%AF%88%20%E0%AE%95%E0%AF%8A%E0%AE%A3%E0%AF%8D%E0%AE%9F%E0%AE%BE%E0%AE%9F%20%E0%AE%A8%E0%AE%BE%E0%AE%A9%E0%AF%8D%20%E0%AE%B5%E0%AE%B0%E0%AF%81%E0%AE%B5%E0%AE%A9%E0%AF%8D!",
};

export const photos = {
  hero: { src: "/photos/photo-10.jpeg", alt: `${dad.name} சீருடையில்`, label: "அதிகாரப்பூர்வ படம்" },
  wanted: { src: "/photos/photo-1.jpeg", alt: `${dad.name} சுற்றுப் பணியில்`, label: "கடைசியாக பணியில் காணப்பட்டது" },
  archive: [
    { src: "/photos/photo-9.jpeg", caption: "CBCID தலைமையகத்தில்" },
    { src: "/photos/photo-7.jpeg", caption: "கொடியேற்று விழா" },
    { src: "/photos/photo-6.jpeg", caption: "பாராட்டுச் சான்றிதழ்" },
    { src: "/photos/photo-5.jpeg", caption: "சக ஊழியர்களுடன்" },
    { src: "/photos/photo-4.jpeg", caption: "பணியில்" },
    { src: "/photos/photo-3.jpeg", caption: "பணியில்" },
    { src: "/photos/photo-2.jpeg", caption: "இலக்கு பயிற்சி" },
    { src: "/photos/photo-8.jpeg", caption: "பணியில்" },
  ],
};

export const timeline = [
  { year: "1988", label: "காவல்துறையில் இணைந்தார்", note: "எல்லாம் தொடங்கிய இடம்." },
  { year: "1994", label: "[முதல் பணியிடம்]", note: "விவரங்கள் விரைவில்." },
  { year: "2000", label: "சப் இன்ஸ்பெக்டராகப் பதவி உயர்வு", note: "சேவை ஆண்டுகள்." },
  { year: "2012", label: "சிறப்பு சப் இன்ஸ்பெக்டர், CBCID ஆகப் பதவி உயர்வு", note: "சேவை ஆண்டுகள்." },
  { year: "2024", label: "[முக்கிய மைல்கல்]", note: "விவரங்கள் விரைவில்." },
  { year: "2026", label: "இறுதிப் பணி", note: "வழக்கு முடிவு." },
];

export const fillerHeadlines = [
  "உள்ளூர் மனிதர் இறுதியாக பணிப் பட்டியலிலிருந்து தப்பினார்",
  "38 ஆண்டுகளுக்குப் பிறகு, அதிகாரி வார இறுதி நாட்களைக் கண்டுபிடிக்கிறார்",
  "தேநீர் அருந்துவது கணிசமாக அதிகரிக்கும் என குடும்பத்தினர் எதிர்பார்ப்பு",
  "ஓய்வூதியம் அங்கீகரிக்கப்பட்டது. மேல்முறையீடு நிராகரிக்கப்பட்டது.",
  "அதிகாரி முழுநேர குடும்ப உறுப்பினராக பதவி உயர்வு பெற்றார்",
  "இனி இரவுப் பணி இல்லை. ஒருவேளை.",
];

export const wantedHabits = [
  "எந்தக் காரணமும் இல்லாமல் அதிகாலையில் எழுவது",
  "கேட்காமலேயே அறிவுரை வழங்குவது",
  "\"5 நிமிடம்\" என்று சொல்லிவிட்டு 30 நிமிடம் எடுத்துக்கொள்வது",
  "சரிபார்க்கத் தேவையில்லாதவற்றைக் கூடச் சரிபார்ப்பது",
  "இன்னும் பணியில் இருப்பது போலவே நடந்துகொள்வது",
];
