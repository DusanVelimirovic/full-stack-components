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

// Get exact book according to ID
export const getExactBook = (req, res) => {
  const bookId = req.params.id;
  // Define Query
  const q = "SELECT * FROM books WHERE id = ?";

  // Send query to DB

  db.query(q, [bookId], (err, result) => {
    if (err) return res.status(500).json(err);
    return res.json(result);
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

// Delete book from DB
export const deleteBook = (req, res) => {
  // Get books id
  const bookId = req.params.id;

  // Define delete query
  const q = " DELETE FROM books WHERE id = ? ";

  // Send query to DB
  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};

// Update book in DB
export const updateBook = (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};
