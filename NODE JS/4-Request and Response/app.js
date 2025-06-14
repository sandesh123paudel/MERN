//Sending a Response

// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
//   res.setHeader('Content-Type','text/html');
//   res.write('<html>');
//   res.write('<head><title>My First Page</title></head>');
//   res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//   res.write('<p>This is a simple response.</p>');
//   res.write('</html>');
//   res.end(); // Ends the response
//   // process.exit(); //Stops event loop after getting the first request
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running on address: http://localhost:${PORT}`);
// });

// // Routing Requests

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);

//   if (req.url === "/") {
//     res.statusCode = 200; // OK
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>My First Page</title></head>");
//     res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
//     res.write("</html>");
//     return res.end();
//   }else if (req.url === "/about") {
//     res.statusCode = 200; // OK
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>About Page</title></head>");
//     res.write("<body><h1>About Us</h1></body>");
//     res.write("</html>");
//     return res.end();
//   }else{
//     res.statusCode = 404; // Not Found
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>Page Not Found</title></head>");
//     res.write("<body><h1>404 - Page Not Found</h1></body>");
//     res.write("</html>");
//     return res.end();
//   }


//   // process.exit(); //Stops event loop after getting the first request
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running on address: http://localhost:${PORT}`);
// });


