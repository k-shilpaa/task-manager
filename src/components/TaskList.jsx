import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks, filter } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        margin: "0 auto",
        width: "100%",
        maxWidth: "600px",
        listStyle: "none", // Removes default bullet points
      }}
    >
      {filteredTasks.length === 0 ? (
        // Styled Empty State Feedback
        <div
          style={{
            textAlign: "center",
            padding: "40px 20px",
            color: "#71717a",
            fontSize: "15px",
            border: "1px dashed #27272a",
            borderRadius: "12px",
            backgroundColor: "#111113",
          }}
        >
          No {filter !== "all" ? filter : ""} tasks found.
        </div>
      ) : (
        filteredTasks.map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })
      )}
    </ul>
  );
}

export default TaskList;
