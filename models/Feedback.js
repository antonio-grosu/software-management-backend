const mongoose = require("mongoose");
const { Schema } = mongoose;

const feedbackSchema = new Schema({
  nume_complet: String,
  text: String,
  rating: {
    type: Number,
    default: 5,
  },
  data: {
    type: Date,
    default: () => {
      return new Date();
    },
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
