const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
// require("dotenv").config();

const app = express();
const port = process.env.PORT;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("Successfully connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error While Connecting With MongoDB Atlas", error);
    process.exit(1);
  }
};

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User Saved Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const router = express.Router();
router.post("/signup", signup);

app.use(bodyParser.json());
app.use("/", router);

const startServer = () => {
  connectDB()
    .then(() => {
      app.listen(port, () => {
        console.log(`Server Connected http://localhost:${port}`);
      });
    })
    .catch((error) => {
      console.error("Error While Connecting with Server", error);
    });
};

startServer();
