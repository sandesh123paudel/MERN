//External Module
const express = require("express");

//Local Module
const userRequestHandler = require("./user");

//Creates a express application
const app = express();

//Creating Middlewares
app.use("/", (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  // res.send(`<p>Welcome to Home Page1</p>
  //   <a href="/submit-details">Go to Submit Details  Page</a>`);

  //Sends to another middleware
  next();
});

app.use("/submit-details", (req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Welcome to Express Series</p>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
