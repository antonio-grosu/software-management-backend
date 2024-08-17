const mongoose = require("mongoose");
const { Schema } = mongoose;

const produsInventarSchema = new Schema({
  nume: String,
  pret: Number,
});

const ProdusInventar = mongoose.model("ProdusInventar", produsInventarSchema);

module.exports = ProdusInventar;
