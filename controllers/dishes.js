const pool = require("../db");

//1. Funktion definieren (async!)
//2. Try
//2.1 Wenn notwendig auf Daten aus req.body oder req.params zugreifen
//2.2 SQL Query in pool.query() einfügen
//2.3 Response zurückschicken
//3. Catch für Fehler

const getAllDishes = async (req, res) => {
  try {
    const { rows: dishes } = await pool.query("SELECT * FROM dishes");
    res.status(200).json(dishes);
  } catch (err) {
    console.log(err);
    res.status(404).send(`something went wrong. ${err.message}`);
  }
};

const createDish = async (req, res) => {
  try {
    console.log(req.body);
    const { title, desc_s, Url } = req.body;
    const {
      rows: [newDish],
    } = await pool.query(
      "INSERT INTO dishes(title, desc_s, Url) VALUES ($1, $2, $3) RETURNING *;",
      [title, desc_s, Url]
    );
    console.log(newDish);
    res.status(202).json(newDish);
  } catch (err) {
    console.log(err);
    res.status(404).send(`something went wrong. ${err.message}`);
  }
};

const getSinglDish = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      rows: [singleDish],
    } = await pool.query("SELECT * FROM dishes WHERE id=$1", [id]);
    console.log(singleDish);
    res.status(200).json(singleDish);
  } catch (err) {
    console.log(err);
    res.status(404).send(`something went wrong. ${err.message}`);
  }
};

const updateDish = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const {
      rows: [updatedUser],
    } = await pool.query(
      "UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4 RETURNING*",
      [name, email, password, id]
    );
    console.log(updatedUser);
    res
      .status(201)
      .send(`User with the id ${updatedUser.id} has been updated.`);
  } catch (err) {
    console.log(err);
    res.status(404).send(`something went wrong. ${err.message}`);
  }
};

const deleteDish = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      rows: [deletedUser],
    } = await pool.query("DELETE FROM users WHERE id=$1 RETURNING *", [id]);
    res.status(200).send(`User with the id ${id} has been deleted.`);
    console.log(deletedUser);
  } catch (err) {
    console.log(err);
    res.status(404).send(`something went wrong. ${err.message}`);
  }
};

module.exports = {
  getAllDishes,
  createDish,
  getSinglDish,
  updateDish,
  deleteDish,
};
