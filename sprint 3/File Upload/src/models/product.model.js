const mongoose = require("mongoose");

const userSchema = new mongoose({
  firstNane: { type: String, required: true },
  lastNane: { type: String, required: true },
});
