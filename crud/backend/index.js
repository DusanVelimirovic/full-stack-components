import express from "express";
import { db } from "./connection.js";

// Import routes
import booksRoute from "./routes/books.js";

const app = express();

// JSON middleware
app.use(express.json());

// Connect with DB
//const db = connection.connect();
console.log(db);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define routes

// Books route
app.use("/api/books", booksRoute);

app.listen(8800, () => {
  console.log("Connected to backend.");
});
