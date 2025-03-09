const AppHeader = () => {
  const getDate = () => {
    return new Date().toLocaleDateString(); // Formats the current date
  };

  return (
    <>
      <div className="row">
        <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>Todo App</h1>
      </div>
      <p>Date: {getDate()}</p> {/* Correct way to display date */}
    </>
  );
};

export default AppHeader;
