import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // let foodItems = ["Daal", "Green Vegetable", "Roti", "Milk", "Salad"];

  let foodItems = [];

  return (
    <React.Fragment>
      <h1>Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </React.Fragment>
  );
}

export default App;
