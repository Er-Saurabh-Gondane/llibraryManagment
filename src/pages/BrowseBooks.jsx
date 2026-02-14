import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import books from "../data/books";

export default function BrowseBooks() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  // Step 1: Filter by category (if exists)
  let filteredBooks = books;

  if (category) {
    filteredBooks = filteredBooks.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Step 2: Filter by search
  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      
      <Navbar />

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          {category ? `${category} Books` : "All Books"}
        </h2>

        {/* SEARCH BAR */}
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Search by title or author..."
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* BOOK GRID */}
        {filteredBooks.length === 0 ? (
          <p className="text-center text-gray-500">
            No books found.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
