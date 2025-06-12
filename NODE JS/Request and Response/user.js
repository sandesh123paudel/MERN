//Taking User Input
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.statusCode = 200; // OK
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Welcome to home Page</title></head>");
    res.write("<body><h1>Enter your Details</h1></body>");
    res.write("<form action='/submit' method='POST'>");
    res.write(
      "<input type='text' name='username' placeholder='Enter your name' required>"
    );
    res.write("<br></br>");
    res.write('<label for="gender">Gender</label>');
    res.write("<br>");
    res.write('<label for="male">Male:</label>');
    res.write(
      '<input type="radio" name="gender" id="male" value="male" required>'
    );
    res.write("<br>");
    res.write('<label for="female">Female:</label>');
    res.write(
      '<input type="radio" name="gender" id="female" value="female" required>'
    );
    res.write("<br></br>");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  res.statusCode = 404; // Not Found
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Page Not Found</title></head>");
  res.write("<body><h1>404 - Page Not Found</h1></body>");
  res.write("</html>");
  return res.end();

  // process.exit(); //Stops event loop after getting the first request
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
