const additionHandler = (req, res) => {
  console.log(req.url);
  const numbers = [];
  req.on("data", (chunk) => numbers.push(chunk));
  req.on("end", () => {
    const numberStr = Buffer.concat(numbers).toString();
    const params = new URLSearchParams(numberStr);

    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.a) + Number(bodyObj.b);

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Result of Calculation</title></head>");
    res.write(`<body>
     <h1>Result: ${Number(bodyObj.a)} + ${Number(bodyObj.b)} = ${result}</h1>
      <a href="/calculator">Back to Calculator</a>
    </body>
  </html>

    `);
    return res.end();
  });
};

module.exports = additionHandler;
