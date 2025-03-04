import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Daal", "Green Vegetable", "Roti", "Milk", "Salad"];

    // let foodItems = [];

  // let emptyMessage=foodItems.length===0?<h3>I am still hungry</h3> :null;



  // if(foodItems.length===0){
  //   return <h3>I am still hungry</h3>
  // }

  return (
    <React.Fragment>
      {/* Or <></> can also be used without any importing */}
      <h1>Healthy Foods</h1>
      {/* {emptyMessage} */}
      {foodItems.length===0 && <h3>I am still hungry</h3>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
