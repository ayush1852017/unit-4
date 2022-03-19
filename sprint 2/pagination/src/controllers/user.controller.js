const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(200).send("user");
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
