const tradelocker = require("@api/tradelocker");

const getAllOrders = async (req, res) => {
  const { type, accountId, offset, limit } = req.body; // Get type, accountId, offset, and limit from the request body

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Check if all required fields are provided
    if (!type || !accountId || offset === undefined || limit === undefined) {
      return res
        .status(400)
        .json({ message: "type, accountId, offset, and limit are required." });
    }

    // Get all orders based on the provided parameters
    const response = await tradelocker.ordersController_getAllOrders({
      type,
      accountId,
      offset,
      limit,
    });

    // Log the response data to the console
    console.log(response.data);

    // Send the response data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error fetching orders:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

const cancelOrder = async (req, res) => {
  const { type, orderId } = req.body; // Get type and orderId from request body

  try {
    // Authenticate the tradelocker API
    tradelocker.auth(process.env.TRADELOCKER_API_KEY);

    // Check if both type and orderId are provided
    if (!type || !orderId) {
      return res
        .status(400)
        .json({ message: "type and orderId are required." });
    }

    // Cancel the order using the provided type and orderId
    const response = await tradelocker.ordersController_cancelOrder({
      type,
      orderId,
    });

    // Log the response data to the console
    console.log(response.data);

    // Send the response data back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error canceling the order:", error.message);
    res.status(500).json({
      message: error.data ? error.data.message : "An error occurred",
      error: error.status || 500,
    });
  }
};

module.exports = {
  getAllOrders,
};
