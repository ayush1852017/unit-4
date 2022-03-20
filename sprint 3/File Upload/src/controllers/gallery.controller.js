const express = require("express");
const Gallery = require("../models/gallery.model");
const uploadFile = require("../middleware/uploads");
const router = express.Router();
const path = require("path");

router.get("", async (req, res) => {
  try {
    const gallery = await Gallery.find().lean().exec();
    return res.status(200).send(gallery);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});

router.post("/:id", uploadFile.array("userPictures",10), async (req, res) => {
  try {
    const filePaths = req.files.map((file) => {
      return file.path;
    });
    const userGallery = await Gallery.create({
      userPictures: filePaths,
      userId: req.params.id,
    });
    return res.status(201).send(userGallery);
  } catch (err) {
    return res.status(500).send({ message: "from post route " + err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const targetGallery = await Gallery.findById(req.params.id).lean().exec();
    const dp_path = targetGallery.userPictures;
    // console.log(dp_path)
    dp_path.map((pics) => {
      fs.unlink(path.join(pics), (err) => {
        if (err) {
          throw err;
        }
        console.log(" All Gallery Images Deleted successfully");
      });
    });
    const userGallery = await Gallery.findByIdAndDelete(req.params.id);
    return res.status(201).send({ message: "User's Gallery removed permanently" });
    // }
  } catch (err) {
    return res.status(500).send({ message: "from patch route " + err.message });
  }
});

module.exports = router;
    