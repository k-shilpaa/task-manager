import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskFilters from './components/TaskFilters';

function App() {
  

  return (
   <>
   <div>
    <h1>Redux Task Managaer</h1>
    <AddTask/>
    <TaskFilters/>
    <TaskList/>
   </div>
   </>
  );
}

export default App
