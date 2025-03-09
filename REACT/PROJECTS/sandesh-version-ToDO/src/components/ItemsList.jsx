import ItemsContainer from "./ItemsContainer";
const ItemsList = ({ tasks, onEachDelete }) => {
  return (
    <div className="todo-list-container">
      {tasks.length > 0 ? (
        <ItemsContainer tasks={tasks} onEachDelete={onEachDelete} />
      ) : (
        <div className="items-container" style={{ color: "red" }}>
          No Tasks for Today
        </div>
      )}
    </div>
  );
};

export default ItemsList;
