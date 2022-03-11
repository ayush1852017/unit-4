const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connection = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/assignment");
};

const dataSchema = mongoose.Schema({
  id: { type: Number, required: false },
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  gender: { type: String },
  ip_address: { type: String },
});

const User = mongoose.model("user", dataSchema);

app.get("/getthat", async (req, res) => {
  const useData = await User.find({}).limit(10).lean().exec();
  console.log("useData:", useData);
  return res.send(useData);
});

app.listen(4000, async () => {
  try {
    await connection();
    console.log("Listing to 4000");
  } catch (error) {
    console.log(error);
  }
});
