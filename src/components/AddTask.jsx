import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!text.trim()) return;
    dispatch(addTask(text));
    setText("");
  };

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" ,marginBottom:"18px"}}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        style={{
          height: "30px",
          width: "40%",
          borderRadius: "10px",
          border: "none",
          padding: "10px",
        }}
      />
      <button
        onClick={handleAddTask}
        style={{
          padding: "10px",
          height: "45px",
          width:"12%",
          borderRadius: "8px",
          border: "none",
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
