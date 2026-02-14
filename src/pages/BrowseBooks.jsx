import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";

export default function BrowseBooks() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const books = useSelector((state) => state.books.list);

  const categories = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "History",
    "Mystery",
  ];

  // Handle category change
  const handleCategoryChange = (e) => {
    const selected = e.target.value;

    if (selected === "All") {
      navigate("/books");
    } else {
      navigate(`/books/${selected}`);
    }
  };

  let filteredBooks = books;

  // Filter by category (URL based)
  if (category) {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by search
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

        {/* CATEGORY + SEARCH */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 items-center">

          <select
            value={category || "All"}
            onChange={handleCategoryChange}
            className="px-4 py-2 border rounded-lg shadow"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search by title or author..."
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>

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
