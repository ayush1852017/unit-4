const mongoose = require("mongoose");

const submissionSchema = mongoose.Schema(
  {
    evaluationId: { type: mongoose.Schema.Types.ObjectId, ref: "evaluation" },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    timeStamp: { createdAt: true, updatedAt: true },
    versionKey: false,
  },
);

module.exports = mongoose.model("submission", submissionSchema);
