const tradelocker = require("@api/tradelocker");

// Function to deposit to an account
const depositToAccount = async (req, res) => {
  const { accountId, amount, note } = req.body; // Get accountId, amount, and note from request body

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Check if accountId, amount, and note are provided
    if (!accountId || !amount || !note) {
      return res
        .status(400)
        .json({ message: "accountId, amount, and note are required." });
    }

    // Deposit to the account
    const response =
      await tradelocker.accountOperationsController_depositToAccount({
        accountId,
        amount,
        note,
      });

    // Log the response data to the console
    console.log(response.data);

    // Send the response data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error depositing to account:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

const withdrawFromAccount = async (req, res) => {
  const { accountId, amount, note } = req.body; // Get accountId, amount, and note from request body

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Check if accountId, amount, and note are provided
    if (!accountId || !amount || !note) {
      return res
        .status(400)
        .json({ message: "accountId, amount, and note are required." });
    }

    // Withdraw from the account
    const response =
      await tradelocker.accountOperationsController_withdrawFromAccount({
        accountId,
        amount,
        note,
      });

    // Log the response data to the console
    console.log(response.data);

    // Send the response data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error withdrawing from account:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

const addCreditToAccount = async (req, res) => {
  const { accountId, amount, note } = req.body; // Get accountId, amount, and note from request body

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Check if accountId, amount, and note are provided
    if (!accountId || !amount || !note) {
      return res
        .status(400)
        .json({ message: "accountId, amount, and note are required." });
    }

    // Add credit to the account
    const response =
      await tradelocker.accountOperationsController_addCreditToAccount({
        accountId,
        amount,
        note,
      });

    // Log the response data to the console
    console.log(response.data);

    // Send the response data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error adding credit to account:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

module.exports = {
  depositToAccount,
  withdrawFromAccount,
  addCreditToAccount,
};
