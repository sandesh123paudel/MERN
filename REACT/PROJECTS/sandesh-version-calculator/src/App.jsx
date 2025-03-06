import { useState } from "react";
import "./App.css";
import DigitContainer from "./components/DigitContainer";
import Display from "./components/Display";

function App() {
  let [calVal, setcalVal] = useState("399,981");

  return (
    <div className="container">
      <div className="content">calculator</div>
      <Display displayVal={calVal} />
      <DigitContainer />
    </div>
  );
}

export default App;
