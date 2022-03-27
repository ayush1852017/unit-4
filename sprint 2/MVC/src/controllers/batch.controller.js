const express = require("express");
const Batch = require("../models/batch.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const batch = await Batch.find().lean().exec();
    return res.status(201).send(batch);
  } catch (error) {
    return res.status(500).send("message: error");
  }
});
router.post("", async (req, res) => {
  try {
    const batch = await Batch.create(req.body);
    return res.status(201).send(batch);
  } catch (error) {
    return res.status(500).send("message: error");
  }
});
router.get("/id", async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id, req.body).lean().exec();
    return res.status(201).send(batch);
  } catch (error) {
    return res.status(500).send("message: error");
  }
});

router.patch("/id", async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(201).send(batch);
  } catch (error) {
    return res.status(500).send("message: error");
  }
});

module.exports = router;
