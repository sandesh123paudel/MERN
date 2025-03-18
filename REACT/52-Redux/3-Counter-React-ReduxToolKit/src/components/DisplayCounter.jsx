import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);

  //or
  // const counterObj = useSelector((store) => store.counter);
  // const counter = counterObj.counterVal;

  return <p className="lead mb-4">Counter Current Value: {counterVal}</p>;
};

export default DisplayCounter;
