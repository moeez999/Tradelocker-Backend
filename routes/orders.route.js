const express = require("express");
const { getAllOrders } = require("../controllers/order.controller");

const router = express.Router();

// Define the route for fetching orders
router.post("/get-all-orders", getAllOrders);

module.exports = router;
