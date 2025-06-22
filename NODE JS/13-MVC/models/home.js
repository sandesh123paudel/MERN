//fake database
const registeredHome = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, image) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.image = image;
  }

  save() {
    registeredHome.push(this);
  }

  static fetchAll() {
    return registeredHome;
  }
};
