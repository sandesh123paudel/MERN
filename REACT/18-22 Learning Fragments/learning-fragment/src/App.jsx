import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = ["Daal", "Green Vegetable", "Roti", "Milk", "Salad"];

  // let textStateArr = useState("Food Item Entered By User");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // console.log(`Current textToSHow:${textToShow}`);

  // let [textToShow, setTextState] = useState("Food Items");
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  // let foodItems = [];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput handleKeyDown={onKeyDown} />
        {/* <p>{textToShow}</p> */}

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
