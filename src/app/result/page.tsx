"use client";

import Link from "next/link";
import { CheckCircle, ArrowLeft, Info } from "lucide-react";

export default function ResultPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-16">
      {/* Navbar */}
      <nav className="w-full bg-white border-b border-blue-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Left: Back to Home */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium text-base">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            {/* Logo + Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 flex items-center justify-center">
                {/* نبض SVG */}
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 13h3l2-7 4 14 3-7h4"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl text-slate-900">
                  AI Doctor
                </div>
                <div className="text-xs text-slate-500">Analysis Results</div>
              </div>
            </div>
          </div>
          {/* Right: New Analysis Button */}
          <Link href="/symptoms">
            <button className="border border-blue-200 text-blue-600 font-semibold rounded-xl px-6 py-2 bg-white hover:bg-blue-50 transition text-base shadow-sm">
              New Analysis
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pt-10">
        {/* Green Alert */}
        <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-5 flex items-start gap-3 mb-8">
          <CheckCircle className="text-green-500 mt-1" size={28} />
          <div>
            <div className="font-bold text-lg text-green-900 mb-1">
              Analysis Complete
            </div>
            <div className="text-green-900 text-base">
              Based on your symptoms, we have identified{" "}
              <span className="font-semibold">4 possible conditions</span>.
              Please review the results below and follow the recommendations.
            </div>
          </div>
        </div>

        {/* Possible Conditions Title */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Possible Conditions
        </h2>

        {/* Condition Card */}
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-7 mb-10">
          {/* Title + Badge */}
          <div className="flex items-center gap-4 mb-2">
            <span className="text-2xl font-bold text-slate-900">
              Common Cold
            </span>
            <span className="flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              <CheckCircle size={16} className="text-green-500" />
              Mild
            </span>
          </div>
          {/* Description */}
          <div className="text-gray-700 text-base mb-5">
            Based on the symptoms you have described, it appears you may be
            experiencing a common cold, which is a viral infection affecting the
            upper respiratory tract.
            <br />
            <br />
            Common colds typically present with symptoms like runny nose, sore
            throat, coughing, and mild fatigue. These infections are highly
            contagious but generally resolve on their own within 7-10 days.
            <br />
            <br />
            The symptoms you are experiencing are consistent with this
            condition, and it is one of the most frequent illnesses affecting
            adults and children alike.
          </div>
          {/* Recommendations */}
          <div>
            <div className="flex items-center gap-2 mb-2 text-blue-700 font-semibold">
              <Info size={18} />
              Recommendations
            </div>
            <ul className="list-disc ml-7 text-gray-700 text-base">
              <li>Rest and stay hydrated</li>
              <li>Monitor your symptoms</li>
              <li>Consult a doctor if symptoms worsen</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
