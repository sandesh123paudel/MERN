//Core Module
const path = require("path");

//External Module
const express = require("express");
const hostRouter = express.Router();

//Local Module
const rootPath = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "addHome.html"));
});

const registeredHome = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body.houseName);
  registeredHome.push({ houseName: req.body.houseName });
  res.sendFile(path.join(rootPath, "views", "homeAdded.html"));
});

exports.hostRouter = hostRouter;
exports.registeredHome = registeredHome;
