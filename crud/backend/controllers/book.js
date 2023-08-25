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

// Post new Book to DB
export const postBook = (req, res) => {
  // Define insert query
  const q = "INSERT INTO books(`title`, `desc`, `price`,`cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  // Send query to DB
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("New book has been created.");
  });
};
