import css from "./Item.module.css";

const Item = ({ foodItem,bought, handleBuyButton }) => {
  return (
    <>
      <li className={`${css["kg-item"]} list-group-item ${bought?'active':''}`}>
        <span className={`${css["kg-span"]}`}>{foodItem}</span>
        <button
          className={`${css.button} btn btn-success`}
          onClick={handleBuyButton}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
