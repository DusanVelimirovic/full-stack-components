import express from "express";
import cors from "cors";

const app = express();

//CORS middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/users/:id/update", (req, res) => {
  setTimeout(() => {
    res.send(req.body);
  }, [2000]);
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
