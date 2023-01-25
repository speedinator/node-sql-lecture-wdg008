const pool = require("../db");

const getAllOrders = async (req, res) => {
  try {
    const { rows: orders, rowCount } = await pool.query("SELECT * FROM orders");
    console.log(`The rowCount is: ${rowCount}`);
    // console.log(req);
    res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    res.status(404).send(`something went wrong. ${err.message}`);
  }
};

const createOrder = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(404).send(`something went wrong. ${err.message}`);
  }
};

const getSingleOrder = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(404).send(`something went wrong. ${err.message}`);
  }
};

const updateOrder = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(404).send(`something went wrong. ${err.message}`);
  }
};

const deleteOrder = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(404).send(`something went wrong. ${err.message}`);
  }
};

module.exports = {
  getAllOrders,
  createOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder,
};
