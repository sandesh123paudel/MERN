const { parse } = require("querystring");

const homeHandler = (req, res) => {
  console.log(res.url, req.method);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Welcome to home Page</title></head>");
    res.write(`<body>
    <h1>Welome to the Calculator Project</h1>
    <a href="/calculator">Go to Calculator</a>
      </body>
    </html>
      `);
    return res.end();
  } else if (req.url === "/calculator") {
    res.write("<html>");
    res.write("<head><title>Calculator Page</title></head>");
    res.write(`<body>
    <h1> Calculator </h1>
    <form action='/calculate-result' method='POST'>
    <input type='number' name='a' placeholder='Enter a number' required>
    <br></br>
    <input type='number' name='b' placeholder='Enter another number' required>
    <br></br>
    <button type='submit'>Submit</button>
    </form>
    </body>
    </html>`);
    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    const numbers = [];

    req.on("data", (chunk) => {
      numbers.push(chunk);
    });
    req.on("end", () => {
      const parsedData = Buffer.concat(numbers).toString();
      console.log(parsedData);
      const { a, b } = parse(parsedData);
      console.log(Number(a), Number(b));
      additionHandler(res, Number(a), Number(b));
    });
  }
};

const additionHandler = (res, a, b) => {
  const sum = a + b;
  res.write("<html>");
  res.write("<head><title>Result of Calculation</title></head>");
  res.write(`<body>
     <h1>Result: ${a} + ${b} = ${sum}</h1>
      <a href="/calculator">Back to Calculator</a>
    </body>
  </html>

    `);
  return res.end();
};

module.exports = homeHandler;
