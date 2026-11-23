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
      { title: "Crystal Tours Ireland — Where the tarmac ends, the stories begin" },
      { name: "description", content: "Private chauffeured tours of Kerry, Clare and Wicklow with Brede: a leather-seated V-Class, boreens no coach can fit, and ancestral searches in the parish registers." },
      { property: "og:title", content: "Crystal Tours Ireland — Private chauffeured touring" },
      { property: "og:description", content: "Slow, private touring of Ireland with Brede, the driver who listens. Ring of Kerry, the Burren, Wicklow and ancestral searches." },
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
  { q: "How much luggage fits in the car?", a: "The Mercedes V-Class takes up to seven large suitcases plus hand luggage with a full party. Brede carries the bags at every hotel door. Golf clubs fit too — mention them in your letter." },
  { q: "How large can our private group be?", a: "Every tour is private to your party only: from one traveller up to seven guests in the V-Class. For larger families, Brede can arrange a second vehicle with a trusted colleague who drives in convoy." },
  { q: "How does the deposit work?", a: "Once you’re happy with Brede’s route sketch, a 25% deposit holds your dates. The balance is due 30 days before you travel. Cancel more than 60 days ahead and the deposit is returned in full; closer than that, Brede will always try to move your dates first." },
  { q: "What is included in the day rate?", a: "The vehicle, fuel, tolls, parking, Brede’s time and local knowledge, chilled water and Wi-Fi on board. Hotels, meals and entry fees are booked on your behalf and billed at cost, so you never pay a mark-up." },
  { q: "Can you collect us from the airport?", a: "Yes — Shannon, Kerry, Cork or Dublin. Brede tracks your flight and waits in arrivals with your name on a card, however late the plane." },
  { q: "How long does an ancestral search take?", a: "Send a surname and a county at least six weeks before you land. Brede works the parish registers, Griffith’s Valuation and the civil records, and sends what he finds before you fly." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid items-end gap-10 pb-16 pt-12 md:grid-cols-12 md:gap-12 md:pb-24 md:pt-16 md:pl-14">
        <div className="relative px-5 pb-4 md:col-span-5 md:px-0">
          <p className="hand -rotate-2 text-[24px] text-amber">County Kerry, 52°08′N</p>
          <h1 className="mt-4 text-[44px] font-semibold leading-[0.98] text-ink sm:text-[56px] lg:text-[64px]" style={{ textWrap: "balance" }}>
            Where the tarmac ends, the stories begin.
          </h1>
          <p className="mt-7 max-w-[430px] text-[18px] leading-[1.6] text-ink/80">
            Private chauffeured touring at the pace of a long conversation. Brede collects you at the door in a leather-seated V-Class, carries the bags and takes the boreens no coach can fit down.
          </p>
          <a href="#parlour" className="mt-8 inline-block border-b border-amber pb-1 text-[23px] italic text-moss hover:text-amber">
            Travel slowly with us →
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
          <p className={`mt-5 ${body}`}>A day from Brede’s logbook, Ring of Kerry, the Hendersons of Ohio. No itinerary was printed.</p>
        </div>
        <div className="ruled -rotate-[0.6deg] border border-ink/15 bg-notepaper p-6 sm:p-10 md:col-span-7 md:col-start-6">
          <div className="hand text-[22px] leading-[40px] text-ink/85 sm:text-[26px]">
            <p><b className="text-amber">09:00</b> — left Kenmare quay, flask of tea, mist on the Sound.</p>
            <p><b className="text-amber">11:15</b> — Soda bread in Kenmare, still warm, Nora’s back kitchen.</p>
            <p><b className="text-amber">14:00</b> — The farmer who let us walk his pasture to Staigue Fort. Sheep unbothered.</p>
            <p><b className="text-amber">17:40</b> — Derrynane strand, tide out. Mrs H. cried a little. Good day.</p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={`${px} grid items-start gap-10 border-y border-ink/15 bg-parch/70 py-16 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-12`}>
        <div className="lg:col-span-3">
          <h2 className={`${h2} text-[38px] md:text-[42px]`}>The Cartographer’s Map</h2>
          <p className={`mt-5 ${body}`}>Kerry and Beara as Brede drives them: the pub with the fire, the pier at slack water, the gate you close behind you.</p>
          <p className="hand mt-6 text-[21px] text-amber -rotate-1">↳ tap a mark on the map for its lore</p>
        </div>
        <div className="lg:col-span-9">
          <RouteMap />
        </div>
      </section>

      {/* Brede */}
      <section id="brede" className={`${px} grid scroll-mt-28 items-center gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24`}>
        <img src={brede} alt="Brede leaning on a drystone wall above the Kerry coast" loading="lazy" width={1280} height={1024} className="h-[340px] w-full border-[10px] border-paper object-cover md:col-span-6 md:h-[480px]" />
        <div className="md:col-span-5 md:col-start-8">
          <p className={eyebrow}>Brede’s Notebook</p>
          <h2 className={`${h2} text-[42px] leading-[1] md:text-[50px]`}>Twenty years of boreens</h2>
          <p className="mt-6 text-[18px] leading-[1.65] text-ink/80">Brede has driven Kerry, Clare and Cork since 2005. He knows which sexton keeps the graveyard key and which publican sings after nine.</p>
          <p className="hand mt-8 border-l-2 border-amber pl-5 text-[24px] leading-[1.3] text-ink md:text-[27px]">“Stopped at the drystone wall above Caherdaniel again. Moss thicker this year. They always go quiet here.”</p>
        </div>
      </section>

      {/* How a day works */}
      <section className={`${px} grid gap-10 border-t border-ink/20 py-16 md:grid-cols-12 md:gap-12 md:py-24`}>
        <div className="md:col-span-4">
          <p className={eyebrow}>How the days run</p>
          <h2 className={`${h2} text-[38px] md:text-[44px]`}>One driver, one party, no timetable</h2>
          <p className="hand mt-6 text-[22px] text-amber -rotate-1">↳ the route is drawn with you, not for you</p>
        </div>
        <div className="space-y-8 text-[18px] leading-[1.7] text-ink/80 md:col-span-7 md:col-start-6 md:columns-2 md:gap-12 md:space-y-0">
          <p className="break-inside-avoid md:mb-6"><span className="float-left mr-2 mt-1 text-[64px] font-semibold leading-[0.8] text-moss">Y</span>ou write to Brede with dates and a few wishes. Within a day he sends back a hand-drawn sketch of a route — where you’ll sleep, roughly how long each drive is, and the two or three things he thinks you shouldn’t miss.</p>
          <p className="break-inside-avoid md:mb-6">Once the sketch feels right, a deposit holds the dates and Brede books the hotels, the Skellig boat and any tables worth having, all at cost.</p>
          <p className="break-inside-avoid md:mb-6">On the day, he collects you at the airport or hotel door. Mornings start when you’re ready. If the light is good on the Healy Pass, you stop. If it rains, there’s a pub with a fire and a man with a story.</p>
          <p className="break-inside-avoid">Drives are kept to two or three hours a day. Every evening Brede talks through tomorrow, and changes it if you’d rather.</p>
        </div>
      </section>

      {/* Expeditions */}
      <section className={`${px} border-t border-ink/20 py-16 md:py-24`}>
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <h2 className={`${h2} text-[40px] md:text-[46px]`}>Unpolished Expeditions</h2>
          <Link to="/journeys" className="border-b border-amber pb-1 text-[19px] italic text-moss hover:text-amber">All journeys & routes →</Link>
        </div>
        <div className="grid items-start gap-x-10 gap-y-12 md:grid-cols-12">
          {journeys.map((j, i) => (
            <Link key={j.slug} to="/journeys/$slug" params={{ slug: j.slug }} className={`dk group block transition-transform hover:rotate-0 ${placements[i]}`}>
              <img src={j.image} alt={j.title} loading="lazy" className={`w-full object-cover ${heights[i]}`} />
              <p className="hand mt-3 text-[26px] md:text-[28px]">{j.caption}</p>
              <p className="text-[15px] italic text-ink/60 group-hover:text-amber">{j.length} · read the route →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* V-Class */}
      <section className={`${px} grid gap-10 border-y border-ink/15 bg-parch/40 py-16 md:grid-cols-12 md:gap-12 md:py-24`}>
        <div className="md:col-span-5">
          <p className={eyebrow}>The Carriage</p>
          <h2 className={`${h2} text-[38px] md:text-[44px]`}>A Mercedes V-Class, kept like a parlour</h2>
          <p className={`mt-5 ${body}`}>Brede drives one vehicle, his own, and keeps it the way his mother kept the good room: warm, spotless and quiet enough to hear the rain.</p>
        </div>
        <dl className="border-t border-ink/40 md:col-span-6 md:col-start-7">
          {[
            ["Seating", "Hand-stitched leather, captain’s chairs facing each other"],
            ["Guests", "Up to 7 travellers, private to your party"],
            ["Luggage", "Up to 7 large cases, plus hand luggage"],
            ["On board", "Chilled water, Wi-Fi, phone chargers, blankets"],
            ["Windows", "Panoramic glass for the mountains, tinted for naps"],
            ["Licensing", "Fully insured, Fáilte Ireland approved"],
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
          <p className={eyebrow}>Archival Ancestral Hearth</p>
          <h2 className={`${h2} text-[38px] md:text-[44px]`}>A cottage found in an 1842 parish ledger</h2>
          <p className={`mt-5 ${body}`}>Send a surname and a county. Brede works the registers before you land, then walks you to the door.</p>
          <ol className="mt-8 space-y-3 text-[17px] leading-[1.55] text-ink/80">
            <li><span className="hand mr-2 text-[22px] text-amber">i.</span>You send names, dates, a county — whatever the family remembers.</li>
            <li><span className="hand mr-2 text-[22px] text-amber">ii.</span>Brede searches parish registers, Griffith’s Valuation and civil records.</li>
            <li><span className="hand mr-2 text-[22px] text-amber">iii.</span>He finds the townland, the graveyard and, often, the walls.</li>
            <li><span className="hand mr-2 text-[22px] text-amber">iv.</span>On the day, you stand in the doorway. The kettle is usually on next door.</li>
          </ol>
        </div>
        <div className="relative mt-6 border border-ink/30 bg-ledger p-5 sm:p-10 md:col-span-7 md:col-start-6 md:mt-0">
          <p className="pr-20 text-[11px] uppercase tracking-[0.3em] text-ink/70 sm:pr-0 sm:text-center sm:text-[13px]">Parish of Drimoleague · Register of Baptisms · 1842</p>
          <div className="mt-6 overflow-x-auto border-t border-ink/40">
            <div className="min-w-[480px]">
              <div className="grid grid-cols-[70px_1fr_1fr_1.2fr] gap-4 border-b border-ink/20 py-3 text-[13px] uppercase tracking-[0.12em] text-ink/60 sm:grid-cols-[90px_1fr_1fr_1.2fr]">
                <span>Date</span><span>Child</span><span>Parents</span><span>Townland</span>
              </div>
              {[
                ["3 Mar", "Mary Hurley", "Tim & Ellen", "Derreennacno", false],
                ["17 Apr", "Johanna Cronin", "Denis & Kate", "Castletownkenneigh", true],
                ["2 May", "Patk. Regan", "John & Bridget", "Gurteen", false],
              ].map(([d, c, p, t, hl]) => (
                <div key={String(c)} className={`grid grid-cols-[70px_1fr_1fr_1.2fr] gap-4 border-b border-ink/20 py-3 text-[18px] italic last:border-0 sm:grid-cols-[90px_1fr_1fr_1.2fr] ${hl ? "bg-amber/10" : "text-ink/60"}`}>
                  <span>{d}</span><span>{c}</span><span>{p}</span><span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="hand mt-5 text-[22px] text-amber sm:text-[24px]">↳ walls still standing — Ruth Cronin, Philadelphia, stood in the doorway, 2023</p>
          <div aria-hidden className="stamp absolute -top-6 right-4 grid h-[86px] w-[86px] place-items-center bg-ledger text-center text-[10px] font-bold uppercase text-amber sm:right-8">
            Verified<br />51°40′N<br />9°16′W
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${px} grid gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24`}>
        <div className="md:col-span-4">
          <p className={eyebrow}>Questions at the fireside</p>
          <h2 className={`${h2} text-[38px] md:text-[44px]`}>What travellers ask Brede</h2>
          <p className={`mt-5 ${body}`}>Anything not here, ring or WhatsApp — he’d rather talk than write.</p>
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
          <h2 className={`${h2} text-[40px] md:text-[46px]`}>Write to Brede about your journey</h2>
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
