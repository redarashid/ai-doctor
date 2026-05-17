import { categoryLabelsAR, symptomsAR } from "./data";
import type { Category } from "./types";

export const getTranslations = (isAR: boolean) => ({
  selectCategory: isAR ? "اختر فئة المرض" : "Select Disease Category",

  describe: isAR ? "صف أعراضك" : "Describe Your Symptoms",

  chooseSystem: isAR
    ? "اختر الجهاز الأكثر ارتباطًا بأعراضك"
    : "Choose the body system most related to your symptoms",

  selectSymptoms: isAR ? "اختر الأعراض" : "Select Symptoms",

  relatedTo: isAR ? "الأعراض المتعلقة بـ" : "Choose symptoms related to",

  clearAll: isAR ? "مسح الكل" : "Clear All",

  searchPlaceholder: isAR ? "ابحث عن الأعراض..." : "Search symptoms...",

  analyze: isAR ? "تحليل الأعراض" : "Analyze Symptoms",

  note: isAR ? "ملاحظة:" : "Note:",

  noteText: isAR
    ? "كلما قدمت أعراضًا أكثر، كانت نتائج تحليل الذكاء الاصطناعي أكثر دقة."
    : "The more symptoms you provide, the more accurate our AI analysis will be.",
});

export const translateSymptom = (s: string, isAR: boolean) =>
  isAR ? (symptomsAR[s] ?? s) : s;

export const translateCategory = (c: Category, isAR: boolean) =>
  isAR ? categoryLabelsAR[c] : c;
