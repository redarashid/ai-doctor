"use client";

import Link from "next/link";
import { CheckCircle, ArrowLeft, Info, Home, CalendarDays, Phone } from "lucide-react";

export default function ResultPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-16">

      {/* Navbar */}
      <nav className="w-full bg-white border-b border-blue-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Back */}
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          {/* Button */}
          <Link href="/symptoms">
            <button className="border border-blue-200 text-blue-600 font-semibold rounded-xl px-6 py-2 hover:bg-blue-50 transition">
              New Analysis
            </button>
          </Link>

        </div>
      </nav>


      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pt-10">

        {/* Alert */}
        <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-5 flex items-start gap-3 mb-8">
          <CheckCircle className="text-green-500 mt-1" size={28} />
          <div>
            <div className="font-bold text-lg text-green-900">
              Analysis Complete
            </div>
            <div className="text-green-900">
              Based on your symptoms, we have identified{" "}
              <span className="font-semibold">4 possible conditions</span>.
            </div>
          </div>
        </div>


        {/* Title */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Possible Conditions
        </h2>


        {/* Common Cold */}
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-7 mb-10">

          <div className="flex items-center gap-4 mb-2">
            <span className="text-2xl font-bold text-slate-900">
              Common Cold
            </span>

            <span className="flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              <CheckCircle size={16} className="text-green-500" />
              Mild
            </span>
          </div>

          <div className="text-gray-700 text-base mb-5">
            Based on the symptoms you have described, it appears you may be
            experiencing a common cold, which is a viral infection affecting
            the upper respiratory tract.

            <br /><br />

            Common colds typically present with symptoms like runny nose,
            sore throat, coughing, and mild fatigue.

            <br /><br />

            These infections are highly contagious but generally resolve
            within 7–10 days.
          </div>

          <div className="flex items-center gap-2 mb-2 text-blue-700 font-semibold">
            <Info size={18} />
            Recommendations
          </div>

          <ul className="space-y-3 text-gray-700 text-base">
            <li className="flex gap-2">
              <CheckCircle size={18} className="text-green-500 mt-1" />
              Get plenty of rest
            </li>
            <li className="flex gap-2">
              <CheckCircle size={18} className="text-green-500 mt-1" />
              Stay hydrated
            </li>
            <li className="flex gap-2">
              <CheckCircle size={18} className="text-green-500 mt-1" />
              Monitor symptoms
            </li>
          </ul>

        </div>


        {/* Seasonal Allergies */}
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-7 mb-10">

          <div className="flex items-center gap-4 mb-2">
            <span className="text-2xl font-bold text-slate-900">
              Seasonal Allergies
            </span>

            <span className="flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              <CheckCircle size={16} className="text-green-500" />
              Mild
            </span>
          </div>

          <div className="text-gray-700 text-base mb-6">
            Seasonal allergies occur when your immune system reacts
            to environmental allergens like pollen or dust.

            <br /><br />

            They often cause sneezing, itchy eyes, congestion,
            and other cold-like symptoms.
          </div>

          <div className="flex items-center gap-2 mb-3 text-blue-700 font-semibold">
            <Info size={18} />
            Recommendations
          </div>

          <ul className="space-y-3 text-gray-700 text-base">

            <li className="flex gap-2">
              <CheckCircle size={18} className="text-green-500 mt-1" />
              Avoid allergen triggers
            </li>

            <li className="flex gap-2">
              <CheckCircle size={18} className="text-green-500 mt-1" />
              Use antihistamines if needed
            </li>

            <li className="flex gap-2">
              <CheckCircle size={18} className="text-green-500 mt-1" />
              Keep windows closed during high pollen days
            </li>

          </ul>

        </div>


        {/* Viral Gastroenteritis */}
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-7 mb-10">

          <div className="flex items-center gap-4 mb-2">
            <span className="text-2xl font-bold text-slate-900">
              Viral Gastroenteritis
            </span>

            <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
              Moderate
            </span>
          </div>

          <div className="text-gray-700 text-base mb-6">
            Viral gastroenteritis, often called stomach flu, causes
            inflammation in the stomach and intestines.

            <br /><br />

            Symptoms include nausea, vomiting, diarrhea,
            and abdominal cramps.
          </div>

          <div className="flex items-center gap-2 mb-3 text-blue-700 font-semibold">
            <Info size={18} />
            Recommendations
          </div>

          <ul className="space-y-3 text-gray-700 text-base">

            <li className="flex gap-2">
              <CheckCircle size={18} className="text-green-500 mt-1" />
              Stay hydrated with clear fluids
            </li>

            <li className="flex gap-2">
              <CheckCircle size={18} className="text-green-500 mt-1" />
              Follow a light diet
            </li>

            <li className="flex gap-2">
              <CheckCircle size={18} className="text-green-500 mt-1" />
              Avoid dairy and spicy foods
            </li>

          </ul>

        </div>


        {/* Migraine */}
        <div className="bg-white rounded-2xl shadow border border-gray-100 p-7 mb-10">

          <div className="flex items-center gap-4 mb-2">
            <span className="text-2xl font-bold text-slate-900">
              Migraine
            </span>

            <span className="flex items-center gap-1 bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
              Moderate
            </span>
          </div>

          <div className="text-gray-700 text-base mb-6">
            Migraines are intense headaches often affecting one side
            of the head and may include nausea and light sensitivity.
          </div>

          <div className="flex items-center gap-2 mb-3 text-blue-700 font-semibold">
            <Info size={18} />
            Recommendations
          </div>

          <ul className="space-y-3 text-gray-700 text-base">

            <li className="flex gap-2">
              <CheckCircle size={18} className="text-green-500 mt-1" />
              Rest in a dark quiet room
            </li>

            <li className="flex gap-2">
              <CheckCircle size={18} className="text-green-500 mt-1" />
              Apply cold compress
            </li>

            <li className="flex gap-2">
              <CheckCircle size={18} className="text-green-500 mt-1" />
              Use pain relief medication if necessary
            </li>

          </ul>

        </div>
        {/* Next Steps */}
<h2 className="text-2xl font-bold text-slate-900 mb-6 mt-10">
  Next Steps
</h2>

<div className="grid md:grid-cols-3 gap-6 mb-10">

  {/* Self Care */}
  <div className="bg-white rounded-2xl border border-green-200 shadow-sm p-6">
    <div className="bg-green-100 text-green-600 w-12 h-12 flex items-center justify-center rounded-xl mb-4">
<Home size={24} />
</div>

    <h3 className="text-lg font-bold mb-2">
      Self-Care at Home
    </h3>

    <p className="text-gray-600 text-sm mb-3">
      For mild symptoms, follow the recommendations and monitor your condition.
    </p>

    <span className="text-green-600 text-sm font-medium">
      Recommended for mild cases
    </span>
  </div>


  {/* Appointment */}
  <div className="bg-white rounded-2xl border border-blue-200 shadow-sm p-6">
    <div className="bg-blue-100 text-blue-600 w-12 h-12 flex items-center justify-center rounded-xl mb-4">
<CalendarDays size={24} />
</div>

    <h3 className="text-lg font-bold mb-2">
      Schedule Appointment
    </h3>

    <p className="text-gray-600 text-sm mb-3">
      Book a consultation with a healthcare provider for professional assessment.
    </p>

    <span className="text-blue-600 text-sm font-medium">
      Recommended for moderate cases
    </span>
  </div>


  {/* Emergency */}
  <div className="bg-white rounded-2xl border border-red-200 shadow-sm p-6">
    <div className="bg-red-100 text-red-600 w-12 h-12 flex items-center justify-center rounded-xl mb-4">
<Phone size={24} />
</div>

    <h3 className="text-lg font-bold mb-2">
      Seek Immediate Care
    </h3>

    <p className="text-gray-600 text-sm mb-3">
      Contact emergency services or visit urgent care for severe symptoms.
    </p>

    <span className="text-red-600 text-sm font-medium">
      For severe or emergency cases
    </span>
  </div>

</div>


{/* Medical Disclaimer */}
<div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">

  <h3 className="text-red-700 font-bold mb-2">
    Important Medical Disclaimer
  </h3>

  <p className="text-red-700 text-sm">
    This AI analysis is for informational and educational purposes only.
    It does not constitute medical advice, diagnosis, or treatment.
    Always seek the advice of your physician or another qualified
    healthcare provider with any questions regarding a medical condition.
  </p>

</div>


{/* Buttons */}
<div className="flex flex-col sm:flex-row gap-4 mt-6">

  {/* Start New Analysis */}
  <Link href="/symptoms" className="w-full sm:w-auto">
    <button className="w-full px-8 py-4 rounded-xl text-white font-semibold 
    bg-gradient-to-r from-blue-600 to-cyan-500 
    hover:from-blue-700 hover:to-cyan-600
    shadow-lg hover:shadow-xl
    transition-all duration-300">
      Start New Analysis
    </button>
  </Link>

  {/* Return Home */}
  <Link href="/" className="w-full sm:w-auto">
    <button className="w-full px-8 py-4 rounded-xl font-semibold
    border border-gray-300
    text-gray-700
    hover:bg-gray-100
    hover:border-gray-400
    transition-all duration-300">
      Return to Home
    </button>
  </Link>

</div>

      </div>

    </div>
  );
}