require("dotenv").config();
const mongoose = require("mongoose");
const connection = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Sucessfully Connected");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connection;
