const http = require("http");

const server = http.createServer();

const PORT = 3000;
server.listen(3000, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
