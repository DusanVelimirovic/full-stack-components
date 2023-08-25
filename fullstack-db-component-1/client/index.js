import express from "express";
import cors from "cors";
import morgan from "morgan";
import fetch from "node-fetch";
import {} from "dotenv/config";

const app = express();

app.use(morgan("tiny"));
app.use(cors());

// JSON middleware
app.use(express.json());

// Fetch data from DB
app.get("/api/burgers", (req, res) => {
  const url = process.env.ENDPOINT;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token": process.env.astraTOKEN,
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((json) => res.json(json))
    .catch((err) => console.log("error:" + err));
});

// Handle backend errors
function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not Found, wrong place");
  next(error);
}

function errorHandler(error, req, res) {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(8800, () => {
  console.log("Connected to backend.");
});
