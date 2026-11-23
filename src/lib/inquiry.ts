import { z } from "zod";

export const DESTINATIONS = [
  "The Ring of Kerry",
  "Galway, Cliffs of Moher & the Burren",
  "Cork, Kinsale, Midleton & Cobh",
  "Wicklow & Kilkenny",
  "Golf, shopping or ancestry",
  "Not sure yet — advise me",
] as const;

export const MAX_PARTY = 7; // largest party the online letter accepts; bigger groups ring

export const stepSchemas = [
  z.object({
    travel_dates: z.string().trim().min(3, "Tell Brede roughly when you hope to travel").max(200),
    party_size: z.coerce.number().int().min(1, "At least one traveller").max(MAX_PARTY, `For more than ${MAX_PARTY} guests, please ring us`),
  }),
  z.object({
    destinations: z.array(z.string()).min(1, "Choose at least one place, or ‘Not sure yet’"),
    ancestry_search: z.boolean(),
    ancestry_notes: z.string().trim().max(1000).optional(),
  }),
  z.object({
    name: z.string().trim().min(1, "Please sign with your name").max(120),
    email: z.string().trim().email("That email doesn’t look quite right").max(255),
    phone: z.string().trim().max(40).optional(),
    message: z.string().trim().max(2000).optional(),
  }),
] as const;

export const inquirySchema = stepSchemas[0].merge(stepSchemas[1]).merge(stepSchemas[2]);
export type Inquiry = z.infer<typeof inquirySchema>;

export function stepErrors(step: number, values: Record<string, unknown>) {
  const res = stepSchemas[step]!.safeParse(values);
  if (res.success) return {} as Record<string, string>;
  const out: Record<string, string> = {};
  for (const issue of res.error.issues) {
    const k = String(issue.path[0]);
    if (!out[k]) out[k] = issue.message;
  }
  return out;
}

export function whatsappSummary(v: Pick<Inquiry, "name" | "travel_dates" | "party_size" | "destinations">) {
  return `Dia duit Brede, this is ${v.name}. I've just posted a letter on your site: ${v.travel_dates}, ${v.party_size} of us, hoping for ${v.destinations.join(", ")}.`;
}
