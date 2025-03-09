import AppHeader from "./components/AppHeader";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ItemsContainer from "./components/ItemsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <>
      <div className="container">
        <AppHeader />
        <ToDoInput />
        <ItemsContainer />
        <AppFooter />
      </div>
    </>
  );
}

export default App;
