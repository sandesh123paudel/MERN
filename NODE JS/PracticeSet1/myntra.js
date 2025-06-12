// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>Welcome to Myntra</title></head>");
//   res.write("<body><h1>Welcome to Myntra</h1></body>");
//   res.write("</html>");
//   res.end();
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on address http://localhost:${PORT}`);
// });

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/":
      res.write("<html>");
      res.write("<title>Myntra</title>");
      res.write("<body>Welcome to Myntra</body>");
      res.write("<ul>");
      res.write("<li><a href='/'>Home</a></li>");
      res.write("<li><a href='/men'>Men</a></li>");
      res.write("<li><a href='/women'>Women</a></li>");
      res.write("<li><a href='/kids'>Kids</a></li>");
      res.write("<li><a href='/cart'>Cart</a></li>");
      res.write("</ul>");
      res.write("</html>");
      break;
    case "/men":
      res.write("<html>");
      res.write("<title>Myntra</title>");
      res.write("<li><a href='/'>Home</a></li>");
      res.write("<li><a href='/men'>Men</a></li>");
      res.write("<li><a href='/women'>Women</a></li>");
      res.write("<li><a href='/kids'>Kids</a></li>");
      res.write("<li><a href='/cart'>Cart</a></li>");
      res.write("<body>Welcome to Men Section</body>");
      res.write("</html>");
      break;
    case "/women":
      res.write("<html>");
      res.write("<title>Myntra</title>");
      res.write("<li><a href='/'>Home</a></li>");
      res.write("<li><a href='/men'>Men</a></li>");
      res.write("<li><a href='/women'>Women</a></li>");
      res.write("<li><a href='/kids'>Kids</a></li>");
      res.write("<li><a href='/cart'>Cart</a></li>");
      res.write("<body>Welcome to Women Section</body>");
      res.write("</html>");
      break;
    case "/kids":
      res.write("<html>");
      res.write("<title>Myntra</title>");
      res.write("<li><a href='/'>Home</a></li>");
      res.write("<li><a href='/men'>Men</a></li>");
      res.write("<li><a href='/women'>Women</a></li>");
      res.write("<li><a href='/kids'>Kids</a></li>");
      res.write("<li><a href='/cart'>Cart</a></li>");
      res.write("<body>Welcome to Kids Section</body>");
      res.write("</html>");
      break;
    case "/cart":
      res.write("<html>");
      res.write("<title>Myntra</title>");
      res.write("<li><a href='/'>Home</a></li>");
      res.write("<li><a href='/men'>Men</a></li>");
      res.write("<li><a href='/women'>Women</a></li>");
      res.write("<li><a href='/kids'>Kids</a></li>");
      res.write("<li><a href='/cart'>Cart</a></li>");
      res.write("<body>Welcome to Cart Section</body>");
      res.write("</html>");
      break;
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on address: http://localhost:${PORT}`);
});
