const Income = require("../models/Income");

const getAll = async (req, res) => {
  try {
    const allIncomes = await Income.find();
    res.json(allIncomes);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getIncome = async (req, res) => {
  try {
    const id = req.params.id;
    const income = await Income.findById(id);
    res.json(income);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createIncome = async (req, res) => {
  try {
    const income = await Income.create(req.body);
    res.json(income);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getAll, getIncome, createIncome };
