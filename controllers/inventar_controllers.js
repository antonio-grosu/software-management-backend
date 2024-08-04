const createProduct = async (req, res) => {
  try {
    const product = req.body;
    res.json(product);
  } catch (error) {
    res.status(500).send("Eroare");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = req.params.id;
    res.json(product);
  } catch (error) {
    res.status(500).send("Eroare");
  }
};
const editProduct = async (req, res) => {
  try {
    const product = req.params.id;
    res.json(product);
  } catch (error) {
    res.status(500).send("Eroare");
  }
};

const getProduct = async (req, res) => {
  try {
    const product = req.params.id;
    res.json(product);
  } catch (error) {
    res.status(500).send("Eroare");
  }
};

const getAll = async (req, res) => {
  try {
    res.json("Products");
  } catch (error) {
    res.status(500).send("Eroare");
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getAll,
};
