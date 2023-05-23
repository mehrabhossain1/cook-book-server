const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const recipes = require("./data.json");

app.get("/", (req, res) => {
  res.json({ message: "hello server running" });
});

app.get("/recipes", (req, res) => {
  res.send({ recipes });
});

app.get("recipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id == 0) {
    res.send(recipes);
  } else {
    const recipe = recipes.filter((n) => parseInt(n.id) === id);
    res.send(recipe);
  }
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
