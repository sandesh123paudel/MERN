import { useEffect, useState } from "react";

let ClockTime = () => {
  let date = new Date();

  const [time, setTime] = useState(date);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container">
      <p className="fw-bolder lead">
        This is the current time: {time.toLocaleTimeString()}-
        {time.toLocaleDateString()}
      </p>
    </div>
  );
};

export default ClockTime;
