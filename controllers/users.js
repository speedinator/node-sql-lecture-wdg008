const pool = require("../db");

//1. Funktion definieren (async!)
//2. Try
//2.1 Wenn notwendig auf Daten aus req.body oder req.params zugreifen
//2.2 SQL Query in pool.query() einfügen
//2.3 Response zurückschicken
//3. Catch für Fehler

const getAllUsers = async (req, res) => {
  try {
    const { rows: users } = await pool.query("SELECT * FROM users");
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(404).send(`something went wrong. ${err.message}`);
  }
};

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;
    const {
      rows: [newUser],
    } = await pool.query(
      "INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *;",
      [name, email, password]
    );
    console.log(newUser);
    res.status(202).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(404).send(`something went wrong. ${err.message}`);
  }
};

const getSinglUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      rows: [singleUser],
    } = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    console.log(singleUser);
    res.status(200).json(singleUser);
  } catch (err) {
    console.log(err);
    res.status(404).send(`something went wrong. ${err.message}`);
  }
};

const updateUser = async (req, res) => {
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

const deleteUser = async (req, res) => {
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
  getAllUsers,
  createUser,
  getSinglUser,
  updateUser,
  deleteUser,
};
