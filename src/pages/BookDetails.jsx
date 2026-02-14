import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import books from "../data/books";

export default function BookDetails() {
  const { id } = useParams();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Book Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      
      <Navbar />

      <section className="max-w-4xl mx-auto py-16 px-6 bg-white shadow-lg rounded-lg mt-10">
        
        <div className="flex flex-col md:flex-row gap-8">
          
          <img
            src={book.image}
            alt={book.title}
            className="w-full md:w-1/3 rounded-lg object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold mb-4">
              {book.title}
            </h2>

            <p className="text-lg text-gray-700 mb-2">
              <strong>Author:</strong> {book.author}
            </p>

            <p className="text-yellow-500 mb-4">
              ⭐ {book.rating}
            </p>

            <p className="text-gray-600 mb-6">
              {book.description}
            </p>

            <Link
              to="/books"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Back to Browse
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
