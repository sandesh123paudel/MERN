//Simple Node Server

// const http = require("http");

// const server =http.createServer((req, res) =>{
//   console.log(req);
// });

// server.listen(3000);

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); //Stops event loop after getting the first request
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
