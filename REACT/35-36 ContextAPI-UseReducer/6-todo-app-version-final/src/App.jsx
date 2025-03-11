import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import Message from "./components/Message";
import TodoItems from "./components/TodoItems";
import { useReducer } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type == "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.playload.item, date: action.playload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (todo) =>
        !(
          todo.name === action.playload.item &&
          todo.duedate === action.playload.date
        )
    );
  }
  return newTodoItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (item, date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      playload: {
        item,
        date,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoName, todoDate) => {
    const isConfirmed = window.confirm(
      `Do you really want to delete "${todoName}"`
    );

    if (!isConfirmed) return;
    const deleteItemAction = {
      type: "DELETE_ITEM",
      playload: {
        item: todoName,
        date: todoDate,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <Message />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
