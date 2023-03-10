const User = require("../models/userModel");

const registerUser = {
  register: async (req, res) => {
    const { username, email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res.status(409).json({
          message: "This email is already registered",
        });
      }

      const newUser = new User({
        email: email,
        username: username,
        password: password,
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "There was a problem during registration",
      });
    }
  },
};

module.exports = { registerUser };
