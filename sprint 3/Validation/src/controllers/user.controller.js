const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");
const router = express.Router();

router.post(
  "/",
  body("firstName").not().isEmpty(),
  body("email")
    .isEmail()
    .withMeassage("Age must be there")
    .custom((val) => {
      if (val < 1 || val > 120) {
        throw new Error("Incorrect Age provided");
      }
      return true;
    }),
  body("password")
    .not()
    .isEmpty()
    .withMeassage("Password is required")
    .custom((value) => {
      const pasw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/;
      if (!value.match(pasw)) {
        throw new Error("Password is weak");
      }
      return true;
    }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ error: errors.array() });
      }
    } catch (error) {
      return res.status(500).send("error");
    }
  },
);
