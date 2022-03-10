const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Connect Mongo

const connectDB = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/assignment");
};

// Create Schema - A Structure

const UserSchema = mongoose.Schema({
  id: { type: Number, required: false },
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  ip_address: String,
});

//Model

const User = mongoose.model("testing", UserSchema);

app.get("/data", async (req, res) => {
  // const userData = await User.find({}, { first_name: 1, _id: 0 }).limit(10).lean().exec();
  const userData = await User.find({}).limit(10).lean().exec();
  console.log("userData:", userData);
  return res.send(userData);
});

// Listening Port
app.listen(5000, async () => {
  try {
    await connectDB();
    console.log("Listing to 5000");
  } catch (error) {
    console.log(error);
  }
});
