import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getJourney } from "@/lib/journeys";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/journeys/$slug")({
  loader: ({ params }) => {
    const journey = getJourney(params.slug);
    if (!journey) throw notFound();
    return { journey };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.journey.title} — Crystal Tours Ireland` },
          { name: "description", content: loaderData.journey.summary },
          { property: "og:title", content: `${loaderData.journey.title} — Crystal Tours Ireland` },
          { property: "og:description", content: loaderData.journey.summary },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Journey not found — Crystal Tours Ireland" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="px-5 py-24 md:px-14">
      <p className="hand text-[26px] text-amber">This boreen goes nowhere.</p>
      <h1 className="mt-2 text-[44px] font-semibold text-moss">We couldn’t find that journey</h1>
      <Link to="/journeys" className="mt-6 inline-block border-b border-amber pb-1 text-[20px] italic text-moss">See all journeys →</Link>
    </div>
  ),
  component: JourneyPage,
});

function JourneyPage() {
  const { journey: j } = Route.useLoaderData();
  return (
    <article className="px-5 py-12 md:px-14 md:py-20">
      <Link to="/journeys" className="text-[17px] italic text-ink/70 hover:text-amber">← All journeys</Link>
      <div className="mt-8 grid items-end gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <p className="hand -rotate-2 text-[24px] text-amber">{j.length}</p>
          <h1 className="mt-2 text-[46px] font-semibold leading-[0.98] text-ink md:text-[60px]">{j.title}</h1>
          <p className="mt-3 text-[13px] uppercase tracking-[0.18em] text-ink/55">{j.region}</p>
          <p className="mt-6 text-[18px] leading-[1.65] text-ink/80">{j.summary}</p>
          <p className="mt-4 text-[17px] italic text-ink/70">{j.pace}</p>
        </div>
        <figure className="dk -rotate-1 md:col-span-7">
          <img src={j.image} alt={j.title} className="h-[300px] w-full object-cover md:h-[440px]" />
          <figcaption className="hand mt-3 text-[26px]">{j.caption}</figcaption>
        </figure>
      </div>

      <section className="mt-20 grid gap-10 border-t border-ink/20 pt-14 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <p className="text-[16px] italic text-amber">Seanchas</p>
          <h2 className="text-[40px] font-semibold leading-[1.02] text-moss">The route, day by day</h2>
          <p className="hand mt-6 -rotate-1 text-[22px] text-amber">↳ {j.margin}</p>
        </div>
        <ol className="ruled border border-ink/15 bg-notepaper p-6 sm:p-10 md:col-span-7 md:col-start-6">
          {j.days.map((d) => (
            <li key={d.day} className="border-b border-ink/10 py-4 last:border-0">
              <p className="hand text-[24px] text-ink/90"><b className="text-amber">{d.day}</b> — {d.title}</p>
              <p className="mt-1 text-[17px] leading-[1.6] text-ink/75">{d.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 flex flex-col gap-6 border-t border-ink/20 pt-12 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-[28px] font-semibold leading-tight text-moss">Shall Brede redraw this one around your dates?</p>
        <div className="flex flex-wrap items-center gap-6">
          <Link to="/" hash="parlour" className="inline-grid h-12 place-items-center bg-moss px-8 text-[16px] font-semibold tracking-wide text-cream hover:bg-amber">Write to Brede</Link>
          <a href={whatsappLink(`Dia duit Brede, I'm interested in ${j.title} (${j.length}).`)} target="_blank" rel="noreferrer" className="border-b border-amber pb-1 text-[19px] italic text-moss hover:text-amber">Ask on WhatsApp →</a>
        </div>
      </section>
    </article>
  );
}
