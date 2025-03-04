import css from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className={css.calculator}>
      <input type="text" className={css.display} />
      <div className={css.buttonsContainer}>
        <button>C</button>
        <button>1</button>
        <button>2</button>
        <button>+</button>


      </div>
    </div>
  );
}

export default App;
