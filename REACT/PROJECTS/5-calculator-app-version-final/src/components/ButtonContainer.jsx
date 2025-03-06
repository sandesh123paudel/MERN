import css from "./ButtonContainer.module.css";

const ButtonContainer = ({onButtonClick}) => {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={css.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
