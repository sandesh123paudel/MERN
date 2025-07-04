const Home = require("../models/home");
const fs = require("fs");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home-airbnb",
    currentPage: "addHome",
    editing: false,
    isLoggedIn: req.session.isLoggedIn,
    user: req.session.user,
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, description, price, location, rating } = req.body;
  console.log(req.file);

  if (!req.file) {
    console.log("No file uploaded");
    return res.status(422).send("No file uploaded");
  }
  const image = req.file.path; // Assuming the file path is stored in req.file.path

  const home = new Home({
    //houseName:houseName -- being both name same we can use just a single only too
    houseName,
    description,
    price,
    location,
    rating,
    image,
  });
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
        isLoggedIn: req.session.isLoggedIn,
        user: req.session.user,
      });
    }
  });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, description, price, location, rating } = req.body;

  Home.findById(id)
    .then((home) => {
      home.houseName = houseName;
      home.description = description;
      home.price = price;
      home.location = location;
      home.rating = rating;
      if (req.file) {
        fs.unlink(home.image, (err) => {
          if (err) {
            console.log("Error while deleting file", err);
          }
        });
        home.image = req.file.path;
      }
      home
        .save()
        .then((result) => {
          console.log("Home Edited Successfully", result);
        })
        .catch((err) => {
          console.log("Error While Updating", err);
        });
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error while finding home");
    });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log(homeId);

  Home.findById(homeId)
    .then((home) => {
      if (!home) {
        console.log("No Home Found");
        return res.redirect("/host/host-home-list");
      }

      // Only delete local files, not URLs
      if (home.image && !home.image.startsWith("http")) {
        fs.unlink(home.image, (err) => {
          if (err) {
            console.log("Error while deleting file", err);
          } else {
            console.log("File deleted successfully");
          }
        });
      }

      return Home.findByIdAndDelete(homeId);
    })
    .then(() => {
      console.log("Home deleted successfully");
      res.redirect("/host/host-home-list");
    })
    .catch((err) => {
      console.log("Error while deleting home", err);
    });
};

exports.getHostHomes = (req, res, next) => {
  Home.find().then((registeredHome) => {
    res.render("host/host-home-list", {
      registeredHome: registeredHome,
      pageTitle: "Host Homes List-airbnb",
      currentPage: "host-homes",
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
    });
  });
};
