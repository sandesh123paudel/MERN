import { FaDeleteLeft } from "react-icons/fa6";

function TodoItem({ id, todoName, todoDate, onDelete, completed, onComplete }) {
  return (
    <div className={`container${completed ? " completed-task" : ""}`}>
      <div
        className="row kg-row align-items-center"
        style={{
          minHeight: "50px",
          borderBottom: "1px solid #eee",
          background: completed ? "#e6ffe6" : "#fff",
          borderRadius: "8px",
          margin: "8px 0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        <div
          className="col-6"
          style={{
            textDecoration: completed ? "line-through" : "none",
            color: completed ? "#888" : "#222",
            fontWeight: 500,
            fontSize: "1.1rem",
          }}
        >
          {todoName}
        </div>
        <div className="col-3" style={{ color: "#666", fontSize: "0.95rem" }}>
          {todoDate}
        </div>
        <div className="col-3 d-flex gap-2 justify-content-end">
          <button
            type="button"
            className={`btn ${
              completed ? "btn-success" : "btn-outline-success"
            } kg-button`}
            style={{ minWidth: 90 }}
            onClick={() => !completed && onComplete(id)}
            disabled={completed}
            title={completed ? "Task already completed" : "Mark as completed"}
          >
            {completed ? "Completed" : "Mark Complete"}
          </button>
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDelete(id)}
            title="Delete"
          >
            <FaDeleteLeft />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
