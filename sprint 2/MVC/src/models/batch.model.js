const mongoose = require("mongoose");

const batchSchema = mongoose.Schema(
  {
    batchName: { type: String, required: true },
  },
  {
    timeStamp: { createdAt: true, updatedAt: true },
    versionKey: false,
  },
);

module.exports = mongoose.model("batch", batchSchema);
