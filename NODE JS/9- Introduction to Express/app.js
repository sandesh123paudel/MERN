//Core Modules
const http = require("http");

//External Module
const express = require("express");

//Local Module
const userRequestHandler = require("./user");

//Creates a express application
const app = express();

//Creating Middlewares
app.use((req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
});

app.use((req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
});






const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
