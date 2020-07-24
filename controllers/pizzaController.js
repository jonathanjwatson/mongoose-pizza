const express = require("express");
const router = express.Router();
const Pizza = require("../models/pizzaModel");

router.get("/api/pizzas", (req, res) => {
  Pizza.find({})
    .then((foundPizzas) => {
      res.json({
        error: false,
        data: foundPizzas,
        message: "All pizzas retrieved.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all pizzas.",
      });
    });
});

router.post("/api/pizzas", (req, res) => {
  // Sanitize req.body inputs
  if (
    !req.body.name ||
    !req.body.name.trim().length ||
    !req.body.price ||
    !req.body.price.trim().length
  ) {
    return res.status(400).json({
      error: true,
      data: null,
      message: "Please enter valid information.",
    });
  }

  Pizza.create(req.body)
    .then((createdPizza) => {
      res.json({
        error: false,
        data: createdPizza,
        message: "Successfully created new pizza.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new pizza.",
      });
    });
});

module.exports = router;
