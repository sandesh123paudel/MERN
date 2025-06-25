//External Modules

//Internal Modules
const { getDB } = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(houseName, description, price, location, rating, image, id) {
    this.houseName = houseName;
    this.description = description;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.image = image;
    this.id = id;
  }

  save() {
    const db = getDB();
    return db.collection("homes").insertOne(this);
  }

  static fetchAll() {}

  static findById(homeId) {}

  static deleteById(homeId) {}
};
