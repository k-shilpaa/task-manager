import { useDispatch,useSelector } from "react-redux";
import { setFilter } from "../store/tasksSlice";


function TaskFilters(){
    const dispatch=useDispatch();
    const filter=useSelector((state)=>state.tasks.filter);

    return (
        <div style={{display:"flex",justifyContent:"space-evenly",marginBottom:"18px"}}>
            <button onClick={()=>dispatch(setFilter("all"))}>All</button>
            <button onClick={()=>dispatch(setFilter("completed"))}>Completed</button>
            <button onClick={()=>dispatch(setFilter("active"))}>Active</button>
        </div>
    )
}

export default TaskFilters;