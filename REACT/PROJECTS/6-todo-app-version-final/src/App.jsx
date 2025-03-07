import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import Message from "./components/Message";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const initialtodoItems = [
    {
      name: "Buy a Milk",
      duedate: "04/04/2025",
    },
    {
      name: "Go to College",
      duedate: "04/05/2025",
    },
  ];

  let [todoItems, setItemState] = useState(initialtodoItems);

  const itemsAdded = (item, date) => {
    let newItems = { name: item, duedate: date };
    setItemState([...todoItems, newItems]);
  };

  const onDeleteHandler = (todoName, todoDate) => {
    console.log(todoDate, todoName);
    const upDatedItems = todoItems.filter(
      (todo) => !(todo.name === todoName && todo.duedate === todoDate)
    );
    setItemState(upDatedItems);
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
