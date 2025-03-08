import AppHeader from "./components/AppHeader";
import "./App.css";
import ToDoInput from "./components/ToDoInput";

function App() {
  return (
    <>
      <div className="container">
        <AppHeader />
        <ToDoInput />
      </div>
    </>
  );
}

export default App;
