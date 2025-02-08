import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignupModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      {/* Modal Container */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[850px] sm:flex sm:p-8 relative">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 text-xl"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Left Side: Signup Form */}
        <div className="w-full sm:w-1/2 p-4 sm:p-6">
          <h2 className="text-2xl font-bold mb-4">Create Account</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md mt-3"
          />

          {/* Password Fields with Toggle */}
          <div className="relative mt-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md pr-10"
            />
            <button
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          <div className="relative mt-3">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md pr-10"
            />
            <button
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mt-4">
            Create Account
          </button>

          <p className="text-center text-gray-600 mt-2">
            or, <span className="text-blue-600 cursor-pointer">Sign In</span>
          </p>

          {/* Social Login Buttons */}
          <div className="flex flex-col gap-2 mt-4">
            <button className="flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100">
              <FaFacebook className="text-blue-600" /> Sign up with Facebook
            </button>
            <button className="flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100">
              <FaGoogle className="text-red-600" /> Sign up with Google
            </button>
          </div>

          {/* Terms & Conditions */}
          <p className="text-gray-600 text-xs text-center mt-4">
            By signing up, you agree to our <br />
            <span className="text-blue-600 cursor-pointer">
              Terms & Conditions, Privacy Policy
            </span>
          </p>
        </div>

        {/* Right Side: Illustration (Hidden on Mobile) */}
        <div className="hidden sm:flex sm:w-1/2 p-6 flex-col items-center">
          <img
            src="/signup-illustration.png"
            alt="Sign Up"
            className="w-40 mt-2 opacity-90"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
