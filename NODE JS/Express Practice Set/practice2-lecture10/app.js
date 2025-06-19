//Core Module
const path = require("path");

const express = require("express");
const app = express();

//Local Module
const userRouter = require("./routes/homeRouter");
const rootPath = require("./utils/pathUtils");
const hostRouter = require("./routes/contactUsRouter");

app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootPath, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
