
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   switch (req.url) {
//     case "/":
//       res.write("<html>");
//       res.write("<title>Myntra</title>");
//       res.write("<body>Welcome to Myntra</body>");
//       res.write("<ul>");
//       res.write("<li><a href='/'>Home</a></li>");
//       res.write("<li><a href='/men'>Men</a></li>");
//       res.write("<li><a href='/women'>Women</a></li>");
//       res.write("<li><a href='/kids'>Kids</a></li>");
//       res.write("<li><a href='/cart'>Cart</a></li>");
//       res.write("</ul>");
//       res.write("</html>");
//       break;
//     case "/men":
//       res.write("<html>");
//       res.write("<title>Myntra</title>");
//       res.write("<li><a href='/'>Home</a></li>");
//       res.write("<li><a href='/men'>Men</a></li>");
//       res.write("<li><a href='/women'>Women</a></li>");
//       res.write("<li><a href='/kids'>Kids</a></li>");
//       res.write("<li><a href='/cart'>Cart</a></li>");
//       res.write("<body>Welcome to Men Section</body>");
//       res.write("</html>");
//       break;
//     case "/women":
//       res.write("<html>");
//       res.write("<title>Myntra</title>");
//       res.write("<li><a href='/'>Home</a></li>");
//       res.write("<li><a href='/men'>Men</a></li>");
//       res.write("<li><a href='/women'>Women</a></li>");
//       res.write("<li><a href='/kids'>Kids</a></li>");
//       res.write("<li><a href='/cart'>Cart</a></li>");
//       res.write("<body>Welcome to Women Section</body>");
//       res.write("</html>");
//       break;
//     case "/kids":
//       res.write("<html>");
//       res.write("<title>Myntra</title>");
//       res.write("<li><a href='/'>Home</a></li>");
//       res.write("<li><a href='/men'>Men</a></li>");
//       res.write("<li><a href='/women'>Women</a></li>");
//       res.write("<li><a href='/kids'>Kids</a></li>");
//       res.write("<li><a href='/cart'>Cart</a></li>");
//       res.write("<body>Welcome to Kids Section</body>");
//       res.write("</html>");
//       break;
//     case "/cart":
//       res.write("<html>");
//       res.write("<title>Myntra</title>");
//       res.write("<li><a href='/'>Home</a></li>");
//       res.write("<li><a href='/men'>Men</a></li>");
//       res.write("<li><a href='/women'>Women</a></li>");
//       res.write("<li><a href='/kids'>Kids</a></li>");
//       res.write("<li><a href='/cart'>Cart</a></li>");
//       res.write("<body>Welcome to Cart Section</body>");
//       res.write("</html>");
//       break;
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on address: http://localhost:${PORT}`);
// });


const http = require("http");

const renderPage = (title, content) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: Arial; padding: 20px; }
          ul { list-style: none; padding: 0; }
          li { display: inline; margin-right: 10px; }
          a { text-decoration: none; color: #0073e6; }
        </style>
      </head>
      <body>
        <h1>${content}</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </body>
    </html>
  `;
};

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let page;

  switch (req.url.toLowerCase()) {
    case "/":
      page = renderPage("Myntra", "Welcome to Myntra");
      break;
    case "/men":
      page = renderPage("Men - Myntra", "Welcome to Men Section");
      break;
    case "/women":
      page = renderPage("Women - Myntra", "Welcome to Women Section");
      break;
    case "/kids":
      page = renderPage("Kids - Myntra", "Welcome to Kids Section");
      break;
    case "/cart":
      page = renderPage("Cart - Myntra", "Welcome to Cart Section");
      break;
    default:
      res.statusCode = 404;
      page = renderPage("404 - Not Found", "Oops! Page Not Found");
      break;
  }

  res.write(page);
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
