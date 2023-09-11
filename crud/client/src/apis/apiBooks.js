// Fetching book from DB
//import { useEffect } from "react";
import axios from "axios";

// Book API
export const BookAPI = {
  get: async function (bookId) {
    const response = await axios.get(
      `http://localhost:8800/api/books/${bookId}`
    );
    return response;
  },
  getAll: async function () {
    const response = await axios.get("http://localhost:8800/api/books");
    return response;
  },
  update: async function (bookId, book) {
    const response = await axios.put(
      `http://localhost:8800/api/books/${bookId}`,
      book
    );
    return response;
  },
  delete: async function (id) {
    await axios.delete(`http://localhost:8800/api/books/${id}`);
  },
  create: async function (book) {
    await axios.post("http://localhost:8800/api/books", book);
  },
};
