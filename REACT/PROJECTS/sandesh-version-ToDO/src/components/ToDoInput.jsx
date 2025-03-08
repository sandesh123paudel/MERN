import { FaPlus } from "react-icons/fa";

const ToDoInput = () => {
  return (
    <div className="input">
      <input type="text" name="" id="" placeholder="Add your new todo" />
      <button>
        <FaPlus />
      </button>
    </div>
  );
};

export default ToDoInput;
