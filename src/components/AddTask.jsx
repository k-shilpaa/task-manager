import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice";

function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault(); // Allows pressing 'Enter' to submit
    if (!text.trim()) return;
    dispatch(addTask(text));
    setText("");
  };

  return (
    <form 
      onSubmit={handleAddTask} 
      style={{ 
        display: "flex", 
        gap: "12px", 
        justifyContent: "center", 
        marginBottom: "24px",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto 24px auto"
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        style={{
          flex: "1",
          height: "46px",
          borderRadius: "12px",
          border: "1px solid #3f3f46",
          
          color: "black",
          padding: "0 16px",
          fontSize: "15px",
          outline: "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          boxSizing: "border-box"
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "#6366f1";
          e.target.style.boxShadow = "0 0 0 3px rgba(99, 102, 241, 0.2)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#3f3f46";
          e.target.style.boxShadow = "none";
        }}
      />
      
      <button
        type="submit"
        style={{
          height: "46px",
          padding: "0 24px",
          borderRadius: "12px",
          border: "none",
          backgroundColor: "#6366f1",
          color: "#ffffff",
          fontSize: "15px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "background-color 0.2s ease, transform 0.1s ease",
          whiteSpace: "nowrap"
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = "#4f46e5"}
        onMouseLeave={(e) => e.target.style.backgroundColor = "#6366f1"}
        onMouseDown={(e) => e.target.style.transform = "scale(0.98)"}
        onMouseUp={(e) => e.target.style.transform = "scale(1)"}
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
