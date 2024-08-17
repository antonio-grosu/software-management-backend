const ProdusInventar = require("../models/ProdusInventar");

const createProduct = async (req, res) => {
  try {
    const product = await ProdusInventar.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProdusInventar.findOneAndDelete({ _id: id });
    res.json({ removed: `${product}` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const editProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProdusInventar.findByIdAndUpdate(id, updatedData, {
      new: True,
    });
    res.json({ edited: `${product}` });
  } catch (error) {
    res.status(500).send("Eroare");
  }
};

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProdusInventar.find({ _id: id });
    res.json(product);
  } catch (error) {
    res.status(500).send("Eroare");
  }
};

const getAll = async (req, res) => {
  try {
    const allProducts = await ProdusInventar.find();
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
