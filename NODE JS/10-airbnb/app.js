//External Module
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.get("/", (req, res, next) => {
  res.send(`<h1>Welcome to airbnb<h1>
  
    <a href="/add-home">Add Home</a>

    `);
});

app.get("/add-home", (req, res, next) => {
  res.send(`<h1>Add your Home<h1>
    <form action="/add-home" method="POST">
    <label for="title">Enter name of your house</label></br>
    <input type="text" id="title" name="houseName" required>

    <button type="submit">Add Home</button>
    </form>

    `);
});

app.post("/add-home", (req, res, next) => {
  console.log(req.body.houseName);
  res.send(`<h1>Home Registered Successfully<h1>
     <a href="/"> Go to Home</a>

    `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address: http://localhost:${PORT}`);
});
