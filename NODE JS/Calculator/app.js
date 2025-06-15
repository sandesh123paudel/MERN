const http = require("http");
const homeHandler = require("./calculator");
const server = http.createServer(homeHandler);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
