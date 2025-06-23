const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/addHome", {
    pageTitle: "Add Home-airbnb",
    currentPage: "addHome",
  });
};

exports.postAddHome = (req, res, next) => {
  // const home = new Home(
  //   req.body.houseName,
  //   req.body.price,
  //   req.body.location,
  //   req.body.rating,
  //   req.body.image
  // );
  // home.save();

  //or

  const { houseName, price, location, rating, image } = req.body;
  const home = new Home(houseName, price, location, rating, image);
  home.save();

  res.render("host/homeAdded", {
    pageTitle: "Success-Home Added",
    currentPage: "addHome",
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.id;
  console.log(homeId);
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("No Home Found");
      res.redirect("/host/host-home-list");
    } else {
      res.render("host/edit-home", {
        home: home,
        pageTitle: "Edit-Home-airbnb",
        currentPage: "addHome",
      });
    }
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHome) =>
    res.render("host/host-home-list", {
      registeredHome: registeredHome,
      pageTitle: "Host Homes List-airbnb",
      currentPage: "host-homes",
    })
  );
};
