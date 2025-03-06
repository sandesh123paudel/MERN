import css from "./Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <input type="text" className={css.display} value={displayValue} readOnly />
  );
};

export default Display;
