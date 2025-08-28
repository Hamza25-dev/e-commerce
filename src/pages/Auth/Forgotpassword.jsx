import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-smoke-white">
      {/* Card */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-sky-600 mb-6">
          Forgot Password
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Enter your email address below and we&apos;ll send you instructions to reset your password.
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your registered email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition"
          >
            Send Reset Link
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6">
          Remembered your password?{" "}
          <Link to="/auth/signin" className="text-sky-500 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}

export default ForgotPassword;
