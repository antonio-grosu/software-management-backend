const express = require("express");
const router = express.Router();
const {
  getAll,
  getAngajat,
  addAngajat,
  editAngajat,
  removeAngajat,
} = require("../controllers/angajati_controllers");

router
  .get("/", getAll)
  .post("/", addAngajat)
  .get("/:id", getAngajat)
  .put("/:id", editAngajat)
  .delete("/:id", removeAngajat);
module.exports = router;
