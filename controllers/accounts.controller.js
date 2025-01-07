const dotenv = require("dotenv");
const tradelocker = require("@api/tradelocker");
const { default: axios } = require("axios");
const TRADELOCKER_API_BASE_URL="https://demo.tradelocker.com/backend-api";

const getAccounts = async (req, res) => {
  const {userId} = req.body; // Extract userId from request parameters

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Fetch accounts using the provided userId
    const response = await tradelocker.accountController_getAccounts({
      userId,
    });
    
    // Send the response data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error fetching account data:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

// Function to get all user accounts
const getAllAccountsJwt = async (req, res) => {
  const { accessToken } = req.body;

  // Validate the presence of the accessToken
  if (!accessToken) {
    return res.status(400).json({ error: "Access token is required." });
  }

  try {
    const response = await axios.get(`${TRADELOCKER_API_BASE_URL}/auth/jwt/all-accounts`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Return the fetched accounts
    res.status(200).json(response.data);
  } catch (error) {
    console.error(
      "Error fetching all accounts:",
      error
    );
    res.status(400).json({ error: "Error fetching all accounts."});
  }
};



// Function to fetch account details
const getAccountDetails = async (req, res) => {
  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Fetch account details
    const response = await tradelocker.accountController_getAccountDetails();

    // Log account details to the console
    console.log(response.data);

    // Send the account details back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error fetching account details:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

const getAllAccountsForBrand = async (req, res) => {
  const { offset, limit } = req.body; // Get offset and limit from request body

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Check if offset and limit are provided
    if (offset === undefined || limit === undefined) {
      return res
        .status(400)
        .json({ message: "Offset and limit are required." });
    }

    // Fetch all accounts for the brand with specified offset and limit
    const response = await tradelocker.accountController_getAllAccountsForBrand(
      {
        offset: parseInt(offset, 10), // Ensure offset is an integer
        limit: parseInt(limit, 10), // Ensure limit is an integer
      }
    );

    // Log the accounts data to the console
    console.log(response.data);

    // Send the accounts data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error fetching all accounts for brand:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};
const createAccount = async (req, res) => {
  const { type, userId, accountName, currency, groupId } = req.body; // Get parameters from the request body

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Check if all required fields are provided
    if (!type || !userId || !accountName || !currency || !groupId) {
      return res.status(400).json({
        message:
          "type, userId, accountName, currency, and groupId are required.",
      });
    }

    // Create a new account using the provided parameters
    const response = await tradelocker.accountController_createAccount({
      type,
      userId,
      accountName,
      currency,
      groupId,
    });

    // Log the response data to the console
    console.log(response.data);

    // Send the response data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error creating the account:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

const activateAccount = async (req, res) => {
  const { accountId } = req.body; // Get accountId from request body

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Check if accountId is provided
    if (!accountId) {
      return res.status(400).json({ message: "accountId is required." });
    }

    // Activate the account using the provided accountId
    const response = await tradelocker.accountController_activateAccount({
      accountId,
    });

    // Log the response data to the console
    console.log(response.data);

    // Send the response data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error activating the account:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

// Function to restrict an account
const restrictAccount = async (req, res) => {
  const { accountId } = req.body; // Get accountId from request body

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Check if accountId is provided
    if (!accountId) {
      return res.status(400).json({ message: "accountId is required." });
    }

    // Restrict the account using the provided accountId
    const response = await tradelocker.accountController_restrictAccount({
      accountId,
    });

    // Log the response data to the console
    console.log(response.data);

    // Send the response data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error restricting the account:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

// Function to suspend an account
const suspendAccount = async (req, res) => {
  const { accountId } = req.body; // Get accountId from request body

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Check if accountId is provided
    if (!accountId) {
      return res.status(400).json({ message: "accountId is required." });
    }

    // Suspend the account using the provided accountId
    const response = await tradelocker.accountController_suspendAccount({
      accountId,
    });

    // Log the response data to the console
    console.log(response.data);

    // Send the response data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error suspending the account:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

// Function to cancel all orders for a given account
const cancelAllOrders = async (req, res) => {
  const { accountId } = req.body; // Get accountId from request body

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Check if accountId is provided
    if (!accountId) {
      return res.status(400).json({ message: "accountId is required." });
    }

    // Cancel all orders for the provided accountId
    const response = await tradelocker.accountController_cancelAllOrders({
      accountId,
    });

    // Log the response data to the console
    console.log(response.data);

    // Send the response data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error cancelling all orders:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

// Function to close all positions for a given account
const closeAllPositions = async (req, res) => {
  const { accountId } = req.body; // Get accountId from request body

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Check if accountId is provided
    if (!accountId) {
      return res.status(400).json({ message: "accountId is required." });
    }

    // Close all positions for the provided accountId
    const response = await tradelocker.accountController_closeAllPositions({
      accountId,
    });

    // Log the response data to the console
    console.log(response.data);

    // Send the response data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error closing all positions:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

// Function to change the user group for a given account
const changeUserGroup = async (req, res) => {
  const { accountId, newGroupId } = req.body; // Get accountId and newGroupId from request body

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Validate if accountId and newGroupId are provided
    if (!accountId || !newGroupId) {
      return res
        .status(400)
        .json({ message: "accountId and newGroupId are required." });
    }

    // Change the user group for the specified account
    const response = await tradelocker.accountController_changeUserGroup({
      accountId,
      newGroupId,
    });

    // Log the response data to the console
    console.log(response.data);

    // Send the response data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error changing user group:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

const getAllPositionJwt = async (req, res) => {
  const { accountId } = req.params;
  let accNum = req.body.headers['acc-num'] || req.query.accNum;
  let accessToken = req.body.headers['access-token'];
  console.log(req.body);
  
  try {
    const response = await axios.get(`${TRADELOCKER_API_BASE_URL}/trade/accounts/${accountId}/positions`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'accNum': accNum,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching positions:', error.response ? error.response.data : error.message);

    const status = error.response ? error.response.status : 500;
    const message = error.response && error.response.data ? error.response.data : 'Error fetching positions';

    res.status(status).send(message);
  }
};

const getAllOrdersJwt = async (req, res) => {
  const { accountId } = req.params;
  let accNum = req.body.headers['acc-num'] || req.query.accNum;
  let accessToken = req.body.headers['access-token'];
  console.log(req.body);
  
  try {
    const response = await axios.get(`${TRADELOCKER_API_BASE_URL}/trade/accounts/${accountId}/orders`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'accNum': accNum,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching orders:', error.response ? error.response.data : error.message);

    const status = error.response ? error.response.status : 500;
    const message = error.response && error.response.data ? error.response.data : 'Error fetching orders';

    res.status(status).send(message);
  }
};

module.exports = {
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
  getAllOrdersJwt
};
