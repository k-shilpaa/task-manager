import { useSelector } from "react-redux";
import AddTask from "./components/AddTask";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";

function App() {
  // Grab active task count to display a helpful metric badge
  const tasks = useSelector((state) => state.tasks.tasks || []);
  const activeCount = tasks.filter((t) => !t.completed).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#09090b", // Deep global dark-mode backdrop
        color: "#ffffff",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        padding: "40px 20px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          backgroundColor: "#111113",
          border: "1px solid #1e1e21",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Header Section */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "32px",
            borderBottom: "1px solid #27272a",
            paddingBottom: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "700",
              margin: 0,
              letterSpacing: "-0.5px",
              background: "linear-gradient(to right, #ffffff, #a1a1aa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Redux Task Manager
          </h1>

          {/* Dynamic Active Task Counter */}
          <span
            style={{
              backgroundColor: activeCount > 0 ? "rgba(99, 102, 241, 0.15)" : "#27272a",
              color: activeCount > 0 ? "#818cf8" : "#71717a",
              fontSize: "13px",
              fontWeight: "600",
              padding: "4px 12px",
              borderRadius: "20px",
              border: activeCount > 0 ? "1px solid rgba(99, 102, 241, 0.3)" : "1px solid transparent",
              transition: "all 0.3s ease",
            }}
          >
            {activeCount} {activeCount === 1 ? "task" : "tasks"} left
          </span>
        </header>

        {/* Core Component Tree */}
        <main style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <AddTask />
          <TaskFilters />
          <TaskList />
        </main>
      </div>
    </div>
  );
}

export default App;
