const Angajat = require("../models/Angajat");

const getAll = async (req, res) => {
  try {
    const result = await Angajat.find();
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};
const addAngajat = async (req, res) => {
  try {
    const angajat = await Angajat.create(req.body);
    res.json(angajat);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

const getAngajat = async (req, res) => {
  try {
    const id = req.params.id;
    const angajat = await Angajat.find({ _id: id });
    res.json({ angajat: `${angajat}` });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

const editAngajat = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const angajat = await Angajat.findByIdAndUpdate(id, updatedData, {
      new: True,
    });
    res.json({ edited: `${angajat}` });
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeAngajat = async (req, res) => {
  try {
    const id = req.params.id;
    const angajat = await Angajat.findByIdAndDelete(id);
    res.json({ removed: `${angajat}` });
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = { getAll, getAngajat, addAngajat, editAngajat, removeAngajat };
