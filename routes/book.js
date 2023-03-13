import express from "express";
import { getBooks, getBooksByCategory, addBook } from "../controllers/book.js";

const router = express.Router();

router.get("/book", getBooks);
router.get("/book/:category", getBooksByCategory);
router.post("/books", addBook);

export default router;
