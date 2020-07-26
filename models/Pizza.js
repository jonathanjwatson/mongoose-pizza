const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PizzaSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Pizza name is required.",
  },
  price: {
    type: String,
    trim: true,
    required: "Pizza price is required.",
  },
  size: {
    type: Number,
  },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
    },
  ],
});

const Pizza = mongoose.model("Pizza", PizzaSchema);

module.exports = Pizza;
