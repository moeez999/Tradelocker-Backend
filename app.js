const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.route");
const accountRoutes = require("./routes/account.routes");
const accountOperationsRoutes = require("./routes/account-opertaions.route");
const orderRoutes = require("./routes/orders.route");

const app = express();

// Allow specific origins (Replace with your frontend domain or use '*' to allow all origins)
const corsOptions = {
  origin: "*", // Allow all origins for now
  optionsSuccessStatus: 200,
};

// Use CORS middleware with your defined options
app.use(cors(corsOptions));

// Parse incoming JSON requests
app.use(express.json());

// Use user routes
app.use("/api/users", userRoutes);
app.use("/api/accounts", accountRoutes);
app.use("/api/account-operations", accountOperationsRoutes);
app.use("/api/orders", orderRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
