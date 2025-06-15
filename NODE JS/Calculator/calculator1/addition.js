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

module.exports = additionHandler;
