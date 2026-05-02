"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        router.push("/login");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [success, router]);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://brenden-edificatory-gisela.ngrok-free.dev/api/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            password,
            password_confirmation: confirm,
          }),
        },
      );

      let data;

      try {
        data = await res.json();
      } catch {
        data = { message: "Invalid server response" };
      }

      if (res.ok) {
        setSuccess(true);
      } else {
        alert(data.message || "Error");
      }
    } catch (err) {
      alert("Network error");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Create New Password
        </h2>

        <p className="text-gray-500 text-sm text-center mb-6">
          Enter your new password below
        </p>

        <form onSubmit={handleReset} className="space-y-4">
          <div className="space-y-5">
            {/* New Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                New Password
              </label>

              <div className="relative mt-2">
                {/* Lock Icon */}
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-6V9a6 6 0 10-12 0v2"
                      stroke="#94a3b8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="4"
                      y="11"
                      width="16"
                      height="9"
                      rx="2"
                      stroke="#94a3b8"
                      strokeWidth="2"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* Eye Icon */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
                      stroke="#94a3b8"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#94a3b8"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </div>

              <p className="text-xs text-gray-400 mt-1">
                Must be at least 8 characters
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Confirm New Password
              </label>

              <div className="relative mt-2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-6V9a6 6 0 10-12 0v2"
                      stroke="#94a3b8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="4"
                      y="11"
                      width="16"
                      height="9"
                      rx="2"
                      stroke="#94a3b8"
                      strokeWidth="2"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />

                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
                      stroke="#94a3b8"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#94a3b8"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <span>🔒</span>
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
