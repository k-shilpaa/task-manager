import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../store/tasksSlice";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 18px",
        color:"black",
        border: "1px solid #27272a",
        borderRadius: "12px",
        marginBottom: "12px",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto 12px auto",
        boxSizing: "border-box",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.15s ease, border-color 0.15s ease"
      }}
    >
      {/* Task Text */}
      <span
        style={{
          flex: "1",
          fontSize: "15px",
          color: task?.completed ? "#71717a" : "black",
          textDecoration: task?.completed ? "line-through" : "none",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          marginRight: "16px",
          transition: "color 0.2s ease"
        }}
      >
        {task.text}
      </span>

      {/* Action Buttons Container */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {/* Toggle Button */}
        <button
          onClick={() => dispatch(toggleTask(task.id))}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: task?.completed ? "rgba(34, 197, 94, 0.15)" : "rgba(99, 102, 241, 0.15)",
            color: task?.completed ? "#4ade80" : "#818cf8",
            fontSize: "13px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s ease",
            minWidth: "75px"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = task?.completed ? "rgba(34, 197, 94, 0.25)" : "rgba(99, 102, 241, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = task?.completed ? "rgba(34, 197, 94, 0.15)" : "rgba(99, 102, 241, 0.15)";
          }}
        >
          {task?.completed ? "Undo" : "Complete"}
        </button>

        {/* Delete Button */}
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            color: "#f87171",
            fontSize: "13px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
            e.target.style.color = "#f87171";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
