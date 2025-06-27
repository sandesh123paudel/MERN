// module.exports = class Home {
//   constructor(houseName, description, price, location, rating, image, _id) {
//     this.houseName = houseName;
//     this.description = description;
//     this.price = price;
//     this.location = location;
//     this.rating = rating;
//     this.image = image;
//     if (_id) {
//       this._id = _id;
//     }
//   }

//   save() {
//     const db = getDB();

//     if (this._id) {
//       //Update
//       const updatedFields = {
//         houseName: this.houseName,
//         description: this.description,
//         price: this.price,
//         location: this.location,
//         rating: this.rating,
//         image: this.image,
//       };
//       return db
//         .collection("homes")
//         .updateOne(
//           { _id: new ObjectId(String(this._id)) },
//           { $set: updatedFields }
//         );
//     } else {
//       //Insert New Data
//       return db.collection("homes").insertOne(this);
//     }
//   }

//   static fetchAll() {
//     const db = getDB();
//     return db.collection("homes").find().toArray();
//   }

//   static findById(homeId) {
//     const db = getDB();
//     return db
//       .collection("homes")
//       .find({ _id: new ObjectId(String(homeId)) })
//       .next();
//   }

//   static deleteById(homeId) {
//     const db = getDB();
//     return db
//       .collection("homes")
//       .deleteOne({ _id: new ObjectId(String(homeId)) });
//   }
// };

const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  houseName: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  image: String,
});

// homeSchema.pre("findOneAndDelete", async function (next) {
//   console.log("Came to pre hook while deleting a home");
//   const homeId = this.getQuery()._id;
//   await Favourites.deleteMany({ houseId: homeId });
//   next();
// });

module.exports = mongoose.model("Home", homeSchema);
