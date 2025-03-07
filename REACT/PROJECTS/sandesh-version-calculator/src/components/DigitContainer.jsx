function DigitContainer({ onDigitClick, button }) {
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
            onClick={() => onDigitClick(button)}
          >
            {button}
          </button>
        ))}

        <button className="reset" onClick={() => onDigitClick("C")}>
          RESET
        </button>
        <button className="equal" onClick={() => onDigitClick("=")}>
          =
        </button>
      </div>
      <p style={{ color: "white", margin: "10px" }}>
        Made By Sandesh with ❤️❤️
      </p>
    </>
  );
}

export default DigitContainer;
