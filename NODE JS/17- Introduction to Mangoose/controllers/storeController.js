const Favourites = require("../models/favourites");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.find().then((registeredHome) => {
    res.render("store/index", {
      registeredHome: registeredHome,
      pageTitle: "Home-airbnb",
      currentPage: "index",
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.find().then((registeredHome) => {
    res.render("store/home-list", {
      registeredHome: registeredHome,
      pageTitle: "Homes List-airbnb",
      currentPage: "home",
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
      });
    }
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings-airbnb",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourites.find().then((favourites) => {
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
};

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;
  Favourites.findOne({ houseId: homeId })
    .then((existingFav) => {
      if (existingFav) {
        console.log("Already Marked As Favourite");
      } else {
        const fav = new Favourites({ houseId: homeId });
        fav.save().then((result) => {
          console.log("Fav Added:", result);
        });
      }
    })
    .then(() => {
      res.redirect("/favourites");
    })
    .catch((err) => {
      console.log("Error while marking favourite", err);
    });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.id;
  console.log("Deleting From Favourite List", homeId);
  Favourites.deleteFromFavourites(homeId)
    .then((result) => {
      console.log("Fav Deleted", result);
    })
    .catch((err) => {
      console.log("Error while deleting favourite:", error);
    })
    .finally(() => {
      res.redirect("/favourites");
    });
};
