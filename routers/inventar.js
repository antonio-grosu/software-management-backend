const express = require("express");
const router = express.Router();
const {
  createProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getAll,
} = require("../controllers/inventar_controllers");

router
  .get("/", getAll)
  .get("/:id", getProduct)
  .post("/:id", createProduct)
  .put("/:id", editProduct)
  .delete("/:id", deleteProduct);

module.exports = router;
