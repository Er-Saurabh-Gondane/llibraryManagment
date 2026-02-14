import React from "react";
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
  // Sort by rating and take top 4
  const popular = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to Online Library 📚
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Discover amazing books across multiple categories.
          Read, explore and find your next favorite book.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Browse by Category
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white px-8 py-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR BOOKS */}
      <section className="max-w-6xl mx-auto pb-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Books ⭐
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {popular.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

    </div>
  );
}
