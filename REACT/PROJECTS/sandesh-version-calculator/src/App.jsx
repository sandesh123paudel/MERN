import "./App.css";

function App() {
  let numbers = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "X",
  ];

  return (
    <div className="container">
      <div className="content">calculator</div>
      <input
        className="displayBox"
        placeholder="399,981"
        type="numeric"
      ></input>
      <div className="digitContainer">
        {numbers.map((button) => (
          <button className={button === "DEL" ? "del" : ""}>{button}</button>
        ))}

        <button className="reset">RESET</button>
        <button className="equal">=</button>
      </div>
      <p style={{ color: "white", margin: "10px" }}>
        Made By Sandesh with ❤️❤️
      </p>
    </div>
  );
}

export default App;
