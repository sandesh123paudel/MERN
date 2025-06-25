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
    if (this.id) {
      //Update
      return db.execute(
        "UPDATE homes SET houseName=?,description=?, price=?, location=?, rating=?, image=? WHERE id=?",
        [
          this.houseName,
          this.description,
          this.price,
          this.location,
          this.rating,
          this.image,
          this.id,
        ]
      );
    } else {
      //Inset New
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
  }

  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId) {
    return db.execute("SELECT * FROM homes where id=?", [homeId]);
  }

  static deleteById(homeId) {
    return db.execute("DELETE FROM homes where id=?", [homeId]);
  }
};
