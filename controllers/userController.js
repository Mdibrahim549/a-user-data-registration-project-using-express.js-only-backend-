const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User
exports.register = async (req, res) => {
  const { firstName, lastName, NIDNumber, phoneNumber, password, bloodGroup } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      NIDNumber,
      phoneNumber,
      password: hashedPassword,
      bloodGroup,
    });

    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Other functions like login, getProfile, etc. go here...
