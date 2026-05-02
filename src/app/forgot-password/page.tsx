"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);

    try {
      const res = await fetch(
        "https://brenden-edificatory-gisela.ngrok-free.dev/api/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      const data = await res.json();

      if (res.ok) {
        setSent(true);
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      alert("Network error");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        {!sent ? (
          <>
            <h2 className="text-2xl font-bold mb-2">Forgot Password?</h2>

            <p className="text-gray-500 mb-6 text-sm">
              Enter your email and we&apos;ll send you a reset link
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Reset Link →"}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-2 text-green-600">
              Email Sent ✅
            </h2>

            <p className="text-gray-500 text-sm">
              Check your inbox for the reset link
            </p>
          </>
        )}
      </div>
    </div>
  );
}
