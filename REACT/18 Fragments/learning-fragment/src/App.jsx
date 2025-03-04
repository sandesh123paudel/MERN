import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["Daal", "Green Vegetable", "Roti", "Milk", "Salad"];

  // let foodItems = [];

  return (
    <React.Fragment>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </React.Fragment>
  );
}

export default App;
