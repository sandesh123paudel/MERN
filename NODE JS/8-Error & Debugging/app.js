const http = require("http");

const testingSyntax = require("./syntax");
const logical = require("./logical");
const userRequestHandler = require("./user");

const server = http.createServer(userRequestHandler);

// const server = http.createServer((req, res) => {
//   console.log(req);
//   // testingSyntax();
//   logical();
// });

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
