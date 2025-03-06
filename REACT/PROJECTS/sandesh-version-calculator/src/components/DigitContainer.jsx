function DigitContainer({ onDigitClick }) {
  const numbers = [
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
    "*",
  ];

  return (
    <>
      <div className="digitContainer">
        {numbers.map((button) => (
          <button
            className={button === "DEL" ? "del" : ""}
            onClick={((button) => onDigitClick, button)}
          >
            {button}
          </button>
        ))}

        <button className="reset">RESET</button>
        <button className="equal">=</button>
      </div>
      <p style={{ color: "white", margin: "10px" }}>
        Made By Sandesh with ❤️❤️
      </p>
    </>
  );
}

export default DigitContainer;
