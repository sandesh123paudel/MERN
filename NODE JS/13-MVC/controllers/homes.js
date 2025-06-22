exports.getAddHome = (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add Home-airbnb",
    currentPage: "addHome",
  });
};

const registeredHome = [];

exports.postAddHome = (req, res, next) => {
  console.log(req.body);
  registeredHome.push(req.body);
  res.render("homeAdded", {
    pageTitle: "Success-Home Added",
    currentPage: "addHome",
  });
};

exports.getHomes = (req, res, next) => {
  console.log(registeredHome);
  res.render("home", {
    registeredHome: registeredHome,
    pageTitle: "Home-airbnb",
    currentPage: "home",
  });
};


