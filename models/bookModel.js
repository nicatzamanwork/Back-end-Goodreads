const userModel = require("./userModel");
const { Schema, default: mongoose } = require("mongoose");

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },

  rating: { type: Number },
  imageUrl: { type: String },
  userModel: {
    type: Schema.Types.ObjectId,
    ref: "userModel",
  },
});

const bookModel = mongoose.model("Book", bookSchema);

module.exports = {
  bookModel,
};
