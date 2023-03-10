const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const { fileURLToPath } = require("url");

const post = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const { errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();

mongoose.connect(
  "mongodb+srv://nijatzaman:1234_Jerusalem@cluster0.loje51j.mongodb.net/goodreads-clone"
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/books", require("./routes/postRoutes"));
app.use("/api/user", userRouter);
app.use(errorHandler);
app.listen(post, () => console.log(`Server started on ${post}`));
