import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      {/* Or <></> can also be used without any importing */}
      <h1>Healthy Foods</h1>
      <ul class="list-group">
        <li class="list-group-item">Daal</li>
        <li class="list-group-item">Green Vegetable</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Milk</li>
        <li class="list-group-item">Salad</li>
      </ul>
    </React.Fragment>
  );
}

export default App;
