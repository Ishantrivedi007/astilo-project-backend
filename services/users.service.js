// users.js
const express = require("express");
const router = express.Router();
const connection = require("../DataBaseConnection/DataBaseConnector"); // Import the database connection

// Route to get all users from the database
router.get("/", (req, res) => {
  const query = "SELECT * FROM users"; // No need to specify astilos.users since we are using the connected database

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

// Route for user login submission
router.post("/login", (req, res) => {
  console.log("Received request body:", req.body); // Debug statement
  const { userEmail, password } = req.body;

  // Check if the email and password exist in the request body
  if (!userEmail || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  // Query to check if the user with the given email and password exists in the database
  const query = "SELECT * FROM users WHERE userEmail = ? AND password = ?";

  connection.query(query, [userEmail, password], (err, results) => {
    if (err) {
      console.error("Error during login:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    // Check if any user matches the given email and password
    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    // User found, return success response
    res.status(200).json({ message: "Login successful!" });
  });
});

module.exports = router;
