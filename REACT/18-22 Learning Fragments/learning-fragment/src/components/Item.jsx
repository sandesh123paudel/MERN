import css from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    window.alert(`Buy Button Clicked for ${foodItem}`);
  };
  return (
    <>
      <li className={`${css["kg-item"]} list-group-item`}>
        <span className={`${css["kg-span"]}`}>{foodItem}</span>
        <button
          className={`${css.button} btn btn-success`}
          onClick={(event)=>handleBuyButtonClicked(event)}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
