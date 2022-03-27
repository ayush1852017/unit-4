const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");
const router = express.Router();

router.post(
  "",
  body("firstName").notEmpty().withMessage("First Name should not be empty!!"),
  body("lastName").not().isEmpty().withMessage("Last Name should not be empty!!"),
  body("email").isEmail().withMessage("Please enter valid email address"),
  body("pincode").isLength({ min: 6, max: 6 }).withMessage("pincode length should be 6"),
  body("age")
    .not()
    .isEmpty()
    .withMessage("Age cannot be Empty")
    .isInt({ min: 1, max: 100 })
    .withMessage("Age should be between 1 to 100"),
  body("gender").custom(async (value) => {
    if (!value == ("Male" || "Female" || "Others")) {
      throw new Error("Not valid gender");
    }
    return true;
  }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const user = await User.create(req.body);
      return res.status(201).send(user);
    } catch (error) {
      return res.status(500).send("error");
    }
  },
);
router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
