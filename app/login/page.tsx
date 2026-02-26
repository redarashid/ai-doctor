"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaCalendarAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

type Inputs = {
  fullName: string;
  email: string;
  dob: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      {/* Logo and Title */}
      <div className="flex items-center mb-6 gap-4">
        <div>
          <img src="/imges/logo.jpeg" className="w-14 h-14 object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">AI Doctor</h1>
          <span className="text-gray-500 text-sm">Your Health Assistant</span>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md"
        noValidate>
        <h2 className="text-2xl font-bold mb-1">Create Account</h2>
        <p className="mb-6 text-gray-500">
          Start your journey to better health insights
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              {...register("fullName", {
                required: "Full name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Full name must contain only letters",
                },
              })}
              placeholder="John Doe"
              className={`pl-10 pr-3 py-2 w-full border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition ${
                errors.fullName ? "border-red-400" : "border-gray-200"
              }`}
            />
          </div>
          {errors.fullName && (
            <span className="text-red-500 text-xs mt-1 block">
              {errors.fullName.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              placeholder="you@example.com"
              className={`pl-10 pr-3 py-2 w-full border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-xs mt-1 block">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Date of Birth
          </label>
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
            <input
              {...register("dob", { required: "Date of birth is required" })}
              type="date"
              className={`pl-10 pr-3 py-2 w-full border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition ${
                errors.dob ? "border-red-400" : "border-gray-200"
              }`}
            />
          </div>
          {errors.dob && (
            <span className="text-red-500 text-xs mt-1 block">
              {errors.dob.message}
            </span>
          )}
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Create a strong password"
              className={`pl-10 pr-10 py-2 w-full border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition ${
                errors.password ? "border-red-400" : "border-gray-200"
              }`}
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-3 top-3 text-gray-400 cursor-pointer hover:text-blue-500 transition"
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <span className="text-xs text-gray-400 ml-1">
            Must be at least 8 characters
          </span>
          {errors.password && (
            <span className="text-red-500 text-xs mt-1 block">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              type={showConfirm ? "text" : "password"}
              placeholder="Re-enter your password"
              className={`pl-3 pr-10 py-2 w-full border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transition ${
                errors.confirmPassword ? "border-red-400" : "border-gray-200"
              }`}
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-3 top-3 text-gray-400 cursor-pointer hover:text-blue-500 transition"
              onClick={() => setShowConfirm((prev) => !prev)}>
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.confirmPassword && (
            <span className="text-red-500 text-xs mt-1 block">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {/* Terms */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            {...register("terms", { required: "You must agree to the terms" })}
            className="mr-2 accent-blue-500 cursor-pointer"
          />
          <span className="text-sm">
            I agree to the{" "}
            <a
              href="#"
              className="text-blue-600 underline hover:text-blue-800 transition">
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-600 underline hover:text-blue-800 transition">
              Privacy Policy
            </a>
          </span>
        </div>
        {errors.terms && (
          <span className="text-red-500 text-xs mt-1 block">
            {errors.terms.message}
          </span>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 mb-4 transition hover:scale-[1.02] hover:shadow-lg cursor-pointer">
          Create Account <span className="ml-2">&rarr;</span>
        </button>

        {/* Or sign up with */}
        <div className="text-center text-gray-400 mb-4">Or sign up with</div>
        <div className="flex justify-center gap-4 mb-2">
          <button
            type="button"
            className="flex items-center gap-2 border rounded-lg px-4 py-2 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Google
          </button>
          <button
            type="button"
            className="flex items-center gap-2 border rounded-lg px-4 py-2 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="w-5 h-5"
            />
            GitHub
          </button>
        </div>
        <div className="text-center text-sm">
          Already have an account?
          <a
            href="#"
            className="text-blue-600 underline hover:text-blue-800 transition">
            Sign in
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
