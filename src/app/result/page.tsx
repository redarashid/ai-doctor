"use client";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const router = useRouter();
  const result = {
    symptoms: [],

    diagnosis: {
      condition: "",
      confidence: 0,
      severity: "",
    },

    analysis: "",

    description: "",

    precautions: [],

    recommendations: [],

    medicalSection: {
      mainDepartment: "",
      relatedDepartment: "",
    },
  };

  return (
    <div className="min-h-screen bg-[#f7fbff]">
      {/* HEADER */}
      <div className="border-b border-[#dbe4f0] bg-white">
        <div className="mx-auto flex h-[88px] max-w-[1150px] items-center justify-between px-6">
          <button className="flex items-center gap-2 text-[18px] font-medium text-[#475569] transition hover:text-black">
            <span>←</span>
            <span>Back to Home</span>
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
                Analysis Results
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-2xl border border-[#dbe4f0] bg-white p-1">
              <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#0891b2] px-5 py-2 text-white shadow-sm">
                <span>🌐</span>
                <span className="font-medium">EN</span>
              </button>

              <button className="flex items-center gap-2 px-5 py-2 text-[#475569]">
                <span>🌐</span>
                <span className="font-medium">AR</span>
              </button>
            </div>

            <button className="rounded-[14px] border border-[#bfdbfe] px-7 py-3 text-[17px] font-medium text-[#2563eb] transition hover:bg-blue-50">
              New Analysis
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
              Analysis Complete
            </h2>

            <p className="mt-2 max-w-[780px] text-[18px] leading-8 text-[#166534]">
              Based on your symptoms, we&apos;ve identified possible conditions.
              Please review the results below and follow the recommendations.
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
              Most Likely Outcome
            </h2>

            <p className="mt-1 text-[16px] text-[#64748b]">
              Based on the entered symptoms, this is the most probable result
              from the model.
            </p>
          </div>
        </div>

        {/* TITLE */}
        <div className="mt-8 flex items-center gap-4">
          <h1 className="text-[48px] font-bold leading-tight text-[#0f172a]">
            Seasonal Allergies
            <br />
            (Allergic Rhinitis)
          </h1>

          <div className="rounded-full bg-[#dcfce7] px-4 py-2 text-[18px] font-semibold text-[#16a34a]">
            Mild
          </div>
        </div>

        {/* SCORE */}
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[18px] font-medium text-[#0f172a]">
              Confidence score
            </span>

            <span className="text-[20px] font-bold text-[#0f172a]">78%</span>
          </div>

          {/* BAR */}
          <div className="h-4 overflow-hidden rounded-full bg-[#e2e8f0]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
              style={{ width: "78%" }}
            />
          </div>
        </div>

        {/* INFO BOX */}
        <div className="mt-8 rounded-2xl border border-[#bfdbfe] bg-[#eff6ff] px-6 py-5">
          <p className="text-[17px] leading-8 text-[#1e40af]">
            Confidence score is moderate. Symptoms are consistent with seasonal
            allergies, but may overlap with other respiratory conditions.
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
            AI Health Analysis
          </h2>
        </div>

        {/* CONTENT */}
        <div className="mt-10 space-y-8 text-[22px] leading-[48px] text-[#334155]">
          <p>
            Based on the symptoms you&apos;ve described, it appears you may be
            experiencing seasonal allergies, also known as allergic rhinitis or
            hay fever.
          </p>

          <p>
            This occurs when your immune system overreacts to environmental
            allergens such as pollen, dust mites, or pet dander. During certain
            seasons, particularly spring and fall, pollen counts rise
            significantly and can trigger these symptoms.
          </p>

          <p>
            Allergies can cause symptoms similar to a cold but typically don&apos;t
            include a fever and may be accompanied by itchy, watery eyes.
          </p>
        </div>
      </div>

      {/* DESCRIPTION & PRECAUTIONS */}
      {/* DESCRIPTION & PRECAUTIONS */}

      <div className="mx-auto mt-8 w-full max-w-[1080px] rounded-[24px] border border-[#e2e8f0] bg-white px-[34px] py-[38px] shadow-sm">
        {/* HEADER */}
        <div className="flex items-center gap-5">
          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-[#f3e8ff]">
            <span className="text-[26px] text-[#9333ea]">📄</span>
          </div>

          <h2 className="text-[22px] font-bold text-[#0f172a]">
            Description and Precautions
          </h2>
        </div>

        {/* DESCRIPTION TEXT */}
        <div className="mt-10 text-[17px] leading-[50px] text-[#334155]">
          <p>
            An allergy is the immune system&apos;s response to a foreign
            substance that is not normally harmful to your body. These
            substances can include certain foods, pollen, or pet dander. Your
            immune system&apos;s job is to keep you healthy by fighting off
            harmful pathogens.
          </p>

          <p className="mt-8">
            When you have allergies, your immune system makes antibodies that
            identify a particular allergen as harmful, even though it
            isn&apos;t. When you come into contact with the allergen, your
            immune system&apos;s reaction can inflame your skin, sinuses,
            airways, or digestive system.
          </p>
        </div>

        {/* PRECAUTIONS TITLE */}
        <h3 className="mt-12 text-[20px] font-bold text-[#0f172a]">
          Precautions
        </h3>

        {/* PRECAUTIONS LIST */}
        <div className="mt-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[22px] text-[#22c55e]">✓</span>

            <span className="text-[17px] text-[#334155]">
              Apply cool compresses to affected areas
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[22px] text-[#22c55e]">✓</span>

            <span className="text-[17px] text-[#334155]">
              Use saline nasal rinse to clear nasal passages
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[22px] text-[#22c55e]">✓</span>

            <span className="text-[17px] text-[#334155]">
              Avoid rubbing your eyes
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[22px] text-[#22c55e]">✓</span>

            <span className="text-[17px] text-[#334155]">
              Wash your hands frequently
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[22px] text-[#22c55e]">✓</span>

            <span className="text-[17px] text-[#334155]">
              Keep indoor air clean with air purifiers
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[22px] text-[#22c55e]">✓</span>

            <span className="text-[17px] text-[#334155]">
              Monitor pollen counts and stay indoors when levels are high
            </span>
          </div>
        </div>
      </div>

      {/* RECOMMENDATIONS */}
      <div className="mx-auto mt-8 w-full max-w-[1020px] rounded-[22px] border border-[#e2e8f0] bg-white px-[28px] py-[30px] shadow-sm">
        {/* HEADER */}
        <div className="flex items-center gap-5">
          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[18px] bg-[#dcfce7]">
            <span className="text-[24px] text-[#16a34a]">ⓘ</span>
          </div>

          <h2 className="text-[22px] font-bold text-[#0f172a]">
            Recommendations
          </h2>
        </div>

        {/* LIST */}
        <div className="mt-10 flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <span className="text-[22px] text-[#22c55e]">✓</span>

            <p className="text-[17px] leading-8 text-[#334155]">
              Try to identify and avoid your specific allergen triggers when
              possible
            </p>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-[22px] text-[#22c55e]">✓</span>

            <p className="text-[17px] leading-8 text-[#334155]">
              Consider taking over-the-counter antihistamine medication to
              relieve symptoms
            </p>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-[22px] text-[#22c55e]">✓</span>

            <p className="text-[17px] leading-8 text-[#334155]">
              Keep windows closed during high pollen count days and use air
              conditioning
            </p>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-[22px] text-[#22c55e]">✓</span>

            <p className="text-[17px] leading-8 text-[#334155]">
              Shower and change clothes after spending time outdoors during
              allergy season
            </p>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-[22px] text-[#22c55e]">✓</span>

            <p className="text-[17px] leading-8 text-[#334155]">
              Use a HEPA filter in your home to reduce airborne allergens
            </p>
          </div>
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
            Proposed Medical Section
          </h2>
        </div>

        {/* MAIN DEPARTMENT */}
        <div className="mt-10 rounded-[18px] bg-[#ecfeff] px-6 py-5">
          <p className="text-[18px] font-bold text-[#0f172a]">
            Main Department:
          </p>

          <p className="mt-3 text-[20px] text-[#0f172a]">
            Allergy and Immunology
          </p>
        </div>

        {/* RELATED */}
        <div className="mt-5 rounded-[18px] bg-[#eff6ff] px-6 py-5">
          <p className="text-[18px] font-bold text-[#1d4ed8]">
            Related Department:
          </p>

          <p className="mt-3 text-[19px] text-[#1e40af]">
            Ear, Nose, and Throat (ENT) / Pulmonology (Chest)
          </p>
        </div>

        {/* WARNING */}
        <div className="mt-6 rounded-[18px] border border-[#fde68a] bg-[#fffbeb] px-6 py-5">
          <p className="text-[16px] leading-8 text-[#92400e]">
            ⚠️ This is a guideline only, based on current expectations, and not
            a final medical referral.
          </p>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="mx-auto mt-8 w-full max-w-[1020px] rounded-[22px] border border-[#fecaca] bg-[#fef2f2] px-[28px] py-[26px] shadow-sm">
        <div className="flex items-start gap-4">
          <div className="mt-1 text-[22px] text-[#dc2626]">⚠️</div>

          <div>
            <h3 className="text-[20px] font-bold text-[#991b1b]">
              Medical Disclaimer
            </h3>

            <p className="mt-4 text-[16px] leading-8 text-[#7f1d1d]">
              This AI-powered analysis is for informational purposes only and
              should not replace professional medical advice, diagnosis, or
              treatment. Always consult with a qualified healthcare provider
              regarding any medical concerns.
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
          Start New Analysis
        </button>

        <button className="rounded-[16px] border border-[#cbd5e1] bg-white px-10 py-4 text-[18px] font-semibold text-[#334155] transition hover:bg-slate-50">
          Return Home
        </button>
      </div>
    </div>
  );
}
