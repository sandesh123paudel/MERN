import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import css from "./TodoItems.module.css";

const TodoItems = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  //destructured way
  // const { todoItems, deleteItem } = useContext(TodoItemsContext);

  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div className={css.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.duedate}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
