const additionHandler = require("./additionHandler");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <header><title>Calculator Project 2 </title></header>
    
      <body>
      <h1>Welcome to Calculator Project 2</h1>
      <h3> Navigate to Calculator Page </h3>
      <a href="/calculator"> Calculator Page</a>
      </body>
      </html>
      
      `);

    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <header><title>Calculator Project 2 </title></header>
      <body>
      <h1> Calculator Page</h1>
      <form action="/calculate-result" method="POST">
      <input type="number" name="a" placeholder=" Enter first number"/> <br></br>
      <input type="number" name="b" placeholder="Enter another number"/>
      <br></br>
      <button type="submit">Sum</button>
      </form>
      </body>
      </html>
      
      `);

    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    additionHandler(req, res);
    return;
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
      <html>
      <header><title>Calculator Project 2 </title></header>
    
      <body>
      <h1>Opps!! 404 Page Not Found</h1>
      <h3> Navigate to Home Page </h3>
      <a href="/"> Home Page</a>
      </body>
      </html>
      
      `);
  res.end();
};

module.exports = requestHandler;
