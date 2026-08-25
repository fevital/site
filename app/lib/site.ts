export const basePath = "/seguro-automovel";
export const siteUrl = "https://vital.net.br";
export const canonicalBase = `${siteUrl}${basePath}`;
export const whatsappNumber = "553584149766";
export const companyName = "VITAL CORRETORA DE SEGUROS CONSÓRCIOS E PLANOS DE SAÚDE";
export const susep = "261180251";
export const city = "Monsenhor Paulo";
export const state = "MG";

export function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
