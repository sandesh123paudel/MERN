const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("addHome", {
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

  res.render("homeAdded", {
    pageTitle: "Success-Home Added",
    currentPage: "addHome",
  });
};

exports.getHomes = (req, res, next) => {
  const registeredHome = Home.fetchAll((registeredHome) =>
    res.render("home", {
      registeredHome: registeredHome,
      pageTitle: "Home-airbnb",
      currentPage: "home",
    })
  );
};
