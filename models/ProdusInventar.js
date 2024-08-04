const mongoose = require("mongoose");
const { Schema } = mongoose;

const produsInventarSchema = new Schema({
  nume: String,
  cantitate: Number,
  id: Number,
  pret: Number,
  descriere: String,
});

const ProdusInventar = mongoose.model("ProdusInventar", produsInventarSchema);
