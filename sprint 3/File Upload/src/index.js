const express = require("express");
const app = express();
const userController = require("./controllers/user.controller");
const galleryController = require("./controllers/gallery.controller");
app.use(express.json());

app.use("/user", userController);
app.use("/gallery", galleryController);
module.exports = app;
