// Import internal modules
import { db } from "../connection.js";

// Get Books from DB
export const getBooks = (req, res) => {
  // Define query
  const q = `SELECT * FROM books`;

  // Send query to DB
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
