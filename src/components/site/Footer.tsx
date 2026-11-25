import { PHONE_DISPLAY, PHONE_TEL, SOCIALS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="wrap mt-auto pb-10">
      <div className="h-[3px] border-y border-brass bg-brass/70" />
      <div className="flex flex-col gap-5 pt-8 text-[15px] text-ink/70 lg:flex-row lg:items-center lg:justify-between">
        <span className="text-[24px] italic text-moss">Crafting unforgettable Irish dreams</span>
        <span className="flex flex-wrap gap-x-5 gap-y-1 italic">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-amber">{s.label}</a>
          ))}
        </span>
        <a href={`tel:${PHONE_TEL}`} className="hover:text-amber">Call us {PHONE_DISPLAY}</a>
      </div>
      <p className="mt-6 text-[13px] text-ink/50">© {new Date().getFullYear()} Crystal Tours Ireland. Luxury private tours & chauffeur services. <span className="italic">Bíodh do thuras go maith.</span></p>
    </footer>
  );
}
