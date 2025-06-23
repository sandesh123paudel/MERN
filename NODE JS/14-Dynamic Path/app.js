//Core Module
const path = require("path");

//External Module
const express = require("express");

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootPath = require("./utils/pathUtil");
const errorController = require("./controllers/error");

const app = express();

//for ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

//Giving access to css files
app.use(express.static(path.join(rootPath, "public")));

//Error 404 File
app.use(errorController.get404);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
