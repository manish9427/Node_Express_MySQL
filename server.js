const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const connection = require("./db/db");
connection();
app.listen(port, () => {
  console.log(port);
});
