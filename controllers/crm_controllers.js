const Feedback = require("../models/Feedback");

const getAll = async (req, res) => {
  try {
    const allFeedbacks = await Feedback.find();
    res.json(allFeedbacks);
  } catch (error) {
    res.status(500).send(error);
  }
};

const sendFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.create(req.body);
    res.json(feedback);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getFeedback = async (req, res) => {
  try {
    const id = req.params.id;
    const feedback = await Feedback.find({ _id: id });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getAll, sendFeedback };
