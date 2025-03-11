import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const Message = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  return (
    todoItems.length === 0 && (
      <p style={{ color: "purple", fontSize: "18px", textAlign: "center" }}>
        Enjoy Your Day
      </p>
    )
  );
};

export default Message;
