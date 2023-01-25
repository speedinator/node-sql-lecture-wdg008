const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  getSinglUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

//Route = WO, Method = WANN, Controller = WAS
router.route("/users").get(getAllUsers).post(createUser);

router.route("/users/:id").get(getSinglUser).put(updateUser).delete(deleteUser);

module.exports = router;
