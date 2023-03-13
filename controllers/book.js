import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

export const getBooksByCategory = async (req, res) => {
  const { category } = req.params;
  const books = await Book.find({ category });
  res.json(books);
};

export const addBook = async (req, res) => {
  const { title, author, category, isbn } = req.body;

  try {
    const book = new Book({ title, author, category, isbn });
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
