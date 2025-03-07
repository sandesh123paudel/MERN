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

  const handleSubmit = () => {
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
      <div className="row kg-row">
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
            type="button"
            className="btn btn-success kg-button"
            onClick={handleSubmit} // Call function on click
          >
            <TiDocumentAdd/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
