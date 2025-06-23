//Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const homeDataPath = path.join(rootDir, "data", "home.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, image) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.image = image;
  }

  save() {
    this.id = Math.random().toString(36).substring(2, 9);
    Home.fetchAll((registeredHome) => {
      registeredHome.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(registeredHome), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      // if (!err) {
      //   callback(JSON.parse(data));
      // } else {
      //   callback([]);
      // }
      //or
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id === homeId);
      callback(homeFound);
    });
  }
};
