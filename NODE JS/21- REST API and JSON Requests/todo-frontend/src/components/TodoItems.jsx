import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css";
import { markItemAsCompleted } from "../services/itemsService";

const TodoItems = ({ todoItems, onDelete, onComplete }) => {
  // Use backend completed state, no local state
  const handleComplete = async (id) => {
    await markItemAsCompleted(id);
    if (onComplete) onComplete(); // Let parent refresh list
  };

  return (
    <>
      <div className={css.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            todoName={item.name}
            todoDate={item.dueDate}
            onDelete={onDelete}
            completed={!!item.completed}
            onComplete={handleComplete}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
