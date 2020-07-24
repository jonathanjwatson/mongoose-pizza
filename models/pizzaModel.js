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
});

const Pizza = mongoose.model("Pizza", PizzaSchema);

module.exports = Pizza;
