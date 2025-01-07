const express = require("express");
const {
  getAccounts,
  getAccountDetails,
  getAllAccountsForBrand,
  createAccount,
  activateAccount,
  restrictAccount,
  suspendAccount,
  cancelAllOrders,
  closeAllPositions,
  changeUserGroup,
  getAllAccountsJwt,
  getAllPositionJwt,
  getAllOrdersJwt,
} = require("../controllers/accounts.controller");

const router = express.Router();

// Define the route for fetching account data
router.post("/get-accounts", getAccounts);
router.post("/get-all-accounts", getAllAccountsJwt);
router.post("/get-account-details", getAccountDetails);
router.post("/get-all-accounts-for-brand", getAllAccountsForBrand);
router.post("/create-account", createAccount);
router.put("/activate-account", activateAccount);
router.put("/restrict-account", restrictAccount);
router.put("/suspend-account", suspendAccount);
router.post("/get-all-positions/:accountId", getAllPositionJwt);
router.post("/get-all-orders/:accountId", getAllOrdersJwt);
router.put("/change-user-group", changeUserGroup);
router.post("/cancel-all-orders", cancelAllOrders);
router.post("/close-all-positions", closeAllPositions);

module.exports = router;
