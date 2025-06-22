//Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, image) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.image = image;
  }

  save() {
    Home.fetchAll((registeredHome) => {
      registeredHome.push(this);
      const homeDataPath = path.join(rootDir, "data", "home.json");
      fs.writeFile(homeDataPath, JSON.stringify(registeredHome), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "home.json");
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
};
