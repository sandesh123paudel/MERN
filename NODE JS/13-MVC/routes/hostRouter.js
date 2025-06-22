//Core Module
const path = require("path");

//External Module
const express = require("express");
const hostRouter = express.Router();

//Local Module
const rootPath = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add Home-airbnb",
    currentPage: "addHome",
  });
});

const registeredHome = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  registeredHome.push(req.body);
  res.render("homeAdded", {
    pageTitle: "Success-Home Added",
    currentPage: "addHome",
  });
});

exports.hostRouter = hostRouter;
exports.registeredHome = registeredHome;
