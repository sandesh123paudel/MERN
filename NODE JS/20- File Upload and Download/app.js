//Core Module
const path = require("path");

//External Module
const express = require("express");
const session = require("express-session");
const MongoSBStore = require("connect-mongodb-session")(session);
const { default: mongoose } = require("mongoose");
const multer = require("multer");

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootPath = require("./utils/pathUtil");
const errorController = require("./controllers/error");
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

//random string generator for file name
const randomString = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

//for the custom file name

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, randomString(10) + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

//for random storage of file
const multerOptions = {
  storage,
  fileFilter,
};

app.use(express.urlencoded());

//For Multipart form data
app.use(multer(multerOptions).single("image"));
//Giving access to css files
app.use(express.static(path.join(rootPath, "public")));
app.use("/uploads", express.static(path.join(rootPath, "uploads")));
app.use("/host/uploads", express.static(path.join(rootPath, "uploads")));
app.use("/homes/uploads", express.static(path.join(rootPath, "uploads")));

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
