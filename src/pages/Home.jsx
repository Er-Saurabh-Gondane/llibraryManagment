import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import books from "../data/books";

const categories = [
  "Fiction",
  "Non-Fiction",
  "Sci-Fi",
  "History",
  "Mystery",
];

export default function Home() {
  const popular = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-700 text-white text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Discover Your Next <span className="text-yellow-300">Favorite Book</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Explore a curated collection of books across genres.
          Learn, grow and enjoy reading like never before.
        </p>

        <Link
          to="/books"
          className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition transform"
        >
          Browse Books
        </Link>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Browse by Category
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/books/${category}`}
              className="bg-white text-center py-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition transform duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {category}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* POPULAR BOOKS */}
      <section className="max-w-6xl mx-auto pb-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Books ⭐
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {popular.map((book) => (
            <div
              key={book.id}
              className="transform hover:scale-105 transition duration-300"
            >
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
