import { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../../helper/supabaseClient";

function SignIn() {

  return (
    <section className="min-h-screen flex items-center justify-center bg-smoke-white">
      {/* Card */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-sky-600 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Sign in to continue to your account
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* Remember + Forgot password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="h-4 w-4 text-sky-500 rounded" />
              Remember me
            </label>
            <Link
              to="/auth/forgot-password"
              className="text-sm text-sky-500 hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6">
          Don&apos;t have an account?{" "}
          <Link to="/auth/signup" className="text-sky-500 font-semibold hover:underline">
            Sign Up 
          </Link>
        </p>
      </div>
    </section>
  );
}

export default SignIn;
