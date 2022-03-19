const mongoose = require("mongoose");

const evaluationSchema = mongoose.Schema(
  {
    dateOfEvaluation: { type: String, required: true },
    instructorId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    batchId: { type: mongoose.Schema.Types.ObjectId, ref: "batch" },
    submissionId: { type: mongoose.Schema.Types.ObjectId, ref: "submission" },
  },
  {
    timeStamp: { createdAt: true, updatedAt: true },
    versionKey: false,
  },
);

module.exports = mongoose.model("evaluation", evaluationSchema);
