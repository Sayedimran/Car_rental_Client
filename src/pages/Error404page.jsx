import React from "react";
import { Link } from "react-router-dom";

const Error404page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4 text-center">
      {/* Animated Car Icon */}
      <div className="relative mb-8">
        
        <div className="absolute -bottom-6 left-0 right-0 text-6xl font-bold text-red-500">
          404
        </div>
      </div>

      {/* Error Message */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Oops! Lost in the Fast Lane
      </h1>
      <p className="text-xl text-gray-600 max-w-md mb-8">
        The page you're looking for has taken a wrong turn. Let's get you back
        on track to our amazing car collection.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          className="btn btn-primary bg-fuchsia-800 text-white rounded-lg px-8 py-3 text-lg hover:bg-amber-600 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Return Home
        </Link>

        <Link
          to="/allCars"
          className="btn btn-outline rounded-lg bg-fuchsia-700 text-white btn-primary px-8 py-3 text-lg hover:shadow-lg transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
          Browse Cars
        </Link>
      </div>

      {/* Fun Car Illustration */}
      <div className="mt-12 relative w-full max-w-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        <img
          src="https://illustrations.popsy.co/amber/crashed-error.svg"
          alt="Car error illustration"
          className="w-full h-auto opacity-90"
        />
      </div>
    </div>
  );
};

export default Error404page;
