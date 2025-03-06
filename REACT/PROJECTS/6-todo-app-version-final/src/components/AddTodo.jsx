import css from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input className={css.input} type="text" placeholder="Enter To-Do Here" />
        </div>
        <div class="col-4">
          <input className={css.input} type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
