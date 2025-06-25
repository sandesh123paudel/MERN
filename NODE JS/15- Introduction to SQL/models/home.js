//External Modules
const db = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, image) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.image = image;
  }

  save() {}

  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId, callback) {}

  static deleteById(homeId, callback) {}
};
