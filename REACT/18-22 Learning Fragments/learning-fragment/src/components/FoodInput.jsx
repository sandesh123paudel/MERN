import css from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnchange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Enter the food"
      onChange={handleOnchange}
    />
  );
};

export default FoodInput;
