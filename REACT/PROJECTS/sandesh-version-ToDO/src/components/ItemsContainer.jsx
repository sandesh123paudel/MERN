import { AiFillDelete } from "react-icons/ai";

const ItemsContainer = ({ tasks, onEachDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task} className="items-container">
          <input type="checkbox" className="task-checkbox" />
          <span className="items-name">{task}</span>
          <button className="delete-button" onClick={() => onEachDelete(task)}>
            <AiFillDelete />
          </button>
        </div>
      ))}
    </>
  );
};

export default ItemsContainer;
