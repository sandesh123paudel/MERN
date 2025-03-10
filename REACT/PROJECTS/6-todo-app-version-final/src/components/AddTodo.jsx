import { useState } from "react";
import css from "./AddTodo.module.css";
import { TiDocumentAdd } from "react-icons/ti";

function AddTodo({ onSubmit }) {
  // State to track input values
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");

  const handleItemName = (event) => {
    setItem(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    // console.log(event);
    event.preventDefault();
    if (!item || !date) {
      alert("Please enter both a to-do item and a due date.");
      return;
    }
    onSubmit(item, date);
    setItem("");
    setDate("");
  };


  
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleSubmit}>
        <div className="col-6">
          <input
            className={css.input}
            type="text"
            value={item}
            placeholder="Enter To-Do Here"
            onChange={handleItemName} // Update state on change
          />
        </div>
        <div className="col-4">
          <input
            className={css.input}
            type="date"
            placeholder=""
            value={date}
            onChange={handleDate} // Update state on change
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
