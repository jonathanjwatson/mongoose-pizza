const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PizzaController = require("./controllers/pizzaController");
const IngredientController = require("./controllers/ingredientController");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mongoosepizza",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use(PizzaController);
app.use(IngredientController);

app.use(express.static(__dirname + "/client/build/"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
