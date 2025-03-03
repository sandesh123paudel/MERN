import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AppTodo />

      <div className="items-container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}
export default App;
