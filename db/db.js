require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../model/userModel");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Sucessfully Connected to MongoDB Atlas");
  } catch (err) {
    console.log("Error while connecting MongoDB Atlas", err);
    process.exit(1);
  }
};

module.exports = { connectDB, User };
