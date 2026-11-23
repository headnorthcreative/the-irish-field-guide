import { createFileRoute, Link } from "@tanstack/react-router";
import { journeys } from "@/lib/journeys";

export const Route = createFileRoute("/journeys/")({
  head: () => ({
    meta: [
      { title: "Journeys & Lore — Crystal Tours Ireland" },
      { name: "description", content: "Curated luxury private tours: the Ring of Kerry, Galway and the Cliffs of Moher, Cork and Cobh, Wicklow and Kilkenny, or a bespoke tour." },
      { property: "og:title", content: "Journeys & Lore — Crystal Tours Ireland" },
      { property: "og:description", content: "Curated private tours of Ireland, each one adjusted to suit you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Journeys,
});

function Journeys() {
  return (
    <div className="px-5 py-16 md:px-14 md:py-24">
      <p className="text-[16px] italic text-amber">Journeys & Lore</p>
      <h1 className="max-w-3xl text-[44px] font-semibold leading-[1] text-moss md:text-[58px]">Routes drawn in pencil, never in ink</h1>
      <p className="mt-6 max-w-xl text-[18px] leading-[1.65] text-ink/80">Every tour is private to your party — we never combine groups — and each one can be adjusted to your interests, your pace and your stops.</p>
      <div className="mt-16 space-y-20">
        {journeys.map((j, i) => (
          <article key={j.slug} className="grid items-center gap-10 border-t border-ink/20 pt-12 md:grid-cols-12 md:gap-12">
            <Link to="/journeys/$slug" params={{ slug: j.slug }} className={`dk block md:col-span-5 ${i % 2 ? "md:order-2 md:col-start-8 rotate-1" : "-rotate-1"}`}>
              <img src={j.image} alt={j.title} loading="lazy" className="h-[280px] w-full object-cover md:h-[340px]" />
              <p className="hand mt-3 text-[26px]">{j.caption}</p>
            </Link>
            <div className={`md:col-span-6 ${i % 2 ? "md:order-1" : "md:col-start-7"}`}>
              <p className="text-[13px] uppercase tracking-[0.18em] text-ink/55">{j.region} · {j.length}</p>
              <h2 className="mt-2 text-[38px] font-semibold leading-[1.05] text-moss">{j.title}</h2>
              <p className="mt-4 text-[18px] leading-[1.65] text-ink/80">{j.summary}</p>
              <p className="hand mt-4 text-[22px] text-amber">↳ {j.margin}</p>
              <Link to="/journeys/$slug" params={{ slug: j.slug }} className="mt-6 inline-block border-b border-amber pb-1 text-[20px] italic text-moss hover:text-amber">See the route →</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
