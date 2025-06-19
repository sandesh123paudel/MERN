const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.send(`<h1>Add your Home<h1>
    <form action="/host/add-home" method="POST">
    <label for="title">Enter name of your house</label></br>
    <input type="text" id="title" name="houseName" required>

    <button type="submit">Add Home</button>
    </form>

    `);
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body.houseName);
  res.send(`<h1>Home Registered Successfully<h1>
     <a href="/"> Go to Home</a>

    `);
});

module.exports = hostRouter;
