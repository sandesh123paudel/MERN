exports.get404 = (req, res, next) => {
  res.render("404", {
    pageTitle: "!Error-Page Not Found",
    currentPage: "404",
    isLoggedIn: req.session.isLoggedIn,
  });
};
