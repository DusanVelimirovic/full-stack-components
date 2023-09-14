import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { db } from "./connection.js";

// Import routes
import booksRoute from "./routes/books.js";
import authRoutes from "./routes/auth.js";

const app = express();

// Allow access to client side
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// JSON middleware
app.use(express.json());

//CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

// Connect with DB
//const db = connection.connect();
console.log(db);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define routes

// Books route
app.use("/api/books", booksRoute);
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
  console.log("Connected to backend.");
});
