const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/ingredients", (req, res) => {
  db.Ingredient.find({})
    .then((foundIngredients) => {
      res.json({
        error: false,
        data: foundIngredients,
        message: "All ingredients retrieved.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to retrieve all ingredients.",
      });
    });
});

router.post("/api/ingredients", (req, res) => {
  // Sanitize req.body inputs
  if (!req.body.name || !req.body.name.trim().length) {
    return res.status(400).json({
      error: true,
      data: null,
      message: "Please enter valid information.",
    });
  }

  db.Ingredient.create(req.body)
    .then((createdIngredient) => {
      res.json({
        error: false,
        data: createdIngredient,
        message: "Successfully created new ingredient.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new ingredient.",
      });
    });
});

module.exports = router;
