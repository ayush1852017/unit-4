const express = require("express");
const User = require("../models/user.model");
const transporter = require("../config/mail");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pagesize = req.query.pagesize || 2;

    const skip = (page - 1) * pagesize;

    const user = await User.find().skip(skip).limit(pagesize).lean().exec();
    // const users = await User.find().lean().exec();

    const totalPages = Math.ceil((await User.find().countDocuments()) / pagesize);
    return res.status(200).send(user, totalPages);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);
    transporter.sendMail({
      from: '"Team Masai" <team@masai.com>', // sender address
      to: user.email, // list of receivers
      subject: "Welcome to ABC system" + " " + user.firstName + " " + user.lastName, // Subject line
      text: "Hi" + " " + user.firstName + "," + " " + "Please confirm your email address", // plain text body
      // html: "<b>Hello world?</b>", // html body
    });
    transporter.sendMail({
      from: '"Team Masai" <team@masai.com>', // sender address
      to: [
        "admin1@masai.com",
        "admin2@masai.com",
        "admin3@masai.com",
        "admin4@masai.com",
        "admin5@masai.com",
      ], // list of receivers
      subject: user.firstName + " " + user.lastName + " " + "has registered with us text",
      text: "Please welcome" + " " + user.firstName + " " + user.lastName,

      // html: "<b>Hello world?</b>", // html body
    });
    return res.status(200).send({ message: "Confirmation mail send to you mail id" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
