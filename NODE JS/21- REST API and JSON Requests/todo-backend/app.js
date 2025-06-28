//Core Module
const path = require("path");


//External Module
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const DB_PATH =
  "mongodb+srv://root:root@mernstack.tzml0yk.mongodb.net/todo?retryWrites=true&w=majority&appName=MERNStack";

//Local Modules
const errorController = require("./controllers/error");
const todoItemsRouter = require("./routes/todoItemsRouter");

const app = express();



app.use(express.urlencoded());
//Giving access to css files
// app.use(express.static(path.join(rootPath, "public")));
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoItemsRouter);
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
