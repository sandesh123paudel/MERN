import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Daal", "Green Vegetable", "Roti", "Milk", "Salad"];

  return (
    <React.Fragment>
      {/* Or <></> can also be used without any importing */}
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
