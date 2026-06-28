"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { symptomsAR } from "../translations";
export const symptomMap: Record<string, string> = {
  Headache: "headache",
  Dizziness: "dizziness",
  "Blurred Vision": "blurred_and_distorted_vision",
  Cough: "cough",
  "Shortness of Breath": "breathlessness",
  "Chest Pain": "chest_pain",
  Sneezing: "continuous_sneezing",
  "Itchy Eyes": "watering_from_eyes",
  Nausea: "nausea",
  Vomiting: "vomiting",
  Diarrhea: "diarrhoea",
  Bloating: "indigestion",
  "Painful Urination": "burning_micturition",
  "Frequent Urination": "continuous_feel_of_urine",
  "Urinary Urgency": "continuous_feel_of_urine",
  "Difficulty Urinating": "bladder_discomfort",
  Rash: "skin_rash",
  Itching: "itching",
  Fatigue: "fatigue",
  Fever: "high_fever",
  "Night Sweats": "sweating",
  "Runny Nose": "watering_from_eyes",
  "Nasal Congestion": "continuous_sneezing",
  "Sinus Pressure": "headache",
  "Sore Throat": "cough",

  Migraine: "headache",
  "Memory Problems": "lack_of_concentration",
  Numbness: "slurred_speech",

  Wheezing: "breathlessness",

  "Abdominal Pain": "acidity",
  Constipation: "indigestion",

  "Blood in Urine": "foul_smell_of_urine",
  "Lower Back Pain": "bladder_discomfort",

  "Dry Skin": "itching",
  Redness: "skin_rash",
  Acne: "blackheads",
  Swelling: "skin_rash",

  "Weight Loss": "dehydration",
  Weakness: "fatigue",
  "Loss of Appetite": "excessive_hunger",
};

export default function AnalyzingPage() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const isAR = i18n.language.toLowerCase() === "ar";

  const searchParams = useSearchParams();

  const symptoms = useRef(
    JSON.parse(decodeURIComponent(searchParams.get("symptoms") || "[]")),
  ).current;

  const [step, setStep] = useState(0);

  const [progress, setProgress] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    const analyze = async () => {
      try {
        const createChat = await axios.post(
          "https://grating-gravity-legal.ngrok-free.dev/api/chat/create",
          {
            user_id: 1,
          },
        );

        const chatId = createChat.data.chat.id;
        localStorage.setItem("chatId", chatId.toString());

        console.log("Language =", i18n.language);
        const sendMessage = await axios.post(
          "https://grating-gravity-legal.ngrok-free.dev/api/chat/send",
          {
            chat_id: chatId,
            message: symptoms
              .map(
                (symptom: string) =>
                  symptomMap[symptom] ?? symptom.toLowerCase(),
              )
              .join(", "),
            lang: i18n.language.toLowerCase().slice(0, 2),
          },
        );
        console.log("Prediction sent");

        localStorage.setItem(
          "analysisResult",
          JSON.stringify(sendMessage.data),
        );
        localStorage.setItem("analysisSymptoms", JSON.stringify(symptoms));

        setProgress(100);

        router.push("/result");
      } catch (error) {
        console.error("Analysis Error:", error);

        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
        }

        alert(
          isAR
            ? "فشل تحليل الأعراض، حاول مرة أخرى."
            : "Failed to analyze symptoms.",
        );
      }
    };

    const stepsTimer = setInterval(() => {
      setStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 1000);

    const progressTimer = setInterval(() => {
      setProgress((prev) => (prev < 95 ? prev + 1 : prev));
    }, 40);

    analyze();

    return () => {
      clearInterval(stepsTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div
      dir={isAR ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f7fbff] flex flex-col items-center justify-center px-4"
    >
      {/* AI ICON */}
      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl animate-pulse">
        <div className="text-white text-6xl">🧠</div>
      </div>

      {/* TITLE */}
      <h1 className="mt-10 text-5xl font-bold text-[#0f172a] text-center">
        {t("analyzingTitle")}
      </h1>

      {/* SUBTITLE */}
      <p className="mt-4 text-2xl text-slate-500 text-center">
        {t("analyzingSubtitle")}
      </p>

      {/* STEPS */}
      <div className="mt-10 space-y-4 text-lg text-slate-600">
        {step >= 1 && <div>• {t("processingSymptoms")}</div>}

        {step >= 2 && <div>• {t("analyzingPatterns")}</div>}

        {step >= 3 && <div>• {t("generatingInsights")}</div>}
      </div>

      {/* SYMPTOMS CARD */}
      <div className="mt-12 w-full max-w-2xl rounded-3xl bg-white p-8 shadow-xl border border-blue-100">
        <h2 className="text-center text-blue-700 font-bold text-xl mb-6">
          {t("analyzingCard")}
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {symptoms.map((symptom: string, index: number) => (
            <div
              key={index}
              className="rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-medium"
            >
              {isAR ? (symptomsAR[symptom] ?? symptom) : symptom}
            </div>
          ))}
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="mt-10 h-3 w-full max-w-2xl overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-100"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}
