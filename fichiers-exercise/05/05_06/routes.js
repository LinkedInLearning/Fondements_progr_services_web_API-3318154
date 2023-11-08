const express = require("express");
const router = express.Router();
const booksData = require("./books.json");
const Book = require("./Book");

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Add a book
router.post("/", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// add books to DB
router.post("/create", async (req, res) => {
  try {
    // Check if books already exist in the database
    const existingBooks = await Book.find();
    if (existingBooks.length > 0) {
      return res.status(400).send({
        message:
          "Books already exist in the database. Clear the database before adding from JSON.",
      });
    }

    // Add books from JSON to the database
    const addedBooks = await Book.insertMany(booksData);
    res.status(201).json({
      message: "Books successfully added to the database.",
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Update a book
router.patch("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send({ message: "Book not found" });

    book = { ...book, ...req.body };

    const updatedBook = await book.save();
    res.json(updatedBook);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Delete a book
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send({ message: "Book not found" });

    await book.remove();
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
