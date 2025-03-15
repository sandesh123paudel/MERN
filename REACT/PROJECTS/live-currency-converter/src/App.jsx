import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading";
import CurrencyConverter from "./components/Converter";
import LiveExchange from "./components/LiveExchange";

function App() {
  return (
    <>
      <div className="main-container">
        <Heading></Heading>
        <div className="row main-content">
          <div className="column left">
            <CurrencyConverter />
          </div>
          <div className="column right">
            <LiveExchange />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
