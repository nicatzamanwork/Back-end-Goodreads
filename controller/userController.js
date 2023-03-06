const { User } = require("../models/userModel");

const registerUser = {
  register: async (req, res) => {
    const { email, username, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        return res.status(500).json({
          message: "This email is already registered",
        });
      } else {
        const newAuth = new User({
          email: email,
          username: username,
          password: password,
        });
        newAuth.save((err, doc) => {
          if (err) {
            return res.status(500).json({
              message: "There was a problem during registration",
            });
          } else {
            return res.status(201).json({
              message: "succes",
            });
          }
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = { registerUser };
