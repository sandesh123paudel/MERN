import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["Daal", "Green Vegetable", "Roti", "Milk", "Salad"];

  // let foodItems = [];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>

        <ErrorMessage items={foodItems} />
        <FoodInput />
        <FoodItems items={foodItems} />
      </Container>

      {/* <Container>
        <h1>
          Multiple Container of similar properties can be used with passing
          children
        </h1>
      </Container> */}
    </>
  );
}

export default App;
