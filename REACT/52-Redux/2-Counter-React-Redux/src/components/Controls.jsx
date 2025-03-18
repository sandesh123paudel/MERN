import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: Number(inputElement.current.value),
      },
    });
    inputElement.current.value = "";
  };

  const handleSubstract = () => {
    dispatch({
      type: "SUBSTRACT",
      payload: {
        num: Number(inputElement.current.value),
      },
    });
    inputElement.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center ">
        <button
          type="button"
          className="btn btn-danger btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4 gap-3"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-warning btn-lg px-4 gap-3"
          onClick={handlePrivacy}
        >
          Privacy-Toggle
        </button>
      </div>
      <div
        className="d-grid gap-2 d-sm-flex justify-content-sm-center "
        style={{ marginTop: "15px" }}
      >
        <input
          type="number"
          ref={inputElement}
          className="rounded form-control  number-input"
          placeholder="Enter a number"
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4 gap-3"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="texx"
          className="btn btn-secondary fo btn-lg px-4 gap-3"
          onClick={handleSubstract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
