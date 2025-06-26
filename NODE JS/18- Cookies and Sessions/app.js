//Core Module
const path = require("path");

//External Module
const express = require("express");

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootPath = require("./utils/pathUtil");
const errorController = require("./controllers/error");
const { default: mongoose } = require("mongoose");
const authRouter = require("./routes/authRouter");

const app = express();

//for ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  //Checking if the user is logged in by checking the cookie
  req.isLoggedIn = req.get("Cookie")
    ? req.get("Cookie").split("=")[1] === "true"
    : false;

  next();
});

app.use(express.urlencoded());
app.use(authRouter);
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (!req.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
});
app.use("/host", hostRouter);

//Giving access to css files
app.use(express.static(path.join(rootPath, "public")));

//Error 404 File
app.use(errorController.get404);

const PORT = 3000;
const DB_PATH =
  "mongodb+srv://root:root@mernstack.tzml0yk.mongodb.net/airbnb?retryWrites=true&w=majority&appName=MERNStack";

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to Mongo");
    app.listen(PORT, () => {
      console.log(`Server running on address: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to Mongo", err);
  });
