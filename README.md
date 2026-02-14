# 📚 Library Management App

A simple and functional **Library Management System** built with **React**, **Redux Toolkit**, **React Router**, and **Tailwind CSS**.  
This project demonstrates core CRUD functionality — browsing books, viewing details, searching, filtering by category, adding new books, and routing with a 404 page.

---

## 🧩 Features

### 🏠 Home Page
- Hero section with welcome message.
- Browse book categories.
- Popular books displayed in card format.

### 📚 Browse Books
- Displays all books from the library.
- Filter books by category using dynamic routing (`/books/:category`).
- Search bar to filter books by title or author.
- Each book card includes a "View Details" button.

### 📖 Book Details
- Dynamic book detail page (`/book/:id`).
- Shows title, author, description, rating and cover.
- Link to navigate back to the Browse Books page.

### ➕ Add Book
- Form to add a new book.
- Uses Redux to manage global state.
- Form validation to ensure all fields are filled.
- After submission, redirects to Browse Books.
- Newly added books appear at the top of the list.

### ❌ 404 Page
- Displays invalid route URL.
- Includes link to go back to Home.
- Does **not display** the Navbar.

---

## 🛠 Tech Stack

This project is built with:

- ⚛️ **React** – UI library  
- 📦 **Redux Toolkit** – State management  
- 🔁 **React Router** – Routing  
- 💨 **Tailwind CSS** – Utility-first styling  
- 📁 **Vite** – Fast React tooling  

---

## 🚀 Quick Start

### 1. Clone

```bash
git clone https://github.com/Er-Saurabh-Gondane/llibraryManagment.git
cd llibraryManagment
src/
 ├── components/
 │     ├── Navbar.jsx
 │     └── BookCard.jsx
 ├── data/
 │     └── books.js
 ├── pages/
 │     ├── Home.jsx
 │     ├── BrowseBooks.jsx
 │     ├── BookDetails.jsx
 │     ├── AddBook.jsx
 │     └── NotFound.jsx
 ├── redux/
 │     ├── booksSlice.js
 │     └── store.js
 ├── App.jsx
 ├── main.jsx
 └── index.css
