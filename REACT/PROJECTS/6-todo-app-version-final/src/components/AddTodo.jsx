import { useRef } from "react";
import css from "./AddTodo.module.css";
import { TiDocumentAdd } from "react-icons/ti";

function AddTodo({ onSubmit }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleSubmit = (event) => {
    // console.log(event);
    event.preventDefault();

    const item = todoNameElement.current.value;
    const date = dueDateElement.current.value;

    if (!item || !date) {
      alert("Please enter both a to-do item and a due date.");
      return;
    }
    // console.log(`${item}, ${date}`);
    onSubmit(item, date);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleSubmit}>
        <div className="col-6">
          <input
            className={css.input}
            type="text"
            ref={todoNameElement}
            placeholder="Enter To-Do Here"
          />
        </div>
        <div className="col-4">
          <input
            className={css.input}
            type="date"
            ref={dueDateElement}
            placeholder=""
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success kg-button"
            // Call function on click
          >
            <TiDocumentAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
