import "./App.css";
import DigitContainer from "./components/DigitContainer";
import Display from "./components/Display";

function App() {
  

  return (
    <div className="container">
      <div className="content">calculator</div>
      <Display />
      <DigitContainer />
    </div>
  );
}

export default App;
