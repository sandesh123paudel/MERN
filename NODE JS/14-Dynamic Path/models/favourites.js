//Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const favouriteDataPath = path.join(rootDir, "data", "favourites.json");

module.exports = class Favourites {
  static addToFavouriteList(homeId, callback) {
    Favourites.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        callback("This home is already is in favourite list");
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
