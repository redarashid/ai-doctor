"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AnalyzingPage() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const symptoms = JSON.parse(
    decodeURIComponent(searchParams.get("symptoms") || "[]"),
  );

  const [step, setStep] = useState(0);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepsTimer = setInterval(() => {
      setStep((prev) => {
        if (prev < 3) {
          return prev + 1;
        }

        return prev;
      });
    }, 1000);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 95) {
          return prev + 1;
        }

        return prev;
      });
    }, 40);

    const redirectTimer = setTimeout(() => {
      setProgress(100);

      router.push("/result");
    }, 4000);

    return () => {
      clearInterval(stepsTimer);
      clearInterval(progressTimer);
      clearTimeout(redirectTimer);
    };
  }, [router, symptoms]);

  return (
    <div className="min-h-screen bg-[#f7fbff] flex flex-col items-center justify-center px-4">
      {/* AI ICON */}
      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl animate-pulse">
        <div className="text-white text-6xl">🧠</div>
      </div>

      {/* TITLE */}
      <h1 className="mt-10 text-5xl font-bold text-[#0f172a] text-center">
        Analyzing Your Symptoms
      </h1>

      {/* SUBTITLE */}
      <p className="mt-4 text-2xl text-slate-500 text-center">
        Our AI is processing your information...
      </p>

      {/* STEPS */}
      <div className="mt-10 space-y-4 text-lg text-slate-600">
        {step >= 1 && <div>• Processing symptoms</div>}

        {step >= 2 && <div>• Analyzing patterns</div>}

        {step >= 3 && <div>• Generating insights</div>}
      </div>

      {/* SYMPTOMS CARD */}
      <div className="mt-12 w-full max-w-2xl rounded-3xl bg-white p-8 shadow-xl border border-blue-100">
        <h2 className="text-center text-blue-700 font-bold text-xl mb-6">
          ANALYZING
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {symptoms.map((symptom: string, index: number) => (
            <div
              key={index}
              className="rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-medium"
            >
              {symptom}
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
