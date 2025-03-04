const Item =(props)=>{

  //// One Way to Show Data
  // let {foodItem}=props;
  // return <>
  // <li className="list-group-item">{foodItem}</li>
  // </>


  ////Another Way
  return <>
  <li className="list-group-item">{props.foodItem}</li>
  </>
}


////Destructuring Way

// const Item =({foodItem})=>{

//   return <>
//   <li className="list-group-item">{foodItem}</li>
//   </>
// }


export default Item;