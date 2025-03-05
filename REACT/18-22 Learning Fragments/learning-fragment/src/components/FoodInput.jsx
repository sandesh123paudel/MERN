import css from "./FoodInput.module.css";

const FoodInput = ({handleOnChange}) => {
  
  return (
    <input
      type="text"
      placeholder="Enter the food"
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
