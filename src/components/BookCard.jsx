import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <img
        src={book.image}
        alt={book.title}
        className="h-52 w-full object-cover rounded"
      />

      <h3 className="text-lg font-bold mt-3">{book.title}</h3>
      <p className="text-gray-600 text-sm">by {book.author}</p>

      <p className="text-yellow-500 mt-2">⭐ {book.rating}</p>

     
      <Link
        to={`/book/${book.id}`}
        className="block mt-3 text-center bg-blue-600 text-white py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}
