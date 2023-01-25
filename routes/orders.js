//express importieren
const express = require("express");
//Router Instanz mit Router() erstellen
const router = express.Router();
const {
  getAllOrders,
  createOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orders");

//getAll + createOrder
router.route("/orders").get(getAllOrders).post(createOrder);

//getOne + updateOne + deleteOne
router
  .route("/orders/:id")
  .get(getSingleOrder)
  .put(updateOrder)
  .delete(deleteOrder);

module.exports = router;
