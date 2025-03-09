import AppHeader from "./components/AppHeader";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import "bootstrap/dist/css/bootstrap.min.css";
import AppFooter from "./components/AppFooter";
import ItemsList from "./components/ItemsList";

function App() {
  return (
    <>
      <div className="container">
        <AppHeader />
        <ToDoInput />
        <ItemsList />
        <AppFooter />
      </div>
    </>
  );
}

export default App;
