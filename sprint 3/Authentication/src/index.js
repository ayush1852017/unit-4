const express = require("express");
const app = express();
const userController = require("./controllers/user.controller");
const { register, login } = require("./controllers/auth.controller");
app.use(express.json());
app.use("/user", userController);
app.post("/login", body("firstName").notEmpty().withMessage("First Name should not be empty!!"),body("email").isEmail().withMessage("Please enter valid email address") ,login);
app.post("/register", register);
module.exports = app;
