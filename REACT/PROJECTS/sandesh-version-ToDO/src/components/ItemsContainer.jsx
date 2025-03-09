import { AiFillDelete } from "react-icons/ai";

const ItemsContainer = () => {
  return (
    <div className="items-container">
      <input type="checkbox" className="task-checkbox" />
      <span className="items-name">Complete a previous task</span>
      <button className="delete-button">
        <AiFillDelete />
      </button>
    </div>
  );
};

export default ItemsContainer;
