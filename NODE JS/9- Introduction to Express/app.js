//External Module
const express = require("express");

//Local Module
const userRequestHandler = require("./user");

//Creates a express application
const app = express();

//Creating Middlewares
app.use((req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);

  //Sends to another middleware
  next();
});

app.use((req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Welcome to Express Series</p>");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
