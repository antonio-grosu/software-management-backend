const mongoose = require("mongoose");
const { Schema } = mongoose;

const feedbackSchema = new Schema({
  nume_complet: String,
  feedback: String,
  rating: {
    type: Number,
    default: 5,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
