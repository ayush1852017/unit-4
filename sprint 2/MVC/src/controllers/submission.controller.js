const express = require("express");
const router = express.Router();

const Submission = require("../models/submission.model");


router.get("", async (req, res) => {
  try {
    const submissions = await Submission.find().lean().exec();
    return res.status(200).send(submissions);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post("", async (req, res) => {
  try {
    const submission = await Submission.create(req.body);
    return res.status(200).send(submission);
  } catch (err) {
    return res.status(500).send(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id, req.body).lean().exec();
    return res.status(200).send(submission);
  } catch (err) {
    return res.status(500).send(err);
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const submission = await Submission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).send(submission);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const submission = await Submission.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(submission);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
