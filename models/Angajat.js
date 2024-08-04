const mongoose = require("mongoose");
const { Schema } = mongoose;

const angajatSchema = new Schema({
  nume: String,
  prenume: String,
  zile_concediu: {
    type: Number,
    default: 21,
  },
  salariu: {
    type: Number,
    default: 3000,
  },
});

const Angajat = mongoose.model("Angajat", angajatSchema);

module.exports = Angajat;
