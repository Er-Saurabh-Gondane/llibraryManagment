import React from "react";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">
      
      {/* Book Image */}
      <img
        src={book.image}
        alt={book.title}
        className="h-52 w-full object-cover"
      />

      {/* Book Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          {book.title}
        </h3>

        <p className="text-sm text-gray-600 mb-2">
          by {book.author}
        </p>

        <p className="text-yellow-500 font-semibold mb-3">
          ⭐ {book.rating}
        </p>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
}
