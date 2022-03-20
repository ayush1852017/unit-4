const express = require("express");
const User = require("../models/user.model");
const uploadFile = require("../middleware/uploads");
const router = express.Router();
const path = require("path");

router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});
router.post("", uploadFile.single("profilePic"), async (req, res) => {
  try {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      profilePic: req.file.path,
    });
    console.log(req.file);
    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});
router.patch("/update-profilePic/:id", uploadFile.single("profilePic"), async (req, res) => {
  try {
    const target_user = await User.findById(req.params.id).lean().exec();
    const dp_path = target_user.profilePic;
    // console.log(dp_path)
    if (dp_path) {
      fs.unlink(path.join(dp_path), (err) => {
        if (err) {
          throw err;
        }
        console.log("File Deleted successfully");
      });
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          profilePic: req.file.path,
        },
        { new: true },
      )
        .lean()
        .exec();
      return res.status(201).send(user);
    }
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});
router.delete("/update-profilePic/:id", async (req, res) => {
  try {
    const target_user = await User.findById(req.params.id).lean().exec();
    const dp_path = target_user.profilePic;
    // console.log(dp_path)
    if (dp_path) {
      fs.unlink(path.join(dp_path), (err) => {
        if (err) {
          throw err;
        }
        console.log(" User File Deleted successfully");
      });
      return res.status(201).send({ message: "User removed permanently" });
    }
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});

module.exports = router;
