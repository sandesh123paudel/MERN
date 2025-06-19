//Core Module
const path = require("path");

//External Module
const express = require("express");
const userRouter = express.Router();

//Local Module
const rootPath = require("../utils/pathUtil");

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "home.html"));
});

module.exports = userRouter;
