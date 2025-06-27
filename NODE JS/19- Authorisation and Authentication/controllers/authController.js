const { check, validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login-airbnb",
    currentPage: "login",
    isLoggedIn: false,
    errors: [],
    oldInput: { email: "" },
    user: {},
  });
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).render("auth/login", {
      pageTitle: "Login",
      currentPage: "login",
      isLoggedIn: false,
      errors: ["User does not exist"],
      oldInput: { email },
      user: {},
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(422).render("auth/login", {
      pageTitle: "Login",
      currentPage: "login",
      isLoggedIn: false,
      errors: ["Invalid Password"],
      oldInput: { email },
      user: {},
    });
  }
  req.session.isLoggedIn = true;
  req.session.user = user;
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
    errors: [],
    user: {},
    oldInput: {
      firstName: "",
      lastName: "",
      email: "",
      userType: "",
      password: "",
      confirmPassword: "",
    },
  });
};

exports.postSignup = [
  //First Name Validation
  check("firstName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters long.")
    .matches(/^[A-Za-z]+$/)
    .withMessage("First name must contain only letters."),

  //Last Name Validation
  check("lastName")
    .matches(/^[A-Za-z]+$/)
    .withMessage("Last name must contain only letters."),


  //Email Validation
  check("email")
    .isEmail()
    .withMessage("Please enter a valid email address.")
    .normalizeEmail(),

  //Password Validation
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long.")
    .matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/)
    .withMessage(
      "Password must contain at least one uppercase letter, one number, and one special character."
    ),

  //Confirm Password Validation
  check("confirmPassword")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match.");
      }
      return true;
    })
    .trim(),

  //Check user type
  check("userType")
    .notEmpty()
    .withMessage("Please select a user type.")
    .isIn(["host", "guest"])
    .withMessage("User type must be either 'host' or 'guest'."),

  //Check terms and conditions
  check("terms").custom((value) => {
    if (value !== "checked") {
      throw new Error("You must agree to the terms and conditions.");
    }
    return true;
  }),

  //Controller Function
  (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pageTitle: "Signup-airbnb",
        currentPage: "signup",
        isLoggedIn: false,
        errors: errors.array().map((err) => err.msg),
        oldInput: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          userType: userType,
          password: password,
          confirmPassword: req.body.confirmPassword,
        },
        user: {},
      });
    }
    // If validation passes, you can proceed with user creation logic

    bcrypt.hash(password, 12).then((hashedPassword) => {
      const user = new User({
        firstName,
        lastName,
        email,
        userType,
        password: hashedPassword,
      });

      password,
        user
          .save()
          .then(() => {
            console.log("User Registed Successfully");
            res.redirect("/login");
          })
          .catch((err) => {
            console.log("Error while registering user", err);
            return res.status(422).render("auth/signup", {
              pageTitle: "Signup-airbnb",
              currentPage: "signup",
              isLoggedIn: false,
              errors: [err.message],
              oldInput: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                userType: userType,
              },
              user: {},
            });
          });
    });
  },
];
