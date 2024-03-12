const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const { connectDB, User } = require("././db/db");
const routes = require("./routes/routes");

app.use(bodyParser.json());
connectDB();

app.use("/", routes);
app.get("/", (req, res) => {
  res.send("Server is connected");
});
app.listen(port, () => {
  console.log(`Server is running http://localhost:3000/ on port ${port}`);
});
