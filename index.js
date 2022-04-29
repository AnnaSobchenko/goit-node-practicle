const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { nanoid } = require("nanoid");

const app = express();

let books = [];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello word");
});

app.get("/search", (req, res) => {
  const { lang, key } = req.query;
  res.send(`Hello ${key}  ${lang}`);
});

app.get("/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});

app.post("/save/", (req, res) => {
  const { title, author, id = nanoid() } = req.body;
  console.log("title", title);
  books.push({ title, author, id });
  res.json(books);
});

app.delete("/save/:id", (req, res) => {
  const { id } = req.params;
  books = books.filter((el) => el.id !== id);
  res.json(books);
});

app.patch("/save/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const bookById = books.findIndex((el) => el.id === id);
  res.json( bookById);
//   books[bookById]
});

app.listen(3001, () => {
  console.log("Server running on port: 3001");
});
