const express = require("express");
const router = express.Router();
const Evaluation = require("../models/evaluation.model");

router.get("/", async (req, res) => {
  try {
    const evaluation = await Evaluation.find({}).lean().exec();
    return res.status(200).send(evaluation);
  } catch (err) {
    return res.status(500).send("something goes wrong");
  }
});

router.post("/", async (req, res) => {
  try {
    const evaluation = await Evaluation.create(req.body);
    return res.status(200).send(evaluation);
  } catch (err) {
    return res.status(500).send("something goes wrong");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id)
      .populate({ path: "submissionId", populate: { path: "studentId", select: "firstName" } })
      .lean()
      .exec();
    return res.status(200).send(evaluation);
  } catch (err) {
    return res.status(500).send("message: err.message");
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const evaluation = await evaluation
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      .lean()
      .exec();

    return res.status(200).send(evaluation);
  } catch (err) {
    return res.status(500).send("message: err.message");
  }
});

router.delete("/:uid", async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndDelete(req.params.uid).lean().exec();
    return res.status(204).send(evaluation);
  } catch (err) {
    return res.status(500).send("message: err.message");
  }
});

module.exports = router;
