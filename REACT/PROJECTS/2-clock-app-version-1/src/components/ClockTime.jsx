let ClockTime = () => {
  let date = new Date();

  return (
    <div className="container">
      <p className="fw-bolder lead">
        This is the current time: {date.toLocaleTimeString()}-
        {date.toLocaleDateString()}
      </p>
    </div>
  );
};

export default ClockTime;
