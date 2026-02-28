import Link from "next/link";
import { Activity, Shield, Sparkles } from "lucide-react";
export default function Home() {
  return (
    <div>

      {/* NAVBAR */}

<nav
  style={{
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "white",
    borderBottom: "1px solid #eee"
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}
  >

    {/* LEFT — LOGO */}
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      
      <img
        src="/imges/logo.jpeg"
        alt="AI Doctor Logo"
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          objectFit: "cover"
        }}
      />

      <div>
        <h2 style={{
          fontSize: "20px",
          fontWeight: "700",
          margin: 0,
          color: "#0f172a"
        }}>
          AI Doctor
        </h2>

        <p style={{
          fontSize: "12px",
          color: "#64748b",
          margin: 0
        }}>
          Your Health Assistant
        </p>
      </div>

    </div>

    {/* RIGHT — LINKS */}
    <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>

  <a href="#" style={{ textDecoration: "none", color: "#334155" }}>
    About
  </a>

  <a href="#" style={{ textDecoration: "none", color: "#334155" }}>
    How it Works
  </a>

  {/* SIGN IN */}
  <Link href="/login" style={{ textDecoration: "none", color: "#334155" }}>
    Sign In
  </Link>

  {/* SIGN UP BUTTON */}
  <Link href="/register">
    <button
      style={{
        background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
        color: "white",
        border: "none",
        padding: "10px 22px",
        borderRadius: "10px",
        fontWeight: "600",
        cursor: "pointer",
        boxShadow: "0 8px 20px rgba(37,99,235,0.3)"
      }}
    >
      Sign Up
    </button>
  </Link>

</div>

  </div>
</nav>

      {/* HERO SECTION */}
<section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE */}
    <div>
      <h1 className="text-7xl font-extrabold text-gray-900 leading-tight mb-6">
        Understand Your Symptoms with{" "}
        <span className="text-blue-600">AI Assistance</span>
      </h1>

      <p className="text-gray-600 text-xl mb-10 max-w-xl">
        Get preliminary health insights and symptom analysis powered by
        advanced AI. Our system provides guidance to help you make informed
        decisions about your health.
      </p>

      {/* BUTTONS */}
<div style={{ display: "flex", gap: "18px", marginTop: "32px" }}>
  
  <button className="btn-primary">
    Start Symptom Analysis →
  </button>

  <button className="btn-secondary">
    Learn More
  </button>

</div>

      {/* FEATURES UNDER BUTTONS */}
      <div className="flex items-center gap-8 text-gray-500 font-medium mt-10">
        <span>🛡️ HIPAA Compliant</span>
        <span>💓 Medical AI Powered</span>
      </div>
    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="relative scale-110">

      <img
        src="/imges/hero.jpg"
        alt="Medical Lab"
        className="rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.15)] w-full"
      />

      {/* CARD 1 */}
      <div className="absolute top-10 left-10 bg-white rounded-xl shadow-lg px-5 py-3">
        <p className="text-sm text-gray-500">Analysis Complete</p>
        <p className="font-bold">95% Accuracy</p>
      </div>

      {/* CARD 2 */}
      <div className="absolute bottom-10 right-10 bg-white rounded-xl shadow-lg px-5 py-3">
        <p className="text-sm text-gray-500">Fast Results</p>
        <p className="font-bold">&lt;30 Seconds</p>
      </div>
      {/* CARD — Accuracy */}
<div className="absolute top-8 left-8 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">

  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-xl">
    ✔️
  </div>

  <div>
    <p className="text-xs text-gray-500">Analysis Complete</p>
    <p className="font-bold text-gray-800">95% Accuracy</p>
  </div>

</div>


{/* CARD — Speed */}
<div className="absolute bottom-8 right-8 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3">

  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
    ✨
  </div>

  <div>
    <p className="text-xs text-gray-500">Fast Results</p>
    <p className="font-bold text-gray-800">&lt;30 Seconds</p>
  </div>

</div>

    </div>

  </div>
</section>
{/* FEATURES SECTION */}

<section className="bg-gradient-to-b from-gray-50 to-blue-50 py-16">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

    {/* CARD 1 */}
    <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-lg transition">

      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-5">
        <Activity color="white" size={24} />
      </div>

      <h3 className="text-xl font-bold mb-2">Smart Analysis</h3>

      <p className="text-gray-600">
        Our AI analyzes your symptoms using advanced machine learning to provide accurate preliminary assessments.
      </p>
    </div>


    {/* CARD 2 */}
    <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-lg transition">

      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-5">
        <Shield color="white" size={24} />
      </div>

      <h3 className="text-xl font-bold mb-2">Secure & Private</h3>

      <p className="text-gray-600">
        Your health data is encrypted and protected. We prioritize your privacy and follow strict security protocols.
      </p>
    </div>


    {/* CARD 3 */}
    <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm hover:shadow-lg transition">

      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-5">
        <Sparkles color="white" size={24} />
      </div>

      <h3 className="text-xl font-bold mb-2">Instant Results</h3>

      <p className="text-gray-600">
        Get preliminary health insights in seconds. Our system provides quick guidance when you need it most.
      </p>
    </div>

  </div>
</section> 
{/* MEDICAL DISCLAIMER */}
<div className="max-w-7xl mx-auto px-6 mt-16">
  <div className="bg-amber-100 border border-amber-400 text-amber-900 rounded-2xl px-7 py-6 shadow-md">
    
    <p className="text-lg">
      <span className="font-bold">Medical Disclaimer:</span>{" "}
      This AI tool is for informational purposes only and does not replace
      professional medical advice, diagnosis, or treatment. Always consult
      with a qualified healthcare provider for medical concerns.
    </p>

  </div>
</div>
    </div>
  );
}