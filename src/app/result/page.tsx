"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function ResultPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full flex flex-col items-center">
        <FaCheckCircle className="text-green-500 text-5xl mb-4" />
        <h1 className="text-3xl font-bold mb-2 text-center">
          Preliminary Analysis Complete
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Based on your selected symptoms, here are some possible conditions and
          recommendations. Please note this is not a medical diagnosis. For
          accurate results, consult a healthcare professional.
        </p>
        <div className="w-full mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-3">
            <span className="font-semibold text-blue-700">
              Possible Conditions:
            </span>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Common Cold</li>
              <li>Flu</li>
              <li>Migraine</li>
              {/* يمكنك جعل هذه القائمة ديناميكية حسب الأعراض المختارة */}
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <span className="font-semibold text-green-700">
              Recommendations:
            </span>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Rest and stay hydrated</li>
              <li>Monitor your symptoms</li>
              <li>Consult a doctor if symptoms worsen</li>
            </ul>
          </div>
        </div>
        <button
          className="mt-2 px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow hover:from-blue-600 transition"
          onClick={() => (window.location.href = "/symptoms")}>
          Back to Symptoms
        </button>
      </div>
    </div>
  );
}
