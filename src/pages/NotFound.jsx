import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
      
      <h1 className="text-6xl font-bold text-red-600 mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6">
        The page <span className="font-semibold text-black">{location.pathname}</span> does not exist.
      </p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
}
