//SOURCE---chatGPT

const express = require("express");
const app = express();

app.get("/api/users", (req, res) => {
  // Get users from database
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];

  // Send response as JSON
  res.json(users);
});

app.listen(3001, () => console.log("Server listening on port 3000"));
