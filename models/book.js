import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: {
    type: String,
    enum: ["fiction", "comedy", "horror"],
  },
  image: {
    type: String,
    required: true,
  },
  isbn: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
