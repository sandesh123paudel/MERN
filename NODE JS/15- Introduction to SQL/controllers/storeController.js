const Favourites = require("../models/favourites");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then(([registeredHome, fields]) => {
    res.render("store/index", {
      registeredHome: registeredHome,
      pageTitle: "Home-airbnb",
      currentPage: "index",
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll().then(([registeredHome, fields]) => {
    res.render("store/home-list", {
      registeredHome: registeredHome,
      pageTitle: "Homes List-airbnb",
      currentPage: "home",
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings-airbnb",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourites.getFavourites((favourites) => {
    Home.fetchAll().then(([registeredHome, fields]) => {
      const favouriteHomes = registeredHome.filter((home) =>
        favourites.includes(home.id)
      );
      res.render("store/favourite-list", {
        pageTitle: "My Favourites-airbnb",
        currentPage: "favourites",
        favouriteHomes: favouriteHomes,
      });
    });
  });
};

exports.addToFavouriteList = (req, res, next) => {
  console.log("Adding to Favourite List", req.body);
  Favourites.addToFavouriteList(req.body.id, (error) => {
    if (error) {
      console.log("Error while marking favourite:", error);
    }
  });
  res.redirect("/favourites");
};

exports.deleteFromFavouriteList = (req, res, next) => {
  const homeId = req.params.id;
  console.log("Deleting From Favourite List", homeId);
  Favourites.deleteFromFavourites(homeId, (error) => {
    if (error) {
      console.log("Error while deleting:", error);
    }
  });
  res.redirect("/favourites");
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("No Home Found");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Details-airbnb",
        currentPage: "home",
      });
    }
  });
};
