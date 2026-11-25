import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { CrystalToursLogo } from "@/components/site/CrystalToursLogo";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Field Guide", to: "/", hash: "services" },
  { label: "Journeys & Lore", to: "/journeys" },
  { label: "Meet Brede", to: "/", hash: "brede" },
  { label: "Questions", to: "/", hash: "faq" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 lin border-b-2 border-double border-ink/30">
      <div className="wrap flex justify-between pt-3 text-[13px] italic text-ink/60">
        <span>Fáilte • Céad Míle Fáilte</span>
        <span className="hidden sm:inline">The Irish Field Guide</span>
      </div>
      <div className="wrap flex h-[72px] items-center gap-4 lg:gap-6">
        <Link to="/" className="shrink-0" aria-label="Crystal Tours Ireland — home">
          <CrystalToursLogo className="h-[44px] w-auto sm:h-[52px]" />
        </Link>
        <div aria-hidden className="stamp hidden h-[58px] w-[58px] shrink-0 place-items-center text-center text-[10px] font-bold uppercase leading-tight text-amber sm:grid">
          Co. Waterford<br />52°N
        </div>
        <nav aria-label="Main navigation" className="hidden h-full min-w-0 flex-1 items-center justify-center gap-6 text-[16px] text-ink/75 lg:flex xl:gap-8">
          {nav.map((n) => (
            <Link key={n.label} to={n.to} {...("hash" in n ? { hash: n.hash } : {})} className="inline-flex h-full items-center whitespace-nowrap hover:text-amber">
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={`tel:${PHONE_TEL}`} className="ml-auto hidden shrink-0 text-[19px] italic text-moss hover:text-amber md:inline">
          {PHONE_DISPLAY}
        </a>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto shrink-0 text-moss md:ml-0 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>
      {open && (
        <nav className="wrap border-t border-ink/20 pb-6 pt-2 text-[22px] text-ink lg:hidden">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              {...("hash" in n ? { hash: n.hash } : {})}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/10 py-3 hover:text-amber"
            >
              {n.label}
            </Link>
          ))}
          <a href={`tel:${PHONE_TEL}`} className="mt-4 block italic text-moss">{PHONE_DISPLAY}</a>
        </nav>
      )}
    </header>
  );
}
