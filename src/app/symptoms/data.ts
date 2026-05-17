import {
  Brain,
  Wind,
  Flower2,
  Stethoscope,
  Droplet,
  Hand,
  Activity,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Category } from "./types";

export const categoryLabelsAR: Record<Category, string> = {
  "Head / Nerves": "الرأس / الأعصاب",
  "Chest / Respiratory": "الصدر / الجهاز التنفسي",
  "Allergies / Nasal": "الحساسية / الأنف",
  "Digestive System / Abdomen": "الجهاز الهضمي / البطن",
  "Urinary System": "الجهاز البولي",
  Skin: "الجلد",
  "General / Metabolic": "عام / استقلابي",
};

export const categoryIcons: Record<Category, LucideIcon> = {
  "Head / Nerves": Brain,
  "Chest / Respiratory": Wind,
  "Allergies / Nasal": Flower2,
  "Digestive System / Abdomen": Stethoscope,
  "Urinary System": Droplet,
  Skin: Hand,
  "General / Metabolic": Activity,
};

export const symptomsData: Record<Category, string[]> = {
  "Head / Nerves": [
    "Headache",
    "Migraine",
    "Dizziness",
    "Blurred Vision",
    "Memory Problems",
    "Numbness",
  ],

  "Chest / Respiratory": [
    "Cough",
    "Shortness of Breath",
    "Chest Pain",
    "Wheezing",
    "Sneezing",
    "Runny Nose",
  ],

  "Allergies / Nasal": [
    "Sneezing",
    "Runny Nose",
    "Nasal Congestion",
    "Sinus Pressure",
    "Itchy Eyes",
    "Sore Throat",
  ],

  "Digestive System / Abdomen": [
    "Abdominal Pain",
    "Nausea",
    "Vomiting",
    "Diarrhea",
    "Constipation",
    "Bloating",
  ],

  "Urinary System": [
    "Painful Urination",
    "Frequent Urination",
    "Blood in Urine",
    "Urinary Urgency",
    "Difficulty Urinating",
    "Lower Back Pain",
  ],

  Skin: ["Rash", "Itching", "Dry Skin", "Redness", "Acne", "Swelling"],

  "General / Metabolic": [
    "Fatigue",
    "Fever",
    "Weight Loss",
    "Weakness",
    "Night Sweats",
    "Loss of Appetite",
  ],
};

export const symptomsAR: Record<string, string> = {
  Headache: "صداع",
  Migraine: "صداع نصفي",
  Dizziness: "دوخة",
  "Blurred Vision": "تشوش الرؤية",
  "Memory Problems": "مشاكل في الذاكرة",
  Numbness: "تنميل",
  Cough: "سعال",
  "Shortness of Breath": "ضيق تنفس",
  "Chest Pain": "ألم في الصدر",
  Wheezing: "أزيز",
  Sneezing: "عطس",
  "Runny Nose": "سيلان الأنف",
  "Nasal Congestion": "احتقان الأنف",
  "Sinus Pressure": "ضغط الجيوب",
  "Itchy Eyes": "حكة العين",
  "Sore Throat": "التهاب الحلق",
  "Abdominal Pain": "ألم في البطن",
  Nausea: "غثيان",
  Vomiting: "قيء",
  Diarrhea: "إسهال",
  Constipation: "إمساك",
  Bloating: "انتفاخ",
  "Painful Urination": "ألم عند التبول",
  "Frequent Urination": "تبول متكرر",
  "Blood in Urine": "دم في البول",
  "Urinary Urgency": "إلحاح بولي",
  "Difficulty Urinating": "صعوبة التبول",
  "Lower Back Pain": "ألم أسفل الظهر",
  Rash: "طفح جلدي",
  Itching: "حكة",
  "Dry Skin": "جفاف الجلد",
  Redness: "احمرار",
  Acne: "حب الشباب",
  Swelling: "تورم",
  Fatigue: "إرهاق",
  Fever: "حمى",
  "Weight Loss": "فقدان الوزن",
  Weakness: "ضعف",
  "Night Sweats": "تعرق ليلي",
  "Loss of Appetite": "فقدان الشهية",
};
