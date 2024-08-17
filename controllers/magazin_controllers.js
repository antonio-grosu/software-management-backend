const ProdusMagazin = require("../models/ProdusMagazin");

const createProduct = async (req, res) => {
  try {
    const product = await ProdusMagazin.create(req.body);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProdusMagazin.findOneAndDelete({ _id: id });
    res.json({ removed: `${product}` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const editProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const product = await ProdusMagazin.findByIdAndUpdate(id, updatedData, {
      new: True,
    });
    res.json({ edited: `${product}` });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProdusMagazin.find({ _id: id });
    res.json(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAll = async (req, res) => {
  try {
    const allProducts = await ProdusMagazin.find();
    res.json(allProducts);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getAll,
};
