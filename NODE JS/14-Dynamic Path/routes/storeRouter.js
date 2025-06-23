//External Module
const express = require("express");
const storeRouter = express.Router();

//Local Module
const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/favourites", storeController.getFavouriteList);

module.exports = storeRouter;
