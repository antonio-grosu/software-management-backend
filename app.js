const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./db/index");
require("dotenv").config();

//routers
const angajati_router = require("./routers/angajati");
const crm_router = require("./routers/crm");
const magazin_router = require("./routers/magazin");
const inventar_router = require("./routers/inventar");

app.use("/angajati", angajati_router);
app.use("/crm", crm_router);
app.use("/magazin", magazin_router);
app.use("/inventar", inventar_router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/assets/index.html"));
});

const start = async () => {
  try {
    connectDB(process.env.DB_URL);
    app.listen(3000, () => {
      console.log("🟢 Server listening on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
