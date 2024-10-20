// src/controllers/userController.js
const User = require('../models/User');

// Login or Signup API using only phone number
const loginOrSignup = async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    // Check if the user exists based on the phone number
    let user = await User.findOne({ phoneNumber });

    if (user) {
      // User found (login)
      return res.status(200).json({ message: 'User found', user });
    } else {
      // User doesn't exist, create a new user
      user = new User({ phoneNumber });
      await user.save();

      // User created successfully
      return res.status(201).json({ message: 'User created', user });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { loginOrSignup };
