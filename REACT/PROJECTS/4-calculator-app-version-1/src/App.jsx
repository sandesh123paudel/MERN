import css from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  return (
    <div className={css.calculator}>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;
