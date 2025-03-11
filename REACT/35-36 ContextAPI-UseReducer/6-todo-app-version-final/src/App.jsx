import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import Message from "./components/Message";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const initialtodoItems = [];

  let [todoItems, setItemState] = useState(initialtodoItems);

  const addNewItem = (item, date) => {
    const newTodoItems = [...todoItems, { name: item, date: date }];
    setItemState(newTodoItems);
  };

  const deleteItem = (todoName, todoDate) => {
    const isConfirmed = window.confirm(
      `Do you really want to delete "${todoName}"`
    );

    if (isConfirmed) {
      const upDatedItems = todoItems.filter(
        (todo) => !(todo.name === todoName && todo.duedate === todoDate)
      );
      setItemState(upDatedItems);
    }
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
