// Default module for controlling Books endpoint

// import Express module
import express from "express";

// Import controller function
import { getBooks } from "../controllers/book.js";

// Create router object
const router = express.Router();

// Handle get request
// Get all Books
router.get("/", getBooks);

export default router;
