"use client";

import Link from "next/link";
import Image from "next/image";
import { Activity, Shield, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-30">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
          <div className="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* LEFT — LOGO */}
            <div className="flex items-center gap-3">
              <Image
                src="/imges/logo.jpeg"
                alt="AI Doctor Logo"
                width={40}
                height={40}
                className="rounded-xl object-cover"
              />
              <div>
                <h2 className="text-lg font-bold text-slate-900 m-0">
                  AI Doctor
                </h2>
                <p className="text-xs text-slate-400 m-0">
                  Your Health Assistant
                </p>
              </div>
            </div>
            {/* RIGHT — LINKS */}
            <div className="flex items-center gap-8">
              <Link
                href="#"
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
              >
                {t("about")}
              </Link>

              <Link
                href="#"
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
              >
                {t("howItWorks")}
              </Link>

              <Link
                href="/login"
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
              >
                {t("signIn")}
              </Link>

              <Link href="/register">
                <button className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:shadow-lg">
                  Sign Up
                </button>
              </Link>

              {/* Language Switcher */}
              <div className="ml-2 flex overflow-hidden rounded-xl border border-gray-300">
                <button
                  onClick={() => {
                    i18n.changeLanguage("EN");
                    localStorage.setItem("lang", "EN");
                  }}
                  className={`min-w-[54px] px-4 py-2 text-sm font-semibold transition ${
                    i18n.language === "EN"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-700 hover:bg-gray-100"
                  }`}
                >
                  EN
                </button>

                <button
                  onClick={() => {
                    i18n.changeLanguage("AR");
                    localStorage.setItem("lang", "AR");
                  }}
                  className={`min-w-[54px] px-4 py-2 text-sm font-semibold transition ${
                    i18n.language === "AR"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-700 hover:bg-gray-100"
                  }`}
                >
                  AR
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* NAVBAR */}

      <section className="bg-gray-50 min-h-screen flex items-center py-10">
        <div className="max-w-screen-2xl mx-auto px-30">
          <div className="max-w-screen-2xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE */}
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                {t("heroTitle")}{" "}
                <span className="text-blue-600">{t("heroTitleHighlight")}</span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl">
                {t("heroDescription")}
              </p>
              {/* BUTTONS */}
              <div className="flex gap-4 mt-6">
                <Link href="/symptoms">
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:shadow-blue-300 hover:scale-105 transition text-base">
                    {t("startAnalysis")} →
                  </button>
                </Link>
                <button className="bg-white border border-gray-300 text-gray-700 px-5 py-2 rounded-xl font-semibold hover:bg-gray-100 transition text-base">
                  {t("learnMore")}
                </button>
              </div>
              {/* FEATURES UNDER BUTTONS */}
              <div className="flex items-center gap-6 text-gray-500 font-medium mt-8 text-sm">
                <span>🛡️ {t("hipaa")}</span>
                <span>💓 {t("medicalAi")}</span>
              </div>
            </div>
            {/* RIGHT SIDE IMAGE */}
            <div className="relative">
              <div className="relative rounded-3xl shadow-lg overflow-hidden w-full h-[450px] md:h-[600px]">
                <Image
                  src="/imges/hero.jpg"
                  alt="Medical Lab"
                  fill
                  className="object-cover"
                  priority
                />
                {/* CARD — Accuracy */}
                <div className="absolute top-4 left-4 bg-white rounded-xl shadow px-4 py-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-lg">
                    ✔️
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{t("analysisComplete")}Analysis Complete</p>
                    <p className="font-bold text-gray-800 text-sm">
                      {t("accuracy")}
                    </p>
                  </div>
                </div>
                {/* CARD — Speed */}
                <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow px-4 py-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-lg">
                    ✨
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{t("fastResults")}</p>
                    <p className="font-bold text-gray-800 text-sm">
                      {" "}
                      {t("thirtySeconds")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO SECTION */}

      <section className="bg-gradient-to-b from-gray-50 to-blue-50 py-10">
        <div className="max-w-screen-2xl mx-auto px-30">
          <div className="max-w-[1600px] mx-auto px-6 grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Activity color="white" size={20} />
              </div>
              <h3 className="text-lg font-bold mb-1">{t("smartAnalysis")}</h3>

              <p className="text-gray-600 text-sm">{t("smartAnalysisDesc")}</p>
            </div>
            {/* CARD 2 */}
            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <Shield color="white" size={20} />
              </div>
              <h3 className="text-lg font-bold mb-1">{t("securePrivate")}</h3>

              <p className="text-gray-600 text-sm">{t("securePrivateDesc")}</p>
            </div>
            {/* CARD 3 */}
            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Sparkles color="white" size={20} />
              </div>
              <h3 className="text-lg font-bold mb-1">{t("instantResults")}</h3>

              <p className="text-gray-600 text-sm">{t("instantResultsDesc")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES SECTION */}

      {/* MEDICAL DISCLAIMER */}
      <div className="max-w-screen-2xl mx-auto px-30">
        <div className="max-w-screen-2xl mx-auto px-4 mt-10 pb-20">
          <div className="bg-amber-100 border border-amber-400 text-amber-900 rounded-2xl px-6 py-4 shadow-md">
            <p className="text-base">
              <span className="font-bold">{t("medicalDisclaimer")}:</span> This AI
              {t("disclaimerText")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
