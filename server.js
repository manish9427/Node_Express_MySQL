const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const { connectDB, User } = require("././db/db");

connectDB();
app.get("/", (req, res) => {
  res.send("Server is connected");
});
app.listen(port, () => {
  console.log(`Server is running http://localhost:3000/ on port ${port}`);
});
