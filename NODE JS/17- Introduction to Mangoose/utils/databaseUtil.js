const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const MONGO_URL =
  "mongodb+srv://root:root@mernstack.tzml0yk.mongodb.net/?retryWrites=true&w=majority&appName=MERNStack";

let _db;

const MongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      console.log("Conected to MongoDB");
      _db = client.db("airbnb");
      callback();
    })
    .catch((err) => {
      console.log("Error while connecting to Monog", err);
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error("MongoDB not connected");
  }
  return _db;
};

exports.MongoConnect = MongoConnect;
exports.getDB = getDB;
