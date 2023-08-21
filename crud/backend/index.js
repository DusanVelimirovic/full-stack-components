import express from "express";
import connection from "./connection.js";

const app = express();

// Connect with DB
const db = connection.connect();
console.log(db);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
