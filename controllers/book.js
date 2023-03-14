import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBooksByCategory = async (req, res) => {
  const { category } = req.params;
  console.log("category", category);
  if (!["fiction", "comedy", "horror"].includes(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }
  const books = await Book.find({ category });
  res.json(books);
};

export const addBook = async (req, res) => {
  const { title, author, category, isbn, image } = req.body;

  try {
    const book = new Book({ title, author, category, isbn, image });
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
