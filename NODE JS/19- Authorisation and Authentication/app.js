//Core Module
const path = require("path");

//External Module
const express = require("express");
const session = require("express-session");
const MongoSBStore = require("connect-mongodb-session")(session);

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

const DB_PATH =
  "mongodb+srv://root:root@mernstack.tzml0yk.mongodb.net/airbnb?retryWrites=true&w=majority&appName=MERNStack";

//To Store Session in MOngoDB
const store = new MongoSBStore({
  uri: DB_PATH,
  collection: "sessions",
});

app.use(express.urlencoded());

app.use(
  session({
    secret: "mernstacklearning",
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);

app.use(authRouter);
app.use(storeRouter);

app.use("/host", (req, res, next) => {
  if (
    !req.session.isLoggedIn ||
    !req.session.user ||
    req.session.user.userType !== "host"
  ) {
    return res.redirect("/");
  }
  next();
});
app.use("/host", hostRouter);

//Giving access to css files
app.use(express.static(path.join(rootPath, "public")));

//Error 404 File
app.use(errorController.get404);

const PORT = 3000;

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
