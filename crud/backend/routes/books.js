// Default module for controlling Books endpoint

// import Express module
import express from "express";

// Import controller function
import {
  getBooks,
  postBook,
  deleteBook,
  updateBook,
} from "../controllers/book.js";

// Create router object
const router = express.Router();

// Handle get request
// Get all Books
router.get("/", getBooks);

// Handle post request
// Post new book
router.post("/", postBook);

// Handle delete request
// Delete book
router.delete("/:id", deleteBook);

// Handle update request
// Update book
router.put("/:id", updateBook);

export default router;
