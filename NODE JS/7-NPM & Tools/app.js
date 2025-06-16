const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);

  res.setHeader("Content-Body", "text/html");
  res.write(`<html><head><title>My First Page</title></head>
<body>
<h1>Hello from my Node.js Server!</h1>
<h1>Hello from my Node.js Server!</h1>

</body>
</html>`);
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
