const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home-airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, description, price, location, rating, image } = req.body;
  const home = new Home(houseName, description, price, location, rating, image);
  home.save().then(() => {
    console.log("Home Saved Successfully");
  });

  res.redirect("/host/host-home-list");
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.id;
  const editing = req.query.editing === "true";

  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("No Home Found");
      res.redirect("/host/host-home-list");
    } else {
      res.render("host/edit-home", {
        home: home,
        pageTitle: "Edit-Home-airbnb",
        currentPage: "host-homes",
        editing: editing,
      });
    }
  });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, description, price, location, rating, image } =
    req.body;
  const home = new Home(
    houseName,
    description,
    price,
    location,
    rating,
    image,
    id
  );

  home.save().then(() => {
    console.log("Home Edited Successfully");
  });

  res.redirect("/host/host-home-list");
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log(homeId);
  Home.deleteById(homeId)
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("Error while deleting", error);
    });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll().then((registeredHome) => {
    res.render("host/host-home-list", {
      registeredHome: registeredHome,
      pageTitle: "Host Homes List-airbnb",
      currentPage: "host-homes",
    });
  });
};
