// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the Backend API!");
});

// Add more routes and API endpoints here...

// Route to get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Route to get a specific user by Id
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.Id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const users = [
  { Id: 1, userEmail: "user1@example.com", password: "password1" },
  { Id: 2, userEmail: "user2@example.com", password: "password2" },
  { Id: 3, userEmail: "user3@example.com", password: "password3" },
];
