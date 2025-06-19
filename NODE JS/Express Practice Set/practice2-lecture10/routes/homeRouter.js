//Core Module
const path = require("path");

//External Module
const express = require("express");
const userRouter = express.Router();

//Local Module
const rootPath = require("../utils/pathUtils");

userRouter.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.sendFile(path.join(rootPath, "views", "home.html"));
});

module.exports = userRouter;
