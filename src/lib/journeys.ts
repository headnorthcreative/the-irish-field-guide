import skellig from "@/assets/skellig-boreen.jpg";
import burren from "@/assets/burren-field.jpg";
import wicklow from "@/assets/wicklow-treetops.jpg";

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
    slug: "skellig-outposts",
    title: "The Skellig Outposts",
    caption: "The Skellig Outposts — 6 days",
    region: "Ring of Kerry, Iveragh & Skellig Michael",
    length: "6 days · 5 nights",
    image: skellig,
    summary:
      "The Ring of Kerry driven anti-clockwise, against the coaches, with a boat to Skellig Michael when the Atlantic allows it. Nights in Kenmare and Portmagee.",
    pace: "Two to four hours of driving a day, never more. Long lunches are part of the route.",
    days: [
      { day: "Day 1", title: "Shannon or Kerry airport to Kenmare", note: "Collected at arrivals. Tea in Kenmare, a short walk to the stone circle, early dinner." },
      { day: "Day 2", title: "Beara and the Healy Pass", note: "Allihies copper mines, the pier at slack water, back over the pass at golden hour." },
      { day: "Day 3", title: "Kenmare to Portmagee via Staigue Fort", note: "Soda bread at Nora's, the farmer's pasture to Staigue, Derrynane strand at low tide." },
      { day: "Day 4", title: "Skellig Michael", note: "Boat at 08:30 if the swell is kind. If not, the Skellig Ring and Valentia's slate quarry instead." },
      { day: "Day 5", title: "Glenbeigh and the Kerry Bog Village", note: "Turf fires, a sheepdog demonstration, and the long slow road to Killarney." },
      { day: "Day 6", title: "Killarney to your departure", note: "Muckross House early, before the crowds, then the airport or onward." },
    ],
    margin: "Skellig boats are weather-dependent — Brede always has a plan B that nobody regrets.",
  },
  {
    slug: "burrens-solitude",
    title: "The Burren’s Solitude",
    caption: "The Burren’s Solitude",
    region: "Co. Clare, the Burren & the Wild Atlantic Way",
    length: "4 days · 3 nights",
    image: burren,
    summary:
      "Limestone, orchids and holy wells. The Cliffs of Moher at the quiet end of the day, music in Doolin, and the lesser-known Fanore coast.",
    pace: "Gentle walking on limestone pavement; sturdy shoes, nothing technical.",
    days: [
      { day: "Day 1", title: "Shannon to Ballyvaughan", note: "Collected at Shannon. Oysters at the harbour, the Flaggy Shore walk." },
      { day: "Day 2", title: "The high Burren", note: "Poulnabrone dolmen before nine, a botanist friend for the orchids, a holy well with ribbons." },
      { day: "Day 3", title: "Doolin and the cliffs", note: "Cliffs of Moher from Hag's Head at evening, then a session in Doolin." },
      { day: "Day 4", title: "Kilfenora to Shannon or onward", note: "The high crosses, a perfumery in the hills, and the road out." },
    ],
    margin: "The cliffs are best after 5pm, when the coaches have gone home.",
  },
  {
    slug: "wicklow-glens",
    title: "Wicklow’s Glens",
    caption: "Wicklow’s Glens",
    region: "Co. Wicklow & Ancient Kilkenny",
    length: "3 days · 2 nights",
    image: wicklow,
    summary:
      "An hour from Dublin and a world away: Glendalough's monastic city, the Sally Gap, and a day in medieval Kilkenny with its castle and Black Abbey.",
    pace: "Short drives, unhurried walks around the lakes.",
    days: [
      { day: "Day 1", title: "Dublin to Glendalough", note: "Collected at your Dublin hotel. The Sally Gap, Lough Tay, and the upper lake at Glendalough." },
      { day: "Day 2", title: "Wicklow to Kilkenny", note: "Avoca's weavers, Jerpoint Abbey, then Kilkenny's Medieval Mile on foot." },
      { day: "Day 3", title: "Kilkenny to Dublin or the West", note: "Kilkenny Castle early, then Dublin airport or onward to Kerry." },
    ],
    margin: "Glendalough's upper lake path is quiet before ten — worth the early tea.",
  },
];

export function getJourney(slug: string) {
  return journeys.find((j) => j.slug === slug);
}

export type MapStop = { id: string; label: string; x: number; y: number; lore: string; time?: string };

export const mapStops: MapStop[] = [
  { id: "derrynane", label: "Derrynane — swim at low tide", x: 180, y: 170, lore: "Daniel O'Connell's home sits behind the dunes. At low tide you can walk to Abbey Island and its graveyard in the sand.", time: "Best at low water, check the tables with Brede" },
  { id: "staigue", label: "Staigue Fort", x: 400, y: 200, lore: "A drystone ring fort, some 2,500 years old, reached by a farmer's lane. Walls four metres thick and not a drop of mortar.", time: "45 minutes up the boreen" },
  { id: "kenmare", label: "Kenmare · Crowley’s, fiddle Tues", x: 620, y: 250, lore: "The little town at the head of the bay. Crowley's has a fiddle session on Tuesday nights and the warmest fire in the county.", time: "Session from 21:30" },
  { id: "allihies", label: "Beara · Allihies pier, slack water 15:20", x: 300, y: 300, lore: "Painted houses, old copper mines and a pier where the seals come in on slack water. Rarely a coach in sight.", time: "Slack water around mid-afternoon" },
];
