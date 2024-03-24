const bcrypt = require("bcryptjs");
const User = require("../model/userModel");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // Email already exists, return an error response
      return res.status(400).json({ error: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Return a success response
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Handle any unexpected errors
    res.status(404).json({ error: error.message });
  }
};

// const getAllUser = async (req, res) => {
//   try {
//     const user = await User.find();
//     res.status(200).json({ user });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

module.exports = { signup };
// module.exports = { signup, getAllUser };
