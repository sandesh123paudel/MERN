const AppFooter = ({ tasks, onDelete }) => {
  return (
    <div className="footer">
      <p>You have {tasks.length} items today</p>
      <button onClick={onDelete}>Clear All</button>
    </div>
  );
};

export default AppFooter;
