import { useState, useEffect } from "react";
import "./App.css";
import DigitContainer from "./components/DigitContainer";
import Display from "./components/Display";

function App() {
  let [calVal, setcalVal] = useState("");

  const onDigitClick = (button) => {
    if (button === "=" || button === "Enter") {
      try {
        const result = eval(calVal);
        setcalVal(result.toString()); // Convert to string to keep typing
      } catch {
        setcalVal("Error");
      }
    } else if (button === "C" || button === "Escape") {
      setcalVal(""); // Clear the display
    } else if (button === "DEL" || button === "Backspace") {
      setcalVal(calVal.slice(0, -1)); // Remove the last character
    } else if ("0123456789+-*/.".includes(button)) {
      setcalVal(calVal + button); // Append numbers and operators
    }
  };

  // Listen for keyboard input
  useEffect(() => {
    const handleKeyPress = (event) => {
      onDigitClick(event.key); // Call onDigitClick with key pressed
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [calVal]); // Dependency ensures latest state updates

  return (
    <div className="container">
      <div className="content">calculator</div>
      <Display displayVal={calVal} />
      <DigitContainer onDigitClick={onDigitClick} />
    </div>
  );
}

export default App;
