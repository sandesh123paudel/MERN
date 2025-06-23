const Home = require("../models/home");
exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHome) =>
    res.render("store/index", {
      registeredHome: registeredHome,
      pageTitle: "Home-airbnb",
      currentPage: "index",
    })
  );
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHome) =>
    res.render("store/home-list", {
      registeredHome: registeredHome,
      pageTitle: "Homes List-airbnb",
      currentPage: "home",
    })
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings-airbnb",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((registeredHome) =>
    res.render("store/favourite-list", {
      pageTitle: "My Favourites-airbnb",
      currentPage: "favourites",
      registeredHome: registeredHome,
    })
  );
};
