const getAll = async (req, res) => {
  try {
    res.json("Feedbacks");
  } catch (error) {
    res.status(500).send("Eroare");
  }
};

const sendFeedback = async (req, res) => {
  try {
    const feedback = req.body;
    res.json(feedback);
  } catch (error) {
    res.status(500).send("Eroare");
  }
};

module.exports = { getAll, sendFeedback };
