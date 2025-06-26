const Favourites = require("../models/favourites");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.find().then((registeredHome) => {
    res.render("store/index", {
      registeredHome: registeredHome,
      pageTitle: "Home-airbnb",
      currentPage: "index",
      isLoggedIn: req.session.isLoggedIn,
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.find().then((registeredHome) => {
    res.render("store/home-list", {
      registeredHome: registeredHome,
      pageTitle: "Homes List-airbnb",
      currentPage: "home",
      isLoggedIn: req.session.isLoggedIn,
    });
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("No Home Found");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Details-airbnb",
        currentPage: "home",
        isLoggedIn: req.session.isLoggedIn,
      });
    }
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings-airbnb",
    currentPage: "bookings",
    isLoggedIn: req.session.isLoggedIn,
  });
};

exports.getFavouriteList = (req, res, next) => {
  /** 
   * Favourites.find().then((favourites) => {
    favourites = favourites.map((fav) => fav.houseId.toString());
    Home.find().then((registeredHome) => {
      const favouriteHomes = registeredHome.filter((home) =>
        favourites.includes(home._id.toString())
      );
      res.render("store/favourite-list", {
        pageTitle: "My Favourites-airbnb",
        currentPage: "favourites",
        favouriteHomes: favouriteHomes,
      });
    });
  });
  */

  //Can be done simply like this using mongoose
  Favourites.find()
    .populate("houseId")
    .then((favourites) => {
      const favouriteHomes = favourites.map((favourite) => favourite.houseId);
      res.render("store/favourite-list", {
        pageTitle: "My Favourites-airbnb",
        currentPage: "favourites",
        favouriteHomes: favouriteHomes,
        isLoggedIn: req.session.isLoggedIn,
      });
    });
};

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;
  Favourites.findOne({ houseId: homeId })
    .then((fav) => {
      if (fav) {
        console.log("Already marked as favourite");
      } else {
        fav = new Favourites({ houseId: homeId });
        fav.save().then((result) => {
          console.log("Fav added: ", result);
        });
      }
      res.redirect("/favourites");
    })
    .catch((err) => {
      console.log("Error while marking favourite: ", err);
    });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.id;

  Favourites.findOneAndDelete({ houseId: homeId })
    .then((result) => {
      console.log("Fav Deleted", result);
    })
    .catch((err) => {
      console.log("Error while deleting favourite:", err);
    })
    .finally(() => {
      res.redirect("/favourites");
    });
};
