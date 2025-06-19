//Core Module
const path = require("path");

//External Module
const express = require("express");
const hostRouter = express.Router();

//Local Module
const rootPath = require("../utils/pathUtils");

hostRouter.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.sendFile(path.join(rootPath, "views", "contactUs.html"));
});

hostRouter.use(express.urlencoded());

hostRouter.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.sendFile(path.join(rootPath, "views", "formSubmitted.html"));
});

module.exports = hostRouter;
