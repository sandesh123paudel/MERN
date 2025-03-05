import css from "./Item.module.css";

const Item = (props) => {
  //// One Way to Show Data
  // let {foodItem}=props;
  // return <>
  // <li className="list-group-item">{foodItem}</li>
  // </>

  ////Another Way
  return (
    <>
      <li className={`${css['kg-item']} list-group-item`}>
        <span className= {`${css['kg-span']}`}>{props.foodItem}</span>
      </li>
    </>
  );
};

////Destructuring Way

// const Item =({foodItem})=>{

//   return <>
//   <li className="list-group-item">{foodItem}</li>
//   </>
// }

export default Item;
