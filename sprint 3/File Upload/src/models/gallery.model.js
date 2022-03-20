const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    userPictures: [{ type: String, required: true }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model("gallery", gallerySchema);
