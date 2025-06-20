//Core Module
const path = require("path");

//External Module
const express = require("express");

//Local Module
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootPath = require("./utils/pathUtil");

const app = express();

//for ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

//Giving access to css files
app.use(express.static(path.join(rootPath, "public")));

//Error 404 File
app.use((req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
