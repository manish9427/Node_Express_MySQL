const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const connection = require("./db/db");
connection();
app.listen(port, () => {
  console.log(port);
});
