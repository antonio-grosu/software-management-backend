const express = require("express");
const router = express.Router();
const { getAll, sendFeedback } = require("../controllers/crm_controllers");

router.get("/", getAll).post("/", sendFeedback);

module.exports = router;
