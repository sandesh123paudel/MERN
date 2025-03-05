import Item from "./Item";

const FoodItems=(props)=>{
  return (
    <ul className="list-group">
          {props.items.map((item) => (
            <Item key={item} foodItem={item}/>
          ))}
    </ul>
  );

}

export default FoodItems;