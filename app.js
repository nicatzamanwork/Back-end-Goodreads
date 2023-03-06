const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/userRouter"); // require the user router module

const post = process.env.PORT || 5000;

const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

mongoose.connect(
  "mongodb+srv://nijatzaman:1234_Jerusalem@cluster0.loje51j.mongodb.net/goodreads-clone"
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/books", require("./routes/postRoutes"));

app.use("/api/users", userRouter);
app.use(errorHandler);
app.listen(post, () => console.log(`Server started on ${post}`));
