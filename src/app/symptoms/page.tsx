"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaSearch, FaSyncAlt } from "react-icons/fa";
import LoadingScreen from "../../../components/loadingScreen/page";

const COMMON_SYMPTOMS = [
  "Headache",
  "Fever",
  "Cough",
  "Fatigue",
  "Nausea",
  "Chest Pain",
  "Shortness of Breath",
  "Dizziness",
  "Sore Throat",
  "Abdominal Pain",
  "Joint Pain",
  "Rash",
];

export default function SymptomsPage() {
  const [search, setSearch] = useState("");

  const [selected, setSelected] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const filteredSymptoms = COMMON_SYMPTOMS.filter((symptom) =>
    symptom.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSelect = (symptom: string) => {
    setSelected((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom],
    );
  };

  const handleAnalyze = () => {
    if (selected.length > 0) {
      setLoading(true);
    }
  };
  if (loading) {
    return <LoadingScreen onComplete={() => router.push("/result")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative">
      {/* {loading && <LoadingScreen />} */}

      {/* Navbar */}

      <nav className="w-full bg-white shadow-sm sticky top-0 z-10">
        <div className="flex border-b border-gray-100 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-4 px-8 py-4 w-full">
            <button
              className="text-gray-500 hover:text-blue-600 transition"
              onClick={() => router.back()}>
              <FaArrowLeft size={20} />
            </button>

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 rounded-full p-2">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M4 12h3l2 5 4-10 2 5h5"
                    stroke="#2563eb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <div className="font-bold text-lg">AI Doctor</div>

                <div className="text-xs text-gray-500 -mt-1">
                  Symptom Analysis
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Title & Subtitle */}

      <div className="text-center mt-8">
        <h1 className="text-5xl font-bold mb-2">Describe Your Symptoms</h1>

        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Select or search for symptoms you are experiencing. Our AI will
          analyze them to provide preliminary health insights.
        </p>
      </div>

      {/* Search Box */}

      <div className="flex justify-center mt-8">
        <div className="relative w-full max-w-5xl">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search symptoms (e.g., headache, fever, cough)..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-100 text-lg bg-white"
            disabled={loading}
          />
        </div>
      </div>

      {/* Common Symptoms */}

      <div className="max-w-5xl mx-auto mt-8">
        <div className="font-semibold text-lg mb-3">Common Symptoms</div>

        <div className="flex flex-wrap gap-3">
          {filteredSymptoms.length > 0 ? (
            filteredSymptoms.map((symptom) => (
              <button
                key={symptom}
                type="button"
                onClick={() => handleSelect(symptom)}
                className={`px-5 py-2 rounded-full border transition text-base ${
                  selected.includes(symptom)
                    ? "bg-blue-100 border-blue-400 text-blue-700"
                    : "bg-white border-gray-200 text-gray-700 hover:bg-blue-50"
                }`}
                disabled={loading}>
                {symptom}
              </button>
            ))
          ) : (
            <span className="text-gray-400">No symptoms found.</span>
          )}
        </div>
      </div>

      <div className="mx-auto mt-10 flex flex-col items-center w-full max-w-xl">
        <div className="w-full mb-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-2 items-start">
            <span className="font-bold text-blue-700">Note:</span>

            <span className="text-gray-600 text-sm">
              The more symptoms you provide, the more accurate our AI analysis
              will be. Please be as specific as possible about what you are
              experiencing.
            </span>
          </div>
        </div>

        <button
          type="button"
          className="w-full py-5 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 text-white font-semibold text-lg flex items-center justify-center gap-2 shadow transition disabled:opacity-60"
          disabled={selected.length === 0 || loading}
          onClick={handleAnalyze}>
          <FaSyncAlt className="animate-spin-slow" />
          Analyze Symptoms ({selected.length})
        </button>
      </div>
    </div>
  );
}
