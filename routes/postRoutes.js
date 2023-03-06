const express = require("express");
const router = express.Router();
const {
  getBooks,
  setBook,
  updateBook,
  deleteBook,
} = require("../controller/bookController");

router.get("/", getBooks);

router.post("/", setBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;
