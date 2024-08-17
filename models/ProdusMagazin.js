const mongoose = require("mongoose");
const { Schema } = mongoose;

const produsMagazinSchema = new Schema({
  nume: String,
  pret: Number,
  descriere: String,
});

const ProdusMagazin = mongoose.model("ProdusMagazin", produsMagazinSchema);

module.exports = ProdusMagazin;
