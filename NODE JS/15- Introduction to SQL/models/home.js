//External Modules
const db = require("../utils/databaseUtil");

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
    return db.execute(
      "INSERT INTO homes (houseName,description, price, location, rating, image) VALUES(?, ?, ?, ?, ?, ?)", //USING ? AS PLACEHOLDER saves from SQL Injection
      [
        this.houseName,
        this.description,
        this.price,
        this.location,
        this.rating,
        this.image,
      ]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId, callback) {}

  static deleteById(homeId, callback) {}
};
