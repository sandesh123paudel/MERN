exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login-airbnb",
    currentPage: "login",
    isLoggedIn: req.isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  //req.isLoggedIn = true; //This is not a good practice, as it won't persist across requests
  //Instead, we use cookies or sessions to manage user authentication
  //Setting a cookie to indicate the user is logged in
  res.cookie("isLoggedIn", true);
  res.redirect("/");
};

exports.postLogOut = (req, res, next) => {
  res.cookie("isLoggedIn", false);
  res.redirect("/");
};
