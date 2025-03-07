import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDelete }) => {
  return (
    <>
      <div className={css.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item}
            todoName={item.name}
            todoDate={item.duedate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
