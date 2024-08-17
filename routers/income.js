const express = require("express");
const router = express.Router();

const {
  getAll,
  getIncome,
  createIncome,
} = require("../controllers/income_controllers");

router.get("/", getAll).post("/", createIncome).get("/:id", getIncome);

module.exports = router;
