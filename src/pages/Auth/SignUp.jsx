import { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../../helper/supabaseClient";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    // const { data, error } = await supabase.auth.signUp({
    //   email,
    //   password,
    //   options: {
    //     data: {
    //       full_name: fullName,
    //     },
    //   },
    // });

    // if (error) {
    //   setMessage(error.message);
    //   return;
    // }

    // if (data) {
    //   setMessage("Sign up successful!");
    //   console.log(data);
    //   console.log("Sign up successful!");
    // }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    console.log("SIGNUP RESPONSE", { data, error });

    if (error) {
      setMessage(error.message);
      return;
    }

    // setEmail("");
    // setFullName("");
    // setPassword("");
    // setConfirmPassword("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-smoke-white">
      {/* Card */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-sky-500 mb-6">
          Create Account
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Full Name
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-sky-500 text-white font-semibold rounded-xl hover:bg-sky-600 transition"
          >
            Sign Up
          </button>
        </form>


        {message && (
          <p className="text-center text-red-500 mt-4">{message}</p>
        )}

        {/* Footer */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/auth/signin"
            className="text-sky-500 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}

export default SignUp;
