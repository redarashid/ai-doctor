"use client";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useRef } from "react";
export default function ResultPage() {
  const { t, i18n } = useTranslation();
  console.log("Language =", i18n.language);
  const router = useRouter();
  const stored =
    typeof window !== "undefined"
      ? localStorage.getItem("analysisResult")
      : null;

  const data = stored ? JSON.parse(stored) : null;
  console.log(data);

  const prediction = data?.prediction?.predictions?.[0];

  const disease = prediction?.disease || "Unknown";

  const confidence = prediction?.confidence || 0;

  const severity = prediction?.severity || "Unknown";

  const description = prediction?.description || "";

  const precautions = prediction?.precautions || [];
  const causes = prediction?.causes || [];
  const validSymptoms = data?.prediction?.valid_symptoms || [];
  const invalidSymptoms = data?.prediction?.invalid_symptoms || [];

  const doctor = prediction?.doctor || "";

  const [translatedDescription, setTranslatedDescription] =
    useState(description);

  const [translatedPrecautions, setTranslatedPrecautions] = useState<string[]>(
    [],
  );

  const translatedOnce = useRef(false);

  useEffect(() => {
    if (i18n.language !== "ar") {
      translatedOnce.current = false;
      setTranslatedDescription(description);
      setTranslatedPrecautions(precautions);
      return;
    }

    if (translatedOnce.current) return;

    translatedOnce.current = true;

    const translateText = async (text: string) => {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          target: "ar",
        }),
      });

      const result = await res.json();

      return result.translated || text;
    };

    const run = async () => {
      const desc = await translateText(description);

      const translated = await Promise.all(
        precautions.map((p: string) => translateText(p)),
      );

      setTranslatedDescription(desc);
      setTranslatedPrecautions(translated);
    };

    run();
  }, [i18n.language]);

  const changeLang = async (lang: "en" | "ar") => {
    await i18n.changeLanguage(lang);

    const symptoms = JSON.parse(
      localStorage.getItem("analysisSymptoms") || "[]",
    );
    console.log("Changing to", lang);

    router.push(
      `/analyzing?symptoms=${encodeURIComponent(JSON.stringify(symptoms))}`,
    );
  };
  return (
    <div className="min-h-screen bg-[#f7fbff]">
      {/* HEADER */}
      <div className="border-b border-[#dbe4f0] bg-white">
        <div className="mx-auto flex h-[88px] max-w-[1150px] items-center justify-between px-6">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-[18px] font-medium text-[#475569] transition hover:text-black"
          >
            <span>←</span>
            <span>{t("backToHome")}</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white text-xl shadow-md">
              ⚕️
            </div>

            <div>
              <h1 className="text-[20px] font-bold leading-none text-[#0f172a]">
                AI Doctor
              </h1>

              <p className="mt-1 text-[14px] text-[#64748b]">
                {t("analysisResults")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-2xl border border-[#dbe4f0] bg-white p-1">
              <button
                onClick={() => {
                  console.log("EN button clicked");
                  changeLang("en");
                }}
                className={`flex items-center gap-2 rounded-xl px-5 py-2 shadow-sm ${
                  i18n.language === "en"
                    ? "bg-gradient-to-r from-[#2563eb] to-[#0891b2] text-white"
                    : "text-[#475569]"
                }`}
              >
                <span>🌐</span>
                <span className="font-medium">EN</span>
              </button>

              <button
                onClick={() => {
                  console.log("AR button clicked");
                  changeLang("ar");
                }}
                className={`flex items-center gap-2 rounded-xl px-5 py-2 ${
                  i18n.language === "ar"
                    ? "bg-gradient-to-r from-[#2563eb] to-[#0891b2] text-white"
                    : "text-[#475569]"
                }`}
              >
                <span>🌐</span>
                <span className="font-medium">AR</span>
              </button>
            </div>

            <button className="rounded-[14px] border border-[#bfdbfe] px-7 py-3 text-[17px] font-medium text-[#2563eb] transition hover:bg-blue-50">
              {t("startNewAnalysis")}
            </button>
          </div>
        </div>
      </div>

      {/* SUCCESS CARD */}

      <div className="mx-auto mt-10 w-full max-w-[1060px] rounded-[24px] border border-[#9ae6b4] bg-[#f0fff4] px-6 py-5 shadow-sm">
        <div className="flex items-start gap-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#22c55e] text-2xl text-white">
            ✓
          </div>

          <div>
            <h2 className="text-[28px] font-bold text-[#166534]">
              {t("analysisComplete")}
            </h2>

            <p className="mt-2 max-w-[780px] text-[18px] leading-8 text-[#166534]">
              {t("analysisSummary")}
            </p>
          </div>
        </div>
      </div>

      {/* ANALYZED SYMPTOMS */}
      <div className="mx-auto mt-8 w-full max-w-[1060px] rounded-[24px] border border-[#dbeafe] bg-white px-8 py-7 shadow-sm">
        ...
      </div>

      {/* MOST LIKELY OUTCOME */}
      <div className="mx-auto mt-8 w-full max-w-[1060px] rounded-[28px] border border-[#bfdbfe] bg-white px-8 py-8 shadow-sm">
        {/* TOP */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-2xl text-white">
            🩺
          </div>

          <div>
            <h2 className="text-[20px] font-bold text-[#0f172a]">
              {t("mostLikelyOutcome")}
            </h2>

            <p className="mt-1 text-[16px] text-[#64748b]">
              {t("basedOnSymptoms")}
            </p>
          </div>
        </div>

        {/* TITLE */}
        <div className="mt-8 flex items-center gap-4">
          <h1 className="text-[48px] font-bold leading-tight text-[#0f172a]">
            {disease}
          </h1>

          <div className="rounded-full bg-[#dcfce7] px-4 py-2 text-[18px] font-semibold text-[#16a34a]">
            {severity}
          </div>
        </div>

        {/* SCORE */}
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[18px] font-medium text-[#0f172a]">
              {t("confidence")}
            </span>

            <span className="text-[20px] font-bold text-[#0f172a]">
              {confidence}%
            </span>
          </div>

          {/* BAR */}
          <div className="h-4 overflow-hidden rounded-full bg-[#e2e8f0]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
              style={{ width: `${confidence}%` }}
            />
          </div>
        </div>

        {/* INFO BOX */}
        <div className="mt-8 rounded-2xl border border-[#bfdbfe] bg-[#eff6ff] px-6 py-5">
          <p className="text-[17px] leading-8 text-[#1e40af]">
            {translatedDescription}
          </p>
        </div>
      </div>

      {/* AI HEALTH ANALYSIS */}
      <div className="mx-auto mt-8 w-full max-w-[1060px] rounded-[28px] bg-white px-8 py-8 shadow-sm">
        {/* TOP */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dbeafe] text-3xl text-[#2563eb]">
            🩺
          </div>

          <h2 className="text-[36px] font-bold text-[#0f172a]">
            {t("aiHealthAnalysis")}
          </h2>
        </div>

        {/* CONTENT */}
        <div className="mt-10 space-y-8 text-[22px] leading-[48px] text-[#334155]">
          <p>{translatedDescription}</p>
        </div>
      </div>
      {/* CAUSES */}
      <div className="mx-auto mt-8 w-full max-w-[1080px] rounded-[24px] border border-[#e2e8f0] bg-white px-[34px] py-[38px] shadow-sm">
        {/* HEADER */}
        <div className="flex items-center gap-5">
          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-[#fef3c7]">
            <span className="text-[26px]">🧬</span>
          </div>

          <h2 className="text-[22px] font-bold text-[#0f172a]">
            {t("possibleCauses")}
          </h2>
        </div>

        {/* LIST */}
        <div className="mt-8 flex flex-col gap-6">
          {causes.map((item: string, index: number) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-[22px] text-[#f59e0b]">•</span>

              <span className="text-[17px] text-[#334155]">{item}</span>
            </div>
          ))}
        </div>
      </div>
      {/* VALID SYMPTOMS */}
      {validSymptoms.length > 0 && (
        <div className="mx-auto mt-8 w-full max-w-[1080px] rounded-[24px] border border-[#e2e8f0] bg-white px-[34px] py-[38px] shadow-sm">
          {/* HEADER */}
          <div className="flex items-center gap-5">
            <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-[#dcfce7]">
              <span className="text-[24px]">✅</span>
            </div>

            <h2 className="text-[22px] font-bold text-[#0f172a]">
              {t("recognizedSymptoms")}
            </h2>
          </div>

          {/* LIST */}
          <div className="mt-8 flex flex-col gap-6">
            {validSymptoms.map((symptom: string, index: number) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-[22px] text-[#22c55e]">✓</span>

                <span className="text-[17px] text-[#334155]">{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* INVALID SYMPTOMS */}
      {invalidSymptoms.length > 0 && (
        <div className="mx-auto mt-8 w-full max-w-[1080px] rounded-[24px] border border-[#fecaca] bg-white px-[34px] py-[38px] shadow-sm">
          <div className="flex items-center gap-5">
            <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-[#fee2e2]">
              <span className="text-[24px]">⚠️</span>
            </div>

            <h2 className="text-[22px] font-bold text-[#0f172a]">
              {t("unrecognizedSymptoms")}
            </h2>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            {invalidSymptoms.map((symptom: string, index: number) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-[22px] text-[#ef4444]">✗</span>
                <span className="text-[17px] text-[#334155]">{symptom}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* DESCRIPTION & PRECAUTIONS */}
      {/* DESCRIPTION & PRECAUTIONS */}

      <div className="mx-auto mt-8 w-full max-w-[1080px] rounded-[24px] border border-[#e2e8f0] bg-white px-[34px] py-[38px] shadow-sm">
        {/* HEADER */}
        <div className="flex items-center gap-5">
          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-[#f3e8ff]">
            <span className="text-[26px] text-[#9333ea]">📄</span>
          </div>

          <h2 className="text-[22px] font-bold text-[#0f172a]">
            {t("descriptionPrecautions")}
          </h2>
        </div>

        {/* DESCRIPTION TEXT */}
        <div className="mt-10 text-[17px] leading-[50px] text-[#334155]">
          <p>{translatedDescription}</p>
        </div>

        {/* PRECAUTIONS TITLE */}
        <h3 className="mt-12 text-[20px] font-bold text-[#0f172a]">
          {t("precautions")}
        </h3>

        {/* PRECAUTIONS LIST */}
        <div className="mt-8 flex flex-col gap-6">
          {precautions.map((item: string, index: number) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-[22px] text-[#22c55e]">✓</span>

              <span className="text-[17px] text-[#334155]">
                {translatedPrecautions[index] || item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* PROPOSED MEDICAL SECTION */}
      <div className="mx-auto mt-8 w-full max-w-[1020px] rounded-[22px] border border-[#bae6fd] bg-white px-[28px] py-[30px] shadow-sm">
        {/* HEADER */}
        <div className="flex items-center gap-5">
          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-[#cffafe]">
            <span className="text-[24px] text-[#0891b2]">🏥</span>
          </div>

          <h2 className="text-[22px] font-bold text-[#0f172a]">
            {t("proposedMedicalSection")}
          </h2>
        </div>

        {/* MAIN DEPARTMENT */}
        <div className="mt-10 rounded-[18px] bg-[#ecfeff] px-6 py-5">
          <p className="text-[18px] font-bold text-[#0f172a]">
            {t("mainDepartment")}
          </p>

          <p className="mt-3 text-[20px] text-[#0f172a]">{doctor}</p>
        </div>

        {/* WARNING */}
        <div className="mt-6 rounded-[18px] border border-[#fde68a] bg-[#fffbeb] px-6 py-5">
          <p className="text-[16px] leading-8 text-[#92400e]">
            {t("medicalWarning")}
          </p>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="mx-auto mt-8 w-full max-w-[1020px] rounded-[22px] border border-[#fecaca] bg-[#fef2f2] px-[28px] py-[26px] shadow-sm">
        <div className="flex items-start gap-4">
          <div className="mt-1 text-[22px] text-[#dc2626]">⚠️</div>

          <div>
            <h3 className="text-[20px] font-bold text-[#991b1b]">
              {t("medicalDisclaimer")}
            </h3>

            <p className="mt-4 text-[16px] leading-8 text-[#7f1d1d]">
              {t("disclaimerText")}
            </p>
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="mx-auto mt-10 mb-16 flex w-full max-w-[1020px] items-center justify-center gap-6">
        <button
          onClick={() => router.push("/symptoms")}
          className="rounded-[16px] bg-gradient-to-r from-[#2563eb] to-[#0891b2] px-10 py-4 text-[18px] font-semibold text-white shadow-md transition hover:opacity-90"
        >
          {t("startNewAnalysis")}
        </button>

        <button
          onClick={() => router.push("/home")}
          className="rounded-[16px] border border-[#cbd5e1] bg-white px-10 py-4 text-[18px] font-semibold text-[#334155] transition hover:bg-slate-50"
        >
          {t("returnHome")}
        </button>
      </div>
    </div>
  );
}
