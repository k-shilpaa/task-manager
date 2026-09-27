import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/tasksSlice";

function TaskFilters() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasks.filter);

  // Helper function to handle button themes dynamically
  const getButtonStyle = (buttonFilter) => {
    const isActive = currentFilter === buttonFilter;
    
    return {
      padding: "10px 20px",
      borderRadius: "10px",
      border: "1px solid",
      borderColor: isActive ? "#6366f1" : "#3f3f46",
      backgroundColor: isActive ? "rgba(99, 102, 241, 0.15)" : "#18181b",
      color: isActive ? "#818cf8" : "#a1a1aa",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.2s ease",
      minWidth: "100px",
      outline: "none"
    };
  };

  const filters = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" }
  ];

  return (
    <div 
      style={{ 
        display: "flex", 
        gap: "10px",
        justifyContent: "center", 
        marginBottom: "24px",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto 24px auto"
      }}
    >
      {filters.map((f) => (
        <button 
          key={f.value}
          onClick={() => dispatch(setFilter(f.value))}
          style={getButtonStyle(f.value)}
          onMouseEnter={(e) => {
            if (currentFilter !== f.value) {
              e.target.style.borderColor = "#52525b";
              e.target.style.color = "#ffffff";
            }
          }}
          onMouseLeave={(e) => {
            if (currentFilter !== f.value) {
              e.target.style.borderColor = "#3f3f46";
              e.target.style.color = "#a1a1aa";
            }
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}

export default TaskFilters;
