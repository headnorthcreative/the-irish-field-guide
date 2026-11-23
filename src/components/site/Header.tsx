import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const nav = [
  { label: "Field Guide", to: "/", hash: "seanchas" },
  { label: "Journeys & Lore", to: "/journeys" },
  { label: "Meet Brede", to: "/", hash: "brede" },
  { label: "Ancestral Search", to: "/", hash: "ancestry" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 lin border-b-2 border-double border-ink/30">
      <div className="flex justify-between px-5 pt-3 text-[13px] italic text-ink/60 md:px-14">
        <span>Fáilte • Céad Míle Fáilte</span>
        <span className="hidden sm:inline">The Irish Field Guide</span>
      </div>
      <div className="flex h-[64px] items-center gap-4 px-5 md:px-14 lg:gap-10">
        <Link to="/" className="min-w-0 truncate text-[16px] font-bold tracking-[0.22em] text-moss sm:text-[20px]">
          CRYSTAL TOURS <span className="text-amber">•</span> IRELAND
        </Link>
        <div aria-hidden className="stamp hidden h-[58px] w-[58px] shrink-0 place-items-center text-center text-[10px] font-bold uppercase leading-tight text-amber sm:grid">
          Co. Kerry<br />52°N
        </div>
        <nav className="ml-4 hidden gap-8 text-[16px] text-ink/75 lg:flex">
          {nav.map((n) => (
            <Link key={n.label} to={n.to} {...("hash" in n ? { hash: n.hash } : {})} className="hover:text-amber">
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={`tel:${PHONE_TEL}`} className="ml-auto hidden shrink-0 text-[19px] italic text-moss hover:text-amber md:inline">
          {PHONE_DISPLAY}
        </a>
        <button
          className="ml-auto shrink-0 p-2 text-moss md:ml-0 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-ink/20 px-5 pb-6 pt-2 text-[22px] text-ink lg:hidden md:px-14">
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
