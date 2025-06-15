const additionHandler = (req, res) => {
  console.log(req.url);
  console.log("1:URL Fetched");
  const numbers = [];
  let result = [];
  req.on("data", (chunk) => {
    console.log("2:Chunk Fetched");

    numbers.push(chunk);
  });
  req.on("end", () => {
    console.log("3:Chunk Fetched");

    const numberStr = Buffer.concat(numbers).toString();
    const params = new URLSearchParams(numberStr);
    const bodyObj = Object.fromEntries(params);
    result = Number(bodyObj.a) + Number(bodyObj.b);
  });

  console.log("4.:Result Fetched");

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Result of Calculation</title></head>");
  res.write(`<body>
     <h1>Result:${result}</h1>
      <a href="/calculator">Back to Calculator</a>
    </body>
  </html>

    `);
  return res.end();
};

module.exports = additionHandler;
