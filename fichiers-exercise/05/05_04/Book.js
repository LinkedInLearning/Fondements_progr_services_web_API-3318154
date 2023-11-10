const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  isbn: {
    type: String,
    unique: true,
  },
  language: {
    type: String,
  },
  category: {
    type: String,
    enum: [
      "Fiction",
      "Non-Fiction",
      "Science",
      "History",
      "Biography",
      "Fantasy",
      "Thriller",
      "Romance",
    ],
  },
  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Book", BookSchema);
