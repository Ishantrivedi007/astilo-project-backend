// App.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRoutes = require("./services/users.service");

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the Backend API!");
});

// Import the users API routes
app.use("/users", usersRoutes);

// ... (Other routes and endpoints)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
