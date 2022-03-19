const express = require("express");
const router = express.Router();
const User = require("../models/users.model");

router.get("/", async (req, res) => {
  try {
    const user = await User.find({}).lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send("something goes wrong");
  }
});

router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send("something goes wrong");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send("message: err.message");
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send("message: err.message");
  }
});

router.delete("/:uid", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.uid).lean().exec();
    return res.status(204).send(user);
  } catch (err) {
    return res.status(500).send("message: err.message");
  }
});

module.exports = router;
