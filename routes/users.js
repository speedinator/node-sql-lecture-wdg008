const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  getSinglUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.route("/users").get(getAllUsers).post(createUser);

router.route("/users/:id").get(getSinglUser).put(updateUser).delete(deleteUser);

// const {
//   getAllDishes,
//   createDish,
//   getSinglDish,
//   updateDish,
//   deleteDish,
// } = require("../controllers/dishes");

// router.route("/dishes").get(getAllDishes).post(createDish);

// router.route("/dishes/:id").get(getSinglDish).put(updateDish).delete(deleteDish);


module.exports = router;
