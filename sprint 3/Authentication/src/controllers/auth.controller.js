const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ message: "Email already exist" });
    }
    user = await User.create(req.body);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const login = (req, res) => {
  try {
    return res.status(200).send(login);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { register, login };
