const mongoose = require("mongoose");
const { Schema } = mongoose;

const incomeSchema = new Schema({
  data: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
  amount: Number,
});

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;
