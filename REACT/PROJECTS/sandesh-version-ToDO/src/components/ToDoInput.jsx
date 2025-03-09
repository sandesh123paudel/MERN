import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const ToDoInput = ({ onSubmit }) => {
  let [todoItem, settodoItem] = useState("");

  const onItemInput = (event) => {
    console.log(event.target.value);
    settodoItem(event.target.value);
  };

  const onSubmitted = () => {
    if (todoItem.length > 0) {
      console.log(todoItem);
      onSubmit(todoItem);
      settodoItem("");
    } else {
      alert("Please Enter the Task");
      return;
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        name=""
        id=""
        placeholder="Add your new todo"
        value={todoItem}
        onChange={onItemInput}
      />
      <button onClick={onSubmitted}>
        <FaPlus />
      </button>
    </div>
  );
};

export default ToDoInput;
