function Display({ displayVal }) {
  return (
    <>
      <input
        className="displayBox"
        value={displayVal}
        type="numeric"
        placeholder="0000"
      ></input>
    </>
  );
}

export default Display;
