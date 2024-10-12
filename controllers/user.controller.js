// controllers/user.controller.js
const dotenv = require("dotenv");
const tradelocker = require("@api/tradelocker"); // Assuming this is compatible with CommonJS

dotenv.config(); // Load environment variables

// Authenticate with the TradeLocker API
tradelocker.auth(process.env.TRADELOCKER_API_KEY); // Use the API key from environment variables

const createUser = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  // Log the incoming request for debugging
  console.log("Received request body:", req.body);

  try {
    // Call the TradeLocker API to create a user
    const response = await tradelocker.usersController_createUser({
      email,
      firstName,
      lastName,
      password,
    });

    // Log the response from the TradeLocker API
    console.log("TradeLocker API response:", response.data);

    // Return the response from TradeLocker API back to the frontend
    res.status(response.status).json(response.data);
  } catch (error) {
    // Enhanced error handling
    console.error("Error forwarding request:", error.message);
    res.status(500).json({
      message: error.data.message,
      error: error.status,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const response = await tradelocker.usersController_getAllUsers({
      offset: req.query.offset || 0,
      limit: req.query.limit || 10,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error retrieving users:", error.message);
    res.status(500).json({
      message: error.data.message,
      error: error.status,
    });
  }
};

const setUserPassword = async (req, res) => {
  const userId = req.params.id;
  const { password } = req.body;

  try {
    const response = await tradelocker.usersController_setPassword({
      userId,
      password,
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error setting password:", error.message);
    res.status(500).json({
      message: error.data.message,
      error: error.status,
    });
  }
};

const setUserEmail = async (req, res) => {
  const userId = req.params.id;
  const { email } = req.body;

  try {
    const response = await tradelocker.usersController_setEmail({
      email,
      userId,
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error setting email:", error.message);
    res.status(500).json({
      message: error.data.message,
      error: error.status,
    });
  }
};
const getUserByEmail = async (req, res) => {
  const { email } = req.body; // Assuming the email comes from the request body

  try {
    const response = await tradelocker.usersController_getUsersByEmail({
      email,
    });

    // Log and send the response from TradeLocker
    console.log("TradeLocker API response:", response.data);
    res.status(response.status).json(response.data);
  } catch (error) {
    // Handle any errors
    console.error("Error retrieving user by email:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "Internal Server Error",
      error: error.status || 500,
    });
  }
};

const getUserDetails = async (req, res) => {
  const { email } = req.body; // Assuming the email is provided in the request body

  try {
    const response = await tradelocker.usersController_getUserDetails({
      email,
    });

    // Log the response from the TradeLocker API
    console.log("TradeLocker API response:", response.data);

    // Return the API response back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    // Enhanced error handling
    console.error("Error retrieving user details:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "Internal Server Error",
      error: error.status || 500,
    });
  }
};
module.exports = {
  createUser,
  getAllUsers,
  setUserPassword,
  setUserEmail,
  getUserByEmail,
  getUserDetails,
};
