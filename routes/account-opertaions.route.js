const express = require("express");
const {
  depositToAccount,
  withdrawFromAccount,
  addCreditToAccount,
} = require("../controllers/accounts-operations.controller");

const router = express.Router();

// Define the route for depositing to an account
router.post("/deposit-to-account", depositToAccount);
router.post("/withdraw-from-account", withdrawFromAccount);
router.post("/add-credit-to-account", addCreditToAccount);

module.exports = router;
