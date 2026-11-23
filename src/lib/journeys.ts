import kerry from "@/assets/skellig-boreen.jpg";
import burren from "@/assets/burren-field.jpg";
import wicklowGlen from "@/assets/wicklow-treetops.jpg";
import loughTay from "@/assets/lough-tay.jpg";
import cobh from "@/assets/cobh-harbour.jpg";
import coast from "@/assets/hero-dunquin.jpg";

// Content follows the live crystaltours.ie tour pages. Rewritten for tone, not invented.
export type JourneyDay = { day: string; title: string; note: string };
export type Journey = {
  slug: string;
  title: string;
  caption: string;
  region: string;
  length: string;
  image: string;
  summary: string;
  pace: string;
  days: JourneyDay[];
  margin: string;
};

export const journeys: Journey[] = [
  {
    slug: "ring-of-kerry",
    title: "The Ring of Kerry",
    caption: "The Ring of Kerry — scenic wonders & Irish charm",
    region: "Co. Kerry · 179 km (111 miles)",
    length: "Full day",
    image: kerry,
    summary:
      "The legendary 179-kilometre loop through County Kerry: coastal cliffs, emerald valleys and colourful villages, from Killarney National Park to the ancient stones of Staigue Fort.",
    pace: "A full day, with time for a wander in Kenmare or Sneem and plenty of stops for photographs.",
    days: [
      { day: "Killarney", title: "Killarney National Park", note: "Torc Waterfall, Muckross House, Ross Castle and the serene Lakes of Killarney." },
      { day: "Dunloe", title: "The Gap of Dunloe", note: "A stunning mountain pass, perfect for a walk or a horse-drawn jaunting car." },
      { day: "Sneem", title: "Sneem village", note: "A colourful stop with traditional Irish pubs and craft shops." },
      { day: "Staigue", title: "Staigue Fort", note: "An ancient stone ringfort with panoramic views." },
      { day: "Derrynane", title: "Derrynane Beach & House", note: "A windswept, golden-sand beach linked to the Irish patriot Daniel O’Connell." },
      { day: "Skellig", title: "The Skellig Ring (detour)", note: "A wilder road to Portmagee and boat trips to Skellig Michael — a UNESCO site and Star Wars filming location." },
      { day: "Views", title: "Moll’s Gap, Ladies View & Leprechaun Crossing", note: "Iconic viewpoints with sweeping vistas of mountains and lakes." },
    ],
    margin: "Mountains, peat bogs and the wild Atlantic — all in one day.",
  },
  {
    slug: "galway-cliffs-of-moher-burren",
    title: "Galway, the Cliffs of Moher & the Burren",
    caption: "Galway, the Cliffs of Moher & the Burren",
    region: "Co. Galway & Co. Clare · UNESCO Burren",
    length: "Day tour",
    image: burren,
    summary:
      "From the city of Galway to the great Cliffs of Moher and the strange, beautiful limestone of the Burren — the west coast at its wildest, with a guide who knows the best spots.",
    pace: "Travel in comfort between the stops, with stories and insights along the way.",
    days: [
      { day: "Galway", title: "Galway", note: "The lively west-coast city on Galway Bay." },
      { day: "Moher", title: "The Cliffs of Moher", note: "Ireland’s most famous cliffs, rising straight out of the Atlantic." },
      { day: "Burren", title: "The Burren UNESCO Geopark", note: "A rare limestone landscape of flowers, ancient tombs and stone walls." },
    ],
    margin: "A warm meet-and-greet starts the day; refreshments keep you going.",
  },
  {
    slug: "cork-kinsale-midleton-cobh",
    title: "Enchanting Cork, Kinsale, Midleton & Cobh",
    caption: "Cork, Kinsale, Midleton & Cobh",
    region: "Co. Cork & the south coast",
    length: "Day tour or longer",
    image: cobh,
    summary:
      "Cork’s English Market and St. Fin Barre’s Cathedral, an exclusive whiskey experience at Jameson in Midleton, Cobh’s Titanic history, and gourmet seafood by the harbour in Kinsale.",
    pace: "Heritage, food and comfort — every detail tailored to you.",
    days: [
      { day: "Cork", title: "Cork City", note: "The famed English Market with its artisan food, and the Gothic spires of St. Fin Barre’s Cathedral." },
      { day: "Midleton", title: "Jameson Distillery, Midleton", note: "Aged barrels and masterful craft tell the story of Ireland’s most iconic spirit." },
      { day: "Cobh", title: "Cobh", note: "The Titanic’s last port of call, where colourful houses cascade toward the sea." },
      { day: "Kinsale", title: "Kinsale", note: "Ireland’s gourmet capital: fresh seafood in award-winning restaurants and a yacht-filled harbour." },
    ],
    margin: "Céad míle fáilte — welcome to the south.",
  },
  {
    slug: "wicklow-kilkenny",
    title: "Escape to Wicklow & Kilkenny",
    caption: "Wicklow & Kilkenny — one day or several",
    region: "Co. Wicklow & Co. Kilkenny",
    length: "Single day or multi-day",
    image: wicklowGlen,
    summary:
      "Wicklow’s wild beauty and Kilkenny’s medieval charm: Glendalough’s ancient monastic ruins, the Wicklow Mountains and the grandeur of Kilkenny Castle — in a single day, or at a leisurely pace over several.",
    pace: "Do it in one day, or slow down with a night in a luxury hotel in between.",
    days: [
      { day: "Mountains", title: "The Wicklow Mountains", note: "A scenic drive through the “Garden of Ireland” with panoramic views of lush, rolling hills. On the longer tour: Powerscourt Waterfall and a day in the national park." },
      { day: "Glendalough", title: "Glendalough", note: "The ancient monastic site in a glacial valley — the round tower, the ruins and a stroll by the lakes. A picnic by the water on the multi-day tour." },
      { day: "Castle", title: "Kilkenny Castle & Gardens", note: "A tour of the castle, its history and its beautifully restored interiors." },
      { day: "Kilkenny", title: "The Medieval Mile", note: "St. Canice’s Cathedral, the Black Abbey, shops and cafés — and on the longer tour, a craft workshop or an evening music session." },
    ],
    margin: "Single day includes entry to key attractions; multi-day adds luxury hotels and breakfast.",
  },
  {
    slug: "wicklow-garden-of-ireland",
    title: "Wicklow: The Garden of Ireland",
    caption: "Wicklow — the Garden of Ireland",
    region: "Co. Wicklow · just south of Dublin",
    length: "Day tour",
    image: loughTay,
    summary:
      "Emerald valleys, cascading waterfalls and misty mountains just south of Dublin. Private estates like Powerscourt, the dark waters of Lough Tay and the open road of the Sally Gap.",
    pace: "A luxurious escape into untamed beauty, at your own pace.",
    days: [
      { day: "Powerscourt", title: "Powerscourt Estate", note: "Some of the world’s most exquisite gardens, and the waterfall." },
      { day: "Lough Tay", title: "Lough Tay — the “Guinness Lake”", note: "Named for its dark waters, with a pale sandy beach at its head." },
      { day: "Sally Gap", title: "The Sally Gap", note: "The high mountain road, where you might meet some carefree sheep." },
    ],
    margin: "Not just a destination — your personal retreat.",
  },
  {
    slug: "bespoke-private-tours",
    title: "Bespoke Private Tours",
    caption: "Bespoke — drawn around you",
    region: "Anywhere in Ireland",
    length: "As long as you like",
    image: coast,
    summary:
      "Your Irish adventure, designed entirely around you: your interests, your pace, your perfect day. Ancient history, natural wonders, food, golf, shopping or tracing your family roots.",
    pace: "No rushing, no rigid schedules. Stay as long as you like at each place and change plans as you go.",
    days: [
      { day: "i.", title: "Share your vision", note: "Tell us about your interests, the places you must see and the experiences you dream of." },
      { day: "ii.", title: "We design", note: "Our team creates a personalised itinerary around your preferences." },
      { day: "iii.", title: "Refine together", note: "We adjust the plan until it’s perfect for you." },
      { day: "iv.", title: "Experience Ireland", note: "Enjoy your bespoke adventure with complete peace of mind." },
    ],
    margin: "Hidden gems or iconic landmarks — every stop chosen with you in mind.",
  },
];

export function getJourney(slug: string) {
  return journeys.find((j) => j.slug === slug);
}

export type MapStop = { id: string; label: string; x: number; y: number; labelX: number; lore: string; time?: string };

// Ring of Kerry highlights, as listed on the live tour page.
export const mapStops: MapStop[] = [
  { id: "killarney", label: "Killarney · Muckross", x: 700, y: 150, labelX: 640, lore: "Killarney National Park: Torc Waterfall, Muckross House and the Lakes of Killarney.", time: "where the Ring begins" },
  { id: "molls", label: "Moll’s Gap · Ladies View", x: 640, y: 255, labelX: 560, lore: "Iconic viewpoints with sweeping vistas of mountains and lakes." },
  { id: "staigue", label: "Staigue Fort", x: 400, y: 200, labelX: 350, lore: "An ancient stone ringfort with panoramic views." },
  { id: "derrynane", label: "Derrynane", x: 180, y: 170, labelX: 120, lore: "A windswept golden-sand beach and Derrynane House, home of Daniel O’Connell.", time: "detour: the Skellig Ring to Portmagee" },
];
