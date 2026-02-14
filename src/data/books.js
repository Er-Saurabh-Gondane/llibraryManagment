const books = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description: "A science fiction epic set on the desert planet Arrakis, exploring politics, power, and destiny.",
    rating: 4.9,
    image: "https://covers.openlibrary.org/b/id/8101356-L.jpg"
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "Bilbo Baggins embarks on an unexpected journey filled with dragons, treasure, and adventure.",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
  },
  {
    id: 3,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    category: "Thriller",
    description: "A mystery thriller involving secret societies, hidden symbols, and religious conspiracies.",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/id/240726-L.jpg"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    description: "A classic love story exploring manners, marriage, and misunderstandings in 19th-century England.",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/id/8226191-L.jpg"
  },
  {
    id: 5,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    description: "A practical guide to building good habits and breaking bad ones for lasting success.",
    rating: 4.9,
    image: "https://covers.openlibrary.org/b/id/10594758-L.jpg"
  },
  {
    id: 6,
    title: "1984",
    author: "George Orwell",
    category: "Dystopian",
    description: "A chilling depiction of a totalitarian society under constant surveillance.",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Adventure",
    description: "A young shepherd travels in search of treasure and discovers his personal legend.",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/id/8231996-L.jpg"
  },
  {
    id: 8,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    category: "Mystery",
    description: "A journalist and a hacker uncover dark family secrets in Sweden.",
    rating: 4.4,
    image: "https://covers.openlibrary.org/b/id/8235116-L.jpg"
  },
  {
    id: 9,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    description: "A brief history of humankind, from the Stone Age to the modern era.",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/id/8167890-L.jpg"
  },
  {
    id: 10,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Psychological Thriller",
    description: "A woman shoots her husband and then refuses to speak — a gripping psychological mystery.",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/id/9259251-L.jpg"
  },
  {
    id: 11,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Finance",
    description: "A personal finance book teaching wealth-building through mindset and investment.",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/id/8091016-L.jpg"
  },
  {
    id: 12,
    title: "The Shining",
    author: "Stephen King",
    category: "Horror",
    description: "A family heads to an isolated hotel where dark forces influence the father.",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/id/8231856-L.jpg"
  },
  {
    id: 13,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    category: "Biography",
    description: "The biography of Apple co-founder Steve Jobs and his journey of innovation.",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/id/8375041-L.jpg"
  },
  {
    id: 14,
    title: "The Fault in Our Stars",
    author: "John Green",
    category: "Drama",
    description: "A touching love story between two teenagers battling cancer.",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/id/7269251-L.jpg"
  },
  {
    id: 15,
    title: "The Martian",
    author: "Andy Weir",
    category: "Sci-Fi",
    description: "An astronaut stranded on Mars must use science and wit to survive.",
    rating: 4.8,
    image: "https://covers.openlibrary.org/b/id/8374956-L.jpg"
  },
  {
    id: 16,
    title: "Becoming",
    author: "Michelle Obama",
    category: "Autobiography",
    description: "Michelle Obama shares her inspiring journey from childhood to the White House.",
    rating: 4.9,
    image: "https://covers.openlibrary.org/b/id/9258578-L.jpg"
  },
  {
    id: 17,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "Spiritual",
    description: "A guide to spiritual enlightenment and living in the present moment.",
    rating: 4.6,
    image: "https://covers.openlibrary.org/b/id/8097442-L.jpg"
  },
  {
    id: 18,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    category: "Young Adult",
    description: "A dystopian competition where teenagers fight for survival.",
    rating: 4.7,
    image: "https://covers.openlibrary.org/b/id/8235110-L.jpg"
  },
  {
    id: 19,
    title: "Gone Girl",
    author: "Gillian Flynn",
    category: "Crime",
    description: "A twisted tale of marriage, deception, and media frenzy.",
    rating: 4.5,
    image: "https://covers.openlibrary.org/b/id/8231992-L.jpg"
  },
  {
    id: 20,
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
    description: "A handbook of agile software craftsmanship teaching how to write maintainable code.",
    rating: 4.9,
    image: "https://covers.openlibrary.org/b/id/9610923-L.jpg"
  },
  {
  id: 21,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  category: "Classic",
  description: "A tragic story of love, ambition, and the American Dream set in the Roaring Twenties.",
  rating: 4.6,
  image: "https://covers.openlibrary.org/b/id/7352163-L.jpg"
},
{
  id: 22,
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  category: "Fantasy",
  description: "A young boy discovers he is a wizard and begins his magical journey at Hogwarts.",
  rating: 4.9,
  image: "https://covers.openlibrary.org/b/id/7984916-L.jpg"
},
{
  id: 23,
  title: "The Subtle Art of Not Giving a F*ck",
  author: "Mark Manson",
  category: "Self-Help",
  description: "A counterintuitive guide to living a good life by focusing only on what truly matters.",
  rating: 4.5,
  image: "https://covers.openlibrary.org/b/id/8370225-L.jpg"
},
{
  id: 24,
  title: "Brave New World",
  author: "Aldous Huxley",
  category: "Dystopian",
  description: "A futuristic society driven by technology and conditioning where individuality is suppressed.",
  rating: 4.7,
  image: "https://covers.openlibrary.org/b/id/8773272-L.jpg"
},
{
  id: 25,
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  category: "Drama",
  description: "A coming-of-age novel following Holden Caulfield’s journey through teenage rebellion.",
  rating: 4.3,
  image: "https://covers.openlibrary.org/b/id/8231851-L.jpg"
},
{
  id: 26,
  title: "The Lean Startup",
  author: "Eric Ries",
  category: "Business",
  description: "A guide for entrepreneurs on building successful startups through innovation and feedback.",
  rating: 4.6,
  image: "https://covers.openlibrary.org/b/id/6979867-L.jpg"
},
{
  id: 27,
  title: "Dracula",
  author: "Bram Stoker",
  category: "Horror",
  description: "A gothic horror novel introducing the legendary vampire Count Dracula.",
  rating: 4.4,
  image: "https://covers.openlibrary.org/b/id/8231858-L.jpg"
},
{
  id: 28,
  title: "The Book Thief",
  author: "Markus Zusak",
  category: "Historical",
  description: "A powerful story of a young girl in Nazi Germany who finds solace in stealing books.",
  rating: 4.8,
  image: "https://covers.openlibrary.org/b/id/8231994-L.jpg"
},
{
  id: 29,
  title: "The Road",
  author: "Cormac McCarthy",
  category: "Post-Apocalyptic",
  description: "A father and son journey through a bleak and devastated world struggling to survive.",
  rating: 4.5,
  image: "https://covers.openlibrary.org/b/id/7222241-L.jpg"
},
{
  id: 30,
  title: "Deep Work",
  author: "Cal Newport",
  category: "Productivity",
  description: "A guide to achieving focused success in a distracted world through deep concentration.",
  rating: 4.8,
  image: "https://covers.openlibrary.org/b/id/8375045-L.jpg"
}

];
export default books;