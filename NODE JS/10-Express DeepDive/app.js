const express = require("express");

const app = express();

//Creating two middlewares
app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy Middleware", req.url, req.method);
  next();
});

//Third middleware with response sent
// app.use((req, res, next) => {
//   console.log("Third Middleware", req.url, req.method);
//   res.send("<h1>Welcome to Third Middleware</h1>");
// });

// two more middleware thathandle path "/", a request to '/contact-us page'
app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to Practice Set</h1>

    <a href='/contact-us'>Contact Us Page</a>
    `);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
    <h1>Welcome to Contact Us Page</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter a name">
    <input type="email" name="email" placeholder="Enter your email">
    <input type="submit"/>

    </form>
    
    
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  res.send(`<h1>We will contact you shortly</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
