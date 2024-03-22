const bcrypt = require("bcryptjs");
const User = require("../model/userModel");

// const signup = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Check if the username already exists
//     const existingUser = await User.findOne({ username });

//     if (existingUser) {
//       // Username already exists, return an error response
//       return res.status(400).json({ error: "Username is already taken" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       username,
//       password: hashedPassword,
//     });

//     // Save the new user to the database
//     await newUser.save();

//     // Return a success response
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     // Handle any unexpected errors
//     res.status(500).json({ error: error.message });
//   }
// };

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const isPresent = await User.findOne({ email });
  if (isPresent) {
    res.status(404);
    res.send({ message: "Email Already registred" });
  } else {
    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        res
          .status(404)
          .send({ message: "Something went wrong please try later" });
      }

      try {
        const user = new UserModel({ name, email, password: hash });
        await user.save();
        res.send({ message: "Registration successful" });
      } catch (error) {
        res
          .status(404)
          .send({ message: "Something went wrong please try later" });
      }
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signup, getAllUser };
