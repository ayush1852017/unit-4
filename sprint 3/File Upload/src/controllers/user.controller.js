const express = require("express");
const User = require("../models/product.model");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});

router.post("", async (req, res) => {
  try {
    const users = await User.create(res.body);
    return res.status(200).send(users);
  } catch (error) {}
});

module.exports = router;
