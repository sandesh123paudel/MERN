import css from "./FoodInput.module.css";

const FoodInput = ({handleKeyDown}) => {
  
  return (
    <input
      type="text"
      placeholder="Enter the food"
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
