const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: false },
    dateOfBirth: { type: String, required: false },
    userType: { type: String, required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "student" },
  },
  {
    timeStamp: { createdAt: true, updatedAt: true },
    versionKey: false,
  },
);

module.exports = mongoose.model("user", userSchema);
