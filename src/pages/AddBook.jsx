import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/bookSlice";
import Navbar from "../components/Navbar";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    description: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (
      formData.rating &&
      (Number(formData.rating) < 1 || Number(formData.rating) > 5)
    ) {
      newErrors.rating = "Rating must be between 1 and 5";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    dispatch(
      addBook({
        ...formData,
        id: Date.now(),
        rating: Number(formData.rating),
      })
    );

    navigate("/books");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-700">
      <Navbar />

      <div className="flex justify-center items-center py-20 px-4">
        <div className="w-full max-w-2xl bg-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/30">

          <h2 className="text-3xl font-bold text-white text-center mb-8">
            📚 Add New Book
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Title */}
            <div>
              <input
                type="text"
                name="title"
                placeholder="Book Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              {errors.title && (
                <p className="text-red-300 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Author */}
            <div>
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              {errors.author && (
                <p className="text-red-300 text-sm mt-1">{errors.author}</p>
              )}
            </div>

            {/* Category Dropdown */}
            <div>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              >
                <option value="">Select Category</option>
                <option>Fiction</option>
                <option>Non-Fiction</option>
                <option>Sci-Fi</option>
                <option>History</option>
                <option>Mystery</option>
              </select>
              {errors.category && (
                <p className="text-red-300 text-sm mt-1">{errors.category}</p>
              )}
            </div>

            {/* Image */}
            <div>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              {errors.image && (
                <p className="text-red-300 text-sm mt-1">{errors.image}</p>
              )}
            </div>

            {/* Image Preview */}
            {formData.image && (
              <div className="flex justify-center">
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-32 h-40 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Rating */}
            <div>
              <input
                type="number"
                name="rating"
                placeholder="Rating (1-5)"
                value={formData.rating}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              {errors.rating && (
                <p className="text-red-300 text-sm mt-1">{errors.rating}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <textarea
                name="description"
                placeholder="Description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              {errors.description && (
                <p className="text-red-300 text-sm mt-1">{errors.description}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg shadow-lg hover:scale-105 hover:bg-yellow-300 transition transform duration-300"
            >
              🚀 Add Book
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
