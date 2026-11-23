import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-dunquin.jpg";
import brede from "@/assets/brede-portrait.jpg";
import { journeys } from "@/lib/journeys";
import { RouteMap } from "@/components/site/RouteMap";
import { ParlourLetter } from "@/components/site/ParlourLetter";
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crystal Tours Ireland — Luxury private tours & chauffeur services" },
      { name: "description", content: "Bespoke luxury private tours and chauffeur services across Ireland: the Ring of Kerry, the Cliffs of Moher, Cork, Wicklow and Kilkenny, airport transfers, golf, shopping and ancestry." },
      { property: "og:title", content: "Crystal Tours Ireland — Crafting unforgettable Irish dreams" },
      { property: "og:description", content: "Private tours of Ireland with Brede and her accredited chauffeur-guides — tailored to you, in comfort and style." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const eyebrow = "italic text-[16px] text-amber";
const h2 = "font-semibold leading-[1.02] text-moss";
const body = "text-[17px] leading-[1.65] text-ink/75";
const px = "px-5 md:px-14";

const placements = [
  "md:col-span-6 -rotate-1",
  "md:col-span-3 rotate-2 md:mt-24",
  "md:col-span-3 -rotate-[1.5deg] md:mt-6",
];
const heights = ["h-[300px] md:h-[380px]", "h-[220px] md:h-[260px]", "h-[240px] md:h-[300px]"];

const faqs = [
  { q: "Is the tour just for us?", a: "Yes. Our private tours are exclusive to you and your party — just you, your family or a small group of friends. We never combine different parties." },
  { q: "Can we change the itinerary or add stops?", a: "Absolutely. We specialise in bespoke itineraries, and even our set tours can be adjusted to your interests. On the day, we’re flexible with routes and stops, time permitting — just ask your driver-guide." },
  { q: "What’s included in the price?", a: "Transport in a luxury vehicle and an expert guide. Entrance fees, meals and accommodation are usually not included, so you keep your flexibility — but we’re happy to recommend or arrange them." },
  { q: "How much luggage can we bring?", a: "Typically one medium suitcase and one carry-on per passenger, with room for shopping too. Tell us at booking if you need more." },
  { q: "How do deposits and payment work?", a: "A 50% deposit is typically required to secure a booking; the exact amount depends on the tour and is confirmed when you book. Full payment is due 30 days before your tour starts. We accept credit cards and bank transfers." },
  { q: "What if the weather turns?", a: "We’ll do our best to adjust the itinerary if weather affects the plans. Your safety always comes first." },
  { q: "Can you help with mobility needs, child seats or a guide dog?", a: "Yes. Let us know about any special requirements when you book and we’ll make the arrangements. Child seats are available on request, and guide dogs are welcome when declared at booking." },
  { q: "Do I need travel insurance?", a: "It isn’t mandatory, but we strongly recommend comprehensive travel insurance." },
]

const notes = [
  { who: "Ruby M", text: "Thank you Brede for the most wonderful 8 days in our favourite country. We learned so much from you and had so much fun." },
  { who: "Wendi L", text: "The narrow roads looked tricky but your calm and skilled driving kept us safe." },
  { who: "Francine P", text: "When our flight was delayed you adjusted the itinerary seamlessly. Truly above and beyond." },
  { who: "Shelley & Suzanne", text: "Without your insights we would not have seen all those special places like the Abbey and Ballysaggartmore." },
];

const services = [
  { n: "I", t: "Private & bespoke tours", d: "Curated routes or a journey designed entirely around you — history, landscapes, food, and recommendations for the best hotels and tables." },
  { n: "II", t: "Premium transfers", d: "Met on arrival and driven in comfort to your hotel, or back to the airport, without a moment’s stress." },
  { n: "III", t: "Executive hire", d: "Reliable, discreet travel for business visitors and events, to the standard corporate travel demands." },
  { n: "IV", t: "Irish retail tours", d: "From luxury outlets to traditional Irish crafts, with any shops you ask for and room in the car for all of it." },
  { n: "V", t: "Golf tours", d: "Tee times booked as part of your trip. Bring your clubs, or we’ll arrange rentals at most courses." },
  { n: "VI", t: "Ancestry & heritage", d: "Explore ancestral villages and family heritage sites, and connect with your Irish story." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid items-end gap-10 pb-16 pt-12 md:grid-cols-12 md:gap-12 md:pb-24 md:pt-16 md:pl-14">
        <div className="relative px-5 pb-4 md:col-span-5 md:px-0">
          <p className="hand -rotate-2 text-[24px] text-amber">Crafting unforgettable Irish dreams</p>
          <h1 className="mt-4 text-[44px] font-semibold leading-[0.98] text-ink sm:text-[56px] lg:text-[64px]" style={{ textWrap: "balance" }}>
            Where the tarmac ends, the stories begin.
          </h1>
          <p className="mt-7 max-w-[430px] text-[18px] leading-[1.6] text-ink/80">
            Bespoke luxury tours and chauffeur services across Ireland. Brede and her accredited guides meet you, carry the bags, and bring the stories, history and hidden places of the Emerald Isle to life — at your pace, in complete comfort.
          </p>
          <a href="#parlour" className="mt-8 inline-block border-b border-amber pb-1 text-[23px] italic text-moss hover:text-amber">
            Plan your tour with us →
          </a>
        </div>
        <figure className="bg-filmframe p-2 pb-2 sm:p-3 md:col-span-7">
          <img src={hero} alt="Dunquin and the Blasket Islands off the Dingle peninsula" width={1600} height={1000} className="h-[300px] w-full object-cover saturate-[.7] sepia-[.15] sm:h-[420px] lg:h-[500px]" />
          <figcaption className="flex justify-between gap-4 pt-2 text-[11px] font-bold tracking-[0.2em] text-amber-film">
            <span>◂ 14A  KODAK PORTRA 400</span>
            <span>DUNQUIN PIER, DINGLE</span>
          </figcaption>
        </figure>
      </section>

      {/* Seanchas */}
      <section id="seanchas" className={`${px} grid scroll-mt-28 gap-10 border-t border-ink/20 py-16 md:grid-cols-12 md:gap-12 md:py-24`}>
        <div className="md:col-span-4">
          <p className={eyebrow}>Seanchas</p>
          <h2 className={`${h2} text-[40px] md:text-[46px]`}>The Art of the Road</h2>
          <p className={`mt-5 ${body}`}>Lines copied from the letters our guests send home. The road, as they remember it.</p>
        </div>
        <div className="ruled -rotate-[0.6deg] border border-ink/15 bg-notepaper p-6 sm:p-10 md:col-span-7 md:col-start-6">
          <div className="hand space-y-1 text-[22px] leading-[40px] text-ink/85 sm:text-[26px]">
            {notes.map((n) => (
              <p key={n.who}>“{n.text}” <b className="text-amber">— {n.who}</b></p>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={`${px} grid items-start gap-10 border-y border-ink/15 bg-parch/70 py-16 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-12`}>
        <div className="lg:col-span-3">
          <h2 className={`${h2} text-[38px] md:text-[42px]`}>The Cartographer’s Map</h2>
          <p className={`mt-5 ${body}`}>The Ring of Kerry: 179 km of coastal cliffs, emerald valleys and colourful villages, and the places we never drive past.</p>
          <p className="hand mt-6 text-[21px] text-amber -rotate-1">↳ tap a mark on the map for its lore</p>
        </div>
        <div className="lg:col-span-9">
          <RouteMap />
        </div>
      </section>

      {/* Brede */}
      <section id="brede" className={`${px} grid scroll-mt-28 items-center gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24`}>
        <img src={brede} alt="Brede leaning on a drystone wall above the coast" loading="lazy" width={1280} height={1024} className="h-[340px] w-full border-[10px] border-paper object-cover md:col-span-6 md:h-[480px]" />
        <div className="md:col-span-5 md:col-start-8">
          <p className={eyebrow}>Meet Brede</p>
          <h2 className={`${h2} text-[42px] leading-[1] md:text-[50px]`}>Fifteen years of Irish roads</h2>
          <p className="mt-6 text-[18px] leading-[1.65] text-ink/80">Brede and her team have more than 15 years’ experience crafting personalised journeys, from the Cliffs of Moher to the House of Waterford Crystal. Our chauffeurs aren’t just drivers: they are accredited, well-trained guides, ready with an answer, a story, or a hidden gem.</p>
          <p className="hand mt-8 border-l-2 border-amber pl-5 text-[24px] leading-[1.3] text-ink md:text-[27px]">“We felt like we were traveling with a friend and also an historian.” <span className="text-amber">— Marsha S</span></p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`${px} grid scroll-mt-28 gap-10 border-t border-ink/20 py-16 md:grid-cols-12 md:gap-12 md:py-24`}>
        <div className="md:col-span-4">
          <p className={eyebrow}>What we do</p>
          <h2 className={`${h2} text-[38px] md:text-[44px]`}>One team, every kind of Irish journey</h2>
          <p className="hand mt-6 text-[22px] text-amber -rotate-1">↳ every detail taken care of, so you can simply enjoy it</p>
        </div>
        <ol className="grid gap-x-12 md:col-span-7 md:col-start-6 md:grid-cols-2">
          {services.map((x) => (
            <li key={x.n} className="border-t border-ink/25 py-5">
              <p className="text-[22px] font-semibold text-moss"><span className="hand mr-3 text-[24px] text-amber">{x.n}.</span>{x.t}</p>
              <p className="mt-2 text-[17px] leading-[1.6] text-ink/75">{x.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Expeditions */}
      <section className={`${px} border-t border-ink/20 py-16 md:py-24`}>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <h2 className={`${h2} text-[40px] md:text-[46px]`}>Curated Private Tours</h2>
          <Link to="/journeys" className="border-b border-amber pb-1 text-[19px] italic text-moss hover:text-amber">All six tours →</Link>
        </div>
        <div className="grid items-start gap-x-10 gap-y-12 md:grid-cols-12">
          {journeys.slice(0, 3).map((j, i) => (
            <Link key={j.slug} to="/journeys/$slug" params={{ slug: j.slug }} className={`dk group block transition-transform hover:rotate-0 ${placements[i]}`}>
              <img src={j.image} alt={j.title} loading="lazy" className={`w-full object-cover ${heights[i]}`} />
              <p className="hand mt-3 text-[26px] md:text-[28px]">{j.caption}</p>
              <p className="text-[15px] italic text-ink/60 group-hover:text-amber">{j.length} · see the route →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* V-Class */}
      <section className={`${px} grid gap-10 border-y border-ink/15 bg-parch/40 py-16 md:grid-cols-12 md:gap-12 md:py-24`}>
        <div className="md:col-span-5">
          <p className={eyebrow}>The Carriage</p>
          <h2 className={`${h2} text-[38px] md:text-[44px]`}>Luxury vehicles, chosen for your party</h2>
          <p className={`mt-5 ${body}`}>From the moment you step in, you’re welcomed into comfort and calm — room to stretch, something cool to drink, and the countryside rolling past the window.</p>
        </div>
        <dl className="border-t border-ink/40 md:col-span-6 md:col-start-7">
          {[
            ["Vehicles", "Luxury sedans, SUVs and minibuses, matched to your group"],
            ["Private", "Your party only — we never combine groups"],
            ["Luggage", "One medium case and one carry-on each, plus your shopping"],
            ["On board", "Complimentary Wi-Fi and refreshments"],
            ["On arrival", "Personalised meet & greet and help with bags"],
            ["Special needs", "Child seats, mobility help and guide dogs on request"],
          ].map(([k, val]) => (
            <div key={k} className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 border-b border-ink/20 py-3 sm:grid-cols-[150px_minmax(0,1fr)]">
              <dt className="text-[13px] uppercase tracking-[0.12em] text-ink/60 pt-1">{k}</dt>
              <dd className="text-[19px] italic text-ink/85">{val}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Ancestry */}
      <section id="ancestry" className={`${px} grid scroll-mt-28 items-start gap-10 border-b border-ink/15 bg-parch/70 py-16 md:grid-cols-12 md:gap-12 md:py-24`}>
        <div className="md:col-span-4">
          <p className={eyebrow}>Ancestry & Heritage</p>
          <h2 className={`${h2} text-[38px] md:text-[44px]`}>Finding the village they came from</h2>
          <p className={`mt-5 ${body}`}>Trace your Irish roots on a tour built around your family. We’ll help you explore ancestral villages, visit family heritage sites and connect with your Irish story.</p>
          <a href="#parlour" className="mt-6 inline-block border-b border-amber pb-1 text-[19px] italic text-moss hover:text-amber">Tell us your family names →</a>
        </div>
        <figure className="relative mt-6 border border-ink/30 bg-ledger p-6 sm:p-12 md:col-span-7 md:col-start-6 md:mt-0">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ink/70 sm:text-center sm:text-[13px]">From the guest book</p>
          <blockquote className="mt-6 border-t border-ink/40 pt-8 text-[26px] italic leading-[1.35] text-ink sm:text-[32px]">
            “Thank you so much for helping me find my grandfather’s village after 18 years searching. Our trip to Ireland so special.”
          </blockquote>
          <figcaption className="hand mt-5 text-[24px] text-amber">— Eileen H</figcaption>
          <div aria-hidden className="stamp absolute -top-6 right-4 grid h-[86px] w-[86px] place-items-center bg-ledger text-center text-[10px] font-bold uppercase text-amber sm:right-8">
            Found<br />after<br />18 yrs
          </div>
        </figure>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${px} grid scroll-mt-28 gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24`}>
        <div className="md:col-span-4">
          <p className={eyebrow}>Questions at the fireside</p>
          <h2 className={`${h2} text-[38px] md:text-[44px]`}>What travellers ask us</h2>
          <p className={`mt-5 ${body}`}>Anything not here? Ring or WhatsApp — we’re always happy to talk.</p>
        </div>
        <Accordion type="single" collapsible className="border-t border-ink/40 md:col-span-7 md:col-start-6">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-ink/20">
              <AccordionTrigger className="text-left text-[21px] font-semibold text-moss hover:text-amber hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-[17px] leading-[1.65] text-ink/80">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Parlour */}
      <section id="parlour" className={`${px} grid scroll-mt-28 gap-10 border-t border-ink/20 py-16 md:grid-cols-12 md:gap-12 md:py-24`}>
        <div className="md:col-span-4">
          <p className={eyebrow}>The Parlour Table</p>
          <h2 className={`${h2} text-[40px] md:text-[46px]`}>Tell us about your Irish dream</h2>
          <p className="mt-8 text-[18px] text-ink/80">
            Or ring / WhatsApp<br />
            <a href={`tel:${PHONE_TEL}`} className="text-[24px] italic text-moss hover:text-amber">{PHONE_DISPLAY}</a>
          </p>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="mt-3 inline-block border-b border-amber pb-1 text-[18px] italic text-moss hover:text-amber">
            Open WhatsApp →
          </a>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <ParlourLetter />
        </div>
      </section>
    </>
  );
}
