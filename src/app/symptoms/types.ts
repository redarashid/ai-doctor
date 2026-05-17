export type Lang = "EN" | "AR";

export const categoriesEN = [
  "Head / Nerves",
  "Chest / Respiratory",
  "Allergies / Nasal",
  "Digestive System / Abdomen",
  "Urinary System",
  "Skin",
  "General / Metabolic",
] as const;

export type Category = (typeof categoriesEN)[number];
