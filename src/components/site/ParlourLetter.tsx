import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { DESTINATIONS, MAX_PARTY, stepErrors, whatsappSummary } from "@/lib/inquiry";
import { whatsappLink } from "@/lib/site";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

type V = {
  travel_dates: string;
  party_size: number;
  destinations: string[];
  ancestry_search: boolean;
  ancestry_notes: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initial: V = {
  travel_dates: "",
  party_size: 2,
  destinations: [],
  ancestry_search: false,
  ancestry_notes: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

const steps = ["Your dates", "Where & who", "Sign the letter"];

const label = "text-[12px] uppercase tracking-[0.18em] text-ink/55";
const field =
  "hand mt-1 w-full border-0 border-b border-ink/30 bg-transparent pb-1 text-[26px] text-ink/85 placeholder:text-ink/35 focus:border-amber focus:outline-none";

function Err({ msg }: { msg?: string | undefined }) {
  return msg ? <p className="mt-1 text-[15px] italic text-destructive" role="alert">{msg}</p> : null;
}

export function ParlourLetter() {
  const [v, setV] = useState<V>(initial);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const [sent, setSent] = useState<V | null>(null);

  const set = <K extends keyof V>(k: K, val: V[K]) => {
    setV((p) => ({ ...p, [k]: val }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const next = () => {
    const e = stepErrors(step, v);
    setErrors(e);
    if (Object.keys(e).length === 0) setStep((s) => s + 1);
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (step < 2) return next();
    const e = stepErrors(2, v);
    setErrors(e);
    if (Object.keys(e).length) return;
    setSending(true);
    setSendError(null);
    const { error } = await supabase.from("journey_inquiries").insert({
      name: v.name.trim(),
      email: v.email.trim(),
      phone: v.phone.trim() || null,
      travel_dates: v.travel_dates.trim(),
      party_size: v.party_size,
      destinations: v.destinations,
      ancestry_search: v.ancestry_search,
      ancestry_notes: v.ancestry_notes.trim() || null,
      message: v.message.trim() || null,
    });
    setSending(false);
    if (error) {
      setSendError("The letter didn’t reach Brede just now. Please try again, or send it on WhatsApp.");
      return;
    }
    setSent(v);
    setV(initial);
    setStep(0);
  };

  const toggleDest = (d: string) =>
    set("destinations", v.destinations.includes(d) ? v.destinations.filter((x) => x !== d) : [...v.destinations, d]);

  return (
    <>
      <form onSubmit={submit} noValidate className="space-y-8 border border-ink/20 bg-paper p-6 sm:p-12">
        <div className="flex items-baseline justify-between gap-4">
          <p className="hand text-[28px]">A chara Brede,</p>
          <p className="text-[13px] italic text-ink/55">
            Page {step + 1} of 3 · {steps[step]}
          </p>
        </div>

        {step === 0 && (
          <>
            <div>
              <label htmlFor="dates" className={label}>We hope to travel</label>
              <input id="dates" className={field} placeholder="12 – 19 September, the two of us" value={v.travel_dates} onChange={(e) => set("travel_dates", e.target.value)} />
              <Err msg={errors["travel_dates"]} />
            </div>
            <div>
              <label htmlFor="party" className={label}>How many in the party</label>
              <div className="mt-2 flex items-center gap-4">
                <button type="button" aria-label="One fewer" className="hand h-10 w-10 border border-ink/30 text-[26px] hover:border-amber" onClick={() => set("party_size", Math.max(1, v.party_size - 1))}>−</button>
                <input id="party" inputMode="numeric" className="hand w-14 border-0 border-b border-ink/30 bg-transparent text-center text-[28px] focus:outline-none" value={v.party_size} onChange={(e) => set("party_size", Number(e.target.value.replace(/\D/g, "")) || 0)} />
                <button type="button" aria-label="One more" className="hand h-10 w-10 border border-ink/30 text-[26px] hover:border-amber" onClick={() => set("party_size", Math.min(MAX_PARTY, v.party_size + 1))}>+</button>
                <span className="text-[15px] italic text-ink/60">up to {MAX_PARTY} in the V-Class</span>
              </div>
              <Err msg={errors["party_size"]} />
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <fieldset>
              <legend className={label}>Dream destinations</legend>
              <div className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {DESTINATIONS.map((d) => (
                  <label key={d} className="flex cursor-pointer items-center gap-3 text-[19px]">
                    <input type="checkbox" className="size-4 accent-[var(--moss)]" checked={v.destinations.includes(d)} onChange={() => toggleDest(d)} />
                    <span className={v.destinations.includes(d) ? "text-moss" : "text-ink/75"}>{d}</span>
                  </label>
                ))}
              </div>
              <Err msg={errors["destinations"]} />
            </fieldset>
            <label className="flex cursor-pointer items-start gap-3 text-[19px]">
              <input type="checkbox" className="mt-1.5 size-4 accent-[var(--moss)]" checked={v.ancestry_search} onChange={(e) => set("ancestry_search", e.target.checked)} />
              <span>Please search the parish registers for my family before we land.</span>
            </label>
            {v.ancestry_search && (
              <div>
                <label htmlFor="anc" className={label}>Ancestral names &amp; places</label>
                <input id="anc" className={field} placeholder="Cronin, Co. Cork… Grandmother’s parish in Mayo" value={v.ancestry_notes} onChange={(e) => set("ancestry_notes", e.target.value)} />
              </div>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label htmlFor="msg" className={label}>Anything else Brede should know</label>
              <textarea id="msg" rows={3} className={`${field} resize-none ruled leading-[40px]`} placeholder="A milestone birthday, a bad knee, a love of trad music…" value={v.message} onChange={(e) => set("message", e.target.value)} />
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={label}>Le meas, your name</label>
                <input id="name" autoComplete="name" className={field} value={v.name} onChange={(e) => set("name", e.target.value)} />
                <Err msg={errors["name"]} />
              </div>
              <div>
                <label htmlFor="email" className={label}>Email for Brede’s reply</label>
                <input id="email" type="email" autoComplete="email" className={field} value={v.email} onChange={(e) => set("email", e.target.value)} />
                <Err msg={errors["email"]} />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className={label}>Phone or WhatsApp (optional)</label>
              <input id="phone" type="tel" autoComplete="tel" className={field} value={v.phone} onChange={(e) => set("phone", e.target.value)} />
            </div>
          </>
        )}

        {sendError && <p className="text-[16px] italic text-destructive" role="alert">{sendError}</p>}

        <div className="flex flex-wrap items-center gap-6">
          <button
            type="submit"
            disabled={sending}
            className="inline-grid h-12 place-items-center rounded-[var(--radius)] bg-moss px-8 text-[16px] font-semibold tracking-wide text-cream hover:bg-amber disabled:opacity-60"
          >
            {step < 2 ? "Turn the page →" : sending ? "Posting…" : "Post the letter to Brede"}
          </button>
          {step > 0 && (
            <button type="button" onClick={() => setStep((s) => s - 1)} className="text-[17px] italic text-ink/70 hover:text-amber">
              ← Back a page
            </button>
          )}
        </div>
      </form>

      <Dialog open={!!sent} onOpenChange={(o) => !o && setSent(null)}>
        <DialogContent className="lin max-w-lg rounded-none border border-ink/30">
          <div aria-hidden className="stamp absolute right-8 top-6 grid h-[78px] w-[78px] place-items-center text-center text-[10px] font-bold uppercase leading-tight text-amber">
            Posted<br />Kenmare<br />52°08′N
          </div>
          <DialogTitle className="pr-24 text-[36px] font-semibold leading-tight text-moss">Go raibh maith agat{sent ? `, ${sent.name.split(" ")[0]}` : ""}.</DialogTitle>
          <DialogDescription className="text-[18px] leading-[1.6] text-ink/80">
            Your letter is on Brede’s table. She replies personally, usually within a day, with a first sketch of the route
            {sent?.ancestry_search ? " and a note on where the parish search will begin" : ""}.
          </DialogDescription>
          {sent && (
            <p className="hand text-[22px] text-amber">
              ↳ {sent.travel_dates} · {sent.party_size} {sent.party_size === 1 ? "traveller" : "travellers"} · {sent.destinations.join(", ")}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            {sent && (
              <a href={whatsappLink(whatsappSummary(sent))} target="_blank" rel="noreferrer" className="inline-grid h-12 place-items-center bg-moss px-6 text-[16px] font-semibold text-cream hover:bg-amber">
                Say hello on WhatsApp
              </a>
            )}
            <button onClick={() => setSent(null)} className="text-[17px] italic text-ink/70 hover:text-amber">Close the letter</button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
