import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css";
import { markItemAsCompleted } from "../services/itemsService";

const TodoItems = ({ todoItems, onDelete, onComplete }) => {
  // Use backend completed state, no local state
  const handleComplete = async (id) => {
    await markItemAsCompleted(id);
    if (onComplete) onComplete(); // Let parent refresh list
  };

  // Split tasks into active and completed
  const activeTasks = todoItems.filter((item) => !item.completed);
  const completedTasks = todoItems.filter((item) => item.completed);

  return (
    <>
      <div className={css.itemsContainer}>
        <h3 className={css.heading}>Your Tasks</h3>
        {activeTasks.length === 0 && (
          <div className={css.emptyMsg}>No active tasks 🎉</div>
        )}
        {activeTasks.map((item) => (
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
      {completedTasks.length > 0 && (
        <div className={css.completedContainer}>
          <h4 className={css.completedHeading}>Completed Tasks</h4>
          {completedTasks.map((item) => (
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
      )}
    </>
  );
};

export default TodoItems;
