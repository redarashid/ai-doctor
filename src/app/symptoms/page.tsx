"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Brain,
  Wind,
  Flower2,
  Stethoscope,
  Droplet,
  Hand,
  Activity,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AIDoctorHeader from "../symptoms/AIDoctorHeader";

type Lang = "EN" | "AR";

interface SymptomsPageProps {
  lang?: Lang;
}

const categoriesEN = [
  "Head / Nerves",
  "Chest / Respiratory",
  "Allergies / Nasal",
  "Digestive System / Abdomen",
  "Urinary System",
  "Skin",
  "General / Metabolic",
] as const;

const categoryLabelsAR: Record<(typeof categoriesEN)[number], string> = {
  "Head / Nerves": "الرأس / الأعصاب",
  "Chest / Respiratory": "الصدر / الجهاز التنفسي",
  "Allergies / Nasal": "الحساسية / الأنف",
  "Digestive System / Abdomen": "الجهاز الهضمي / البطن",
  "Urinary System": "الجهاز البولي",
  Skin: "الجلد",
  "General / Metabolic": "عام / استقلابي",
};

const categoryIcons: Record<(typeof categoriesEN)[number], LucideIcon> = {
  "Head / Nerves": Brain,
  "Chest / Respiratory": Wind,
  "Allergies / Nasal": Flower2,
  "Digestive System / Abdomen": Stethoscope,
  "Urinary System": Droplet,
  Skin: Hand,
  "General / Metabolic": Activity,
};

const symptomsData: Record<(typeof categoriesEN)[number], string[]> = {
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

const symptomsAR: Record<string, string> = {
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

export default function SymptomsPage() {
  const [lang, setLang] = useState<"EN" | "AR">("EN");

  const isAR = lang === "AR";

  const [selectedCategory, setSelectedCategory] = useState<
    (typeof categoriesEN)[number] | ""
  >("");

  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [chatId, setChatId] = useState<string | null>(null);

  const filteredSymptoms = useMemo(() => {
    if (!selectedCategory) return [];

    return symptomsData[selectedCategory].filter((s) =>
      s.toLowerCase().includes(search.toLowerCase()),
    );
  }, [selectedCategory, search]);

  const handleSymptomSelect = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom],
    );
  };

  const clearAll = () => {
    setSelectedSymptoms([]);
    setSearch("");
  };

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      let currentChatId = chatId;

      if (!currentChatId) {
        const createChatRes = await fetch(
          "http://grating-gravity-legal.ngrok-free.dev/api/chat/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        const createChatData = await createChatRes.json();

        currentChatId =
          createChatData.chatId ||
          createChatData.id ||
          createChatData.chat?._id;

        setChatId(currentChatId);
      }

      const symptomsText = selectedSymptoms.join(", ");

      const sendRes = await fetch(
        "http://grating-gravity-legal.ngrok-free.dev/api/chat/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chatId: currentChatId,
            message: `Patient symptoms: ${symptomsText}`,
          }),
        },
      );

      const sendData = await sendRes.json();

      setAiResponse(
        sendData.reply ||
          sendData.message ||
          sendData.response ||
          "No response",
      );
    } catch (error) {
      console.error(error);
      setAiResponse("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const tr = (s: string) => (isAR ? (symptomsAR[s] ?? s) : s);

  const trCat = (c: (typeof categoriesEN)[number]) =>
    isAR ? categoryLabelsAR[c] : c;

  const t = {
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
  };

  return (
    <div
      dir={isAR ? "rtl" : "ltr"}
      className="min-h-screen pt-0 pl-0 pr-0 bg-[#f8fbff] px-4 py-6">
      <AIDoctorHeader lang={lang} setLang={setLang} />

      <div className="mx-auto max-w-4xl">
        <div className="mb-6 text-center">
          <h1 className="text-2xl pt-10 font-bold text-[#111827] md:text-3xl">
            {t.selectCategory}
          </h1>

          <p className="mb-3 mt-2 text-lg font-semibold text-blue-600 md:text-xl">
            {t.describe}
          </p>

          <p className="text-sm text-gray-500">{t.chooseSystem}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {categoriesEN.map((category) => {
            const Icon = categoryIcons[category];

            const active = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedSymptoms([]);
                  setSearch("");
                }}
                className={
                  "flex min-h-[120px] items-center rounded-[22px] border bg-white p-5 text-start transition-all duration-300 " +
                  (active
                    ? "scale-[1.01] border-blue-500 bg-blue-50 shadow-sm"
                    : "border-gray-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-sm")
                }>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-50 p-2">
                    <Icon className="size-6 text-blue-500" />
                  </div>

                  <h2 className="text-[20px] font-semibold text-[#111827]">
                    {trCat(category)}
                  </h2>
                </div>
              </button>
            );
          })}
        </div>

        {selectedCategory && (
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#111827] md:text-2xl">
                  {t.selectSymptoms}
                </h2>

                <p className="text-xs text-gray-500">
                  {t.relatedTo} {trCat(selectedCategory)}
                </p>
              </div>

              {selectedSymptoms.length > 0 && (
                <button
                  onClick={clearAll}
                  className="text-xs font-medium text-blue-600 hover:underline">
                  {t.clearAll}
                </button>
              )}
            </div>

            <div className="relative mb-5">
              <Search
                className={
                  "absolute top-1/2 size-4 -translate-y-1/2 text-gray-400 " +
                  (isAR ? "right-4" : "left-4")
                }
              />

              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={
                  "h-[50px] w-full rounded-2xl border border-gray-200 bg-white text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 " +
                  (isAR ? "pl-4 pr-12" : "pl-12 pr-4")
                }
              />
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {filteredSymptoms.map((symptom) => {
                const active = selectedSymptoms.includes(symptom);

                return (
                  <button
                    key={symptom}
                    onClick={() => handleSymptomSelect(symptom)}
                    className={
                      "rounded-2xl border px-4 py-3 text-start text-base font-medium transition-all duration-200 " +
                      (active
                        ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
                        : "border-gray-200 bg-white text-[#111827] hover:border-blue-300 hover:bg-blue-50 hover:-translate-y-1")
                    }>
                    {tr(symptom)}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleAnalyze}
              disabled={selectedSymptoms.length === 0 || loading}
              className={
                "mt-7 h-[56px] w-full rounded-2xl text-base font-semibold text-white transition-all duration-300 " +
                (selectedSymptoms.length > 0
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 hover:shadow-lg hover:scale-[1.01]"
                  : "cursor-not-allowed bg-gray-300")
              }>
              {loading
                ? isAR
                  ? "جاري التحليل..."
                  : "Analyzing..."
                : `${t.analyze} (${selectedSymptoms.length})`}
            </button>

            {aiResponse && (
              <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4">
                <h3 className="mb-2 text-lg font-bold text-green-700">
                  {isAR ? "نتيجة التحليل" : "AI Analysis"}
                </h3>

                <p className="text-sm leading-7 text-gray-700">{aiResponse}</p>
              </div>
            )}

            <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
              <p className="text-[13px] leading-6 text-[#334155]">
                <span className="font-bold text-blue-700">{t.note}</span>{" "}
                {t.noteText}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
