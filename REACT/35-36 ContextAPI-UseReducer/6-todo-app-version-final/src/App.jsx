import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import Message from "./components/Message";
import TodoItems from "./components/TodoItems";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AppTodo />
        <Message />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}
export default App;
