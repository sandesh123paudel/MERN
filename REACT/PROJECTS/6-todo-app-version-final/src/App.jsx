import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import Message from "./components/Message";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const initialtodoItems = [];

  let [todoItems, setItemState] = useState(initialtodoItems);

  const itemsAdded = (item, date) => {
    // setItemState((currValue) => {
    //   let newItems = { name: item, duedate: date };
    //   let newToDoItems = [...currValue, newItems];

    //   return newToDoItems;
    // });

    //compact way
    setItemState((currValue) => [...currValue, { name: item, duedate: date }]);
  };

  const onDeleteHandler = (todoName, todoDate) => {
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
    <center className="todo-container">
      <AppName />
      <AppTodo onSubmit={itemsAdded} />
      <Message data={todoItems} />
      <TodoItems todoItems={todoItems} onDelete={onDeleteHandler} />
    </center>
  );
}
export default App;
