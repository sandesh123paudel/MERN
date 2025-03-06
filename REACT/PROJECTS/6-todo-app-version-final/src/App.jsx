import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy a Milk",
      duedate: "04/04/2025",
    },

    {
      name: "Go to College",
      duedate: "04/05/2025",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AppTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}
export default App;
