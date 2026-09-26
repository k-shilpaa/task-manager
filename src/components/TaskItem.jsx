import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../store/tasksSlice";
function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <table
      style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid blue" }}
    >
      <tbody style={{ display: "flex", justifyContent: "space-evenly",padding:"8px" }}>
        <td>{task.text}</td>
        <button onClick={() => dispatch(toggleTask(task.id))}>
          {task?.completed ? "undo" : "Complete"}
        </button>
        <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      </tbody>
    </table>
  );
}
export default TaskItem;
