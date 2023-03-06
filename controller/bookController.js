const asyncHandler = require("express-async-handler");
const Book = require("../models/bookModel");

//GET
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({});

  res.status(200).json(books);
});
//POST

const setBook = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a json field");
  }

  const book = await Book.create({
    title: req.body.title,
    author: req.body.author,
  });
  res.status(200).json(book);
});
//PUT
const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(400);
    throw new Error("Book not found");
  }

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedBook);
});
//DELTE
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    res.status(400);
    throw new Error("Book not found");
  }
  await book.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBooks,
  setBook,
  updateBook,
  deleteBook,
};
