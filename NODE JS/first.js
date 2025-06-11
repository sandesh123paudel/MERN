// setTimeout(() => {
//   console.log("Hello");
// }, 5000);

console.log(global);

const fs = require("fs");

fs.writeFile("output.txt", " Sandesh Paude", (err) => {
  if (err) console.log("Error");
  else console.log("File Written");
});
