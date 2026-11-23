export const PHONE_DISPLAY = "+353 83 091 0057";
export const PHONE_TEL = "+353830910057";
export const WHATSAPP_NUMBER = "353830910057";
export const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/CrystalToursIreland/" },
  { label: "Instagram", href: "https://www.instagram.com/crystaltoursireland/" },
  { label: "Tripadvisor", href: "https://www.tripadvisor.ie/Attraction_Review-g186638-d33054246-Reviews-Crystal_Tours_Ireland-Waterford_County_Waterford.html" },
] as const;

export function whatsappLink(text = "Dia duit Brede, I'd love to talk about a private tour of Ireland.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
