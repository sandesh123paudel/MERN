const { getDB } = require("../utils/databaseUtil");

module.exports = class Favourites {
  constructor(houseId) {
    this.houseId = houseId;
  }
  save() {
    const db = getDB();

    return db
      .collection("favourites")
      .findOne({ houseId: this.houseId })
      .then((existingFav) => {
        if (!existingFav) {
          return db.collection("favourites").insertOne(this);
        }
        return Promise.resolve();
      });
  }

  static getFavourites(callback) {
    const db = getDB();
    return db.collection("favourites").find().toArray();
  }

  static deleteFromFavourites(homeId) {
    const db = getDB();
    return db.collection("favourites").deleteOne({ houseId: homeId });
  }
};
