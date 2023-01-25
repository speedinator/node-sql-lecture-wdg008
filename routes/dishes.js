const express = require("express");
const router = express.Router();
const {
  getAllDishes,
  createDish,
  getSinglDish,
  updateDish,
  deleteDish,
} = require("../controllers/dishes");

router.route("/dishes").get(getAllDishes).post(createDish);

router.route("/dishes/:id").get(getSinglDish).put(updateDish).delete(deleteDish);

module.exports = router;
