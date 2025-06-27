exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login-airbnb",
    currentPage: "login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res, next) => {
  // // req.isLoggedIn = true; //This is not a good practice, as it won't persist across requests
  // // Instead, we use cookies or sessions to manage user authentication
  // // Setting a cookie to indicate the user is logged in
  // res.cookie("isLoggedIn", true);

  //Using Session
  req.session.isLoggedIn = true;

  res.redirect("/");
};

exports.postLogOut = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};

////Sign Up

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "Signup-airbnb",
    currentPage: "signup",
    isLoggedIn: false,
  });
};

exports.postSignup = (req, res, next) => {
  console.log(req.body);
  req.session.isLoggedIn = true;

  res.redirect("/");
};
