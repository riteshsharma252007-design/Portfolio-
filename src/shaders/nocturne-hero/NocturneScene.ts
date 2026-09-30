export const NOCTURNE_VARIANTS = ["midnight", "eclipse", "aurora", "solstice"] as const;
export type NocturneVariant = (typeof NOCTURNE_VARIANTS)[number];
export const NOCTURNE_TITLES: Record<NocturneVariant, string> = {
  midnight: "Midnight",
  eclipse: "Eclipse",
  aurora: "Aurora",
  solstice: "Solstice",
};
export function buildNocturneDocument(variant: NocturneVariant): string { return ""; }
