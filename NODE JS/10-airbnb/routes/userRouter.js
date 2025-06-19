//Core Module
const path = require("path");

//External Module
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = userRouter;
