import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList(){
    const {tasks,filter}=useSelector((state)=>state.tasks)
    const filteredTasks=tasks.filter((task)=>{
        if(filter==="active") return !task.completed;
        if(filter==="completed") return task.completed;
        return true;
    })
    return (
        <div style={{display:"flex",flexDirection:"column",border:"1px solid red"}}>
            {filteredTasks.map((task)=>{
                return <TaskItem key={task.id} task={task}></TaskItem>
            })}
        </div>
    )
}

export default TaskList;