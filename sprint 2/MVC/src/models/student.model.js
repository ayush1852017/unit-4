const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    rollNo: { type: Number, required: true },
    currentBatch: { type: String, required: true },
  },
  {
    timeStamp: { createdAt: true, updatedAt: true },
    versionKey: false,
  },
);

module.exports = mongoose.model("student", studentSchema);
