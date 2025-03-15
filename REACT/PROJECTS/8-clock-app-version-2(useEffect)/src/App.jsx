import AppName from "./components/AppName";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ClockTime from "./components/ClockTime";
function App() {
  return (
    <center className="clock-container">
      <AppName></AppName>
      <ClockTime/>
    </center>
  );
}

export default App;
