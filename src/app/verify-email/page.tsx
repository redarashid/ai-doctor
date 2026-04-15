"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { FaEnvelope } from "react-icons/fa";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get("email");
  const success = searchParams.get("success");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl">
          <FaEnvelope />
        </div>

        {/* 🟢 حالة النجاح (بعد الضغط على الإيميل) */}
        {success === "true" ? (
          <>
            <h2 className="text-2xl font-bold text-green-600 mb-2">
              Email Verified ✅
            </h2>

            <p className="text-gray-500 mb-6">
              Your account has been successfully verified
            </p>

            <button
              onClick={() => router.push("/login")}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 rounded-lg"
            >
              Sign In
            </button>
          </>
        ) : (
          <>
            {/* 🟡 الحالة العادية */}
            <h2 className="text-2xl font-bold mb-2">
              Verify Your Email
            </h2>

            <p className="text-gray-500 mb-6">
              We&apos;ve sent a confirmation email to <br />
              <span className="font-medium text-black">
                {email}
              </span>
            </p>

            <div className="border rounded-xl p-4 mb-6 text-left bg-gray-50">
              <p className="font-semibold">AI Doctor Team</p>
              <p className="text-sm text-gray-500 mb-2">
                noreply@aidoctor.com
              </p>
              <hr className="my-2" />
              <p className="font-medium mb-1">
                Confirm your email address
              </p>
              <p className="text-sm text-gray-500 mb-3">
                Please confirm your email to complete registration.
              </p>

              
            </div>

            <p className="text-sm text-gray-500 mb-2">
              Didn&apos;t receive the email?
            </p>

            <button className="text-blue-600 text-sm mb-4 hover:underline">
              Resend Email
            </button>

            
          </>
        )}

      </div>
    </div>
  );
}