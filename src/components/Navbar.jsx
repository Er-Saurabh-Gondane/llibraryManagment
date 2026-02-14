import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          📚 Online Library
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-600 transition`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/books"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-600 transition`
            }
          >
            Browse Books
          </NavLink>

          <NavLink
            to="/add-book"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-600 transition`
            }
          >
            Add Book
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
