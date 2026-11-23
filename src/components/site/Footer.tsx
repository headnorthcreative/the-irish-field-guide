import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto px-5 pb-10 md:px-14">
      <div className="h-[3px] border-y border-brass bg-brass/70" />
      <div className="flex flex-col gap-5 pt-8 text-[15px] text-ink/70 lg:flex-row lg:items-center lg:justify-between">
        <span className="text-[24px] italic text-moss">Bíodh do thuras go maith</span>
        <span className="self-start border border-ink/40 px-4 py-2 text-[12px] uppercase tracking-[0.18em] lg:self-auto">
          Fáilte Ireland Approved Operator · No. 2287
        </span>
        <span>
          <a href={`mailto:${EMAIL}`} className="hover:text-amber">{EMAIL}</a> · Kenmare, Co. Kerry
          <a href={`tel:${PHONE_TEL}`} className="block hover:text-amber lg:hidden">{PHONE_DISPLAY}</a>
        </span>
      </div>
      <p className="mt-6 text-[13px] text-ink/50">© {new Date().getFullYear()} Crystal Tours Ireland. Private chauffeured touring from Kenmare.</p>
    </footer>
  );
}
