const getAll = async (req, res) => {
  try {
    res.json("Toti Angajatii");
  } catch (error) {
    res.status(500).send("Eroare");
  }
};
const addAngajat = async (req, res) => {
  try {
    const angajat = req.body || "Angajat";
    res.json(angajat);
  } catch (error) {
    res.status(500).send("Eroare");
  }
};

const getAngajat = async (req, res) => {
  try {
    const angajat = req.params.id;
    res.json({ angajat: `${angajat}` });
  } catch (error) {
    res.status(500).send("Eroare");
    console.log(error);
  }
};

const editAngajat = async (req, res) => {
  try {
    const angajat = req.params.id;
    res.json({ edited: `${angajat}` });
  } catch (error) {
    res.status(500).send("Eroare");
  }
};

const removeAngajat = async (req, res) => {
  try {
    const angajat = req.params.id;
    res.json({ removed: `${angajat}` });
  } catch (error) {}
};
module.exports = { getAll, getAngajat, addAngajat, editAngajat, removeAngajat };
