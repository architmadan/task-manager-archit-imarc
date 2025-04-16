const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = "architImarc";

// Function to register a user
const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await User.create(username, hashedPassword);
    res.status(201).json({ id: userId, username });
    console.log(res.status());
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering user" });
  }
};

// Function to log in a user
const login = async (req, res) => {
  console.log("Login function called");
  const { username, password } = req.body;
  const user = await User.findByUsername(username);
  console.log("User  found: ", user);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id }, secret, {
    expiresIn: "1h",
  });
  return res.status(200).json({ token });
};

module.exports = {
  register,
  login,
};
