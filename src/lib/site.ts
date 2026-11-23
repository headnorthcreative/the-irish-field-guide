export const PHONE_DISPLAY = "+353 83 091 0057";
export const PHONE_TEL = "+353830910057";
export const WHATSAPP_NUMBER = "353830910057";
export const EMAIL = "brede@crystaltours.ie";

export function whatsappLink(text = "Dia duit Brede, I'd love to talk about a private tour of Ireland.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
