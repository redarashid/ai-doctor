"use client";

import { ArrowLeft, Stethoscope } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";


export default function AIDoctorHeader() {
  const router = useRouter();
  const { i18n } = useTranslation();

  const lang = i18n.language === "AR" ? "AR" : "EN";

  return (
    <header className="w-full pt-0 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 transition text-sm font-medium">
            <ArrowLeft size={16} />
            <span onClick={() => router.push("/")} className="cursor-pointer">
              Back
            </span>
          </button>

          <div className="w-px h-6 bg-gray-200" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center shadow-md shadow-blue-100">
              <Stethoscope size={20} className="text-white" />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-[15px] font-semibold text-gray-900">
                AI Doctor
              </span>
              <span className="text-[12px] text-gray-400">
                Symptom Analysis
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - ONLY FIXED LANGUAGE */}
        <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl">
          <button
            onClick={() => {
              i18n.changeLanguage("EN");
              localStorage.setItem("lang", "EN");
            }}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              lang === "EN"
                ? "bg-blue-500 text-white shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => {
              i18n.changeLanguage("AR");
              localStorage.setItem("lang", "AR");
            }}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              lang === "AR"
                ? "bg-blue-500 text-white shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            AR
          </button>
        </div>
      </div>
    </header>
  );
}
