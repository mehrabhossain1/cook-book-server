const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());

const recipes = require("./data.json");

app.get("/", (req, res) => {
  res.json({ message: "hello server running" });
});

app.get("/recipes", (req, res) => {
  res.send({ recipes });
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const selectedRecipes = recipes.find((n) => n.id == id);
  res.send(selectedRecipes);
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
