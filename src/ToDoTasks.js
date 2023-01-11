import './App.css';
import { useState } from 'react';

function ToDoTasks() {

    const[todoList, setTodoList] = useState([]);
    const[newTask, setNewTask] = useState("");

    const handleChange = (event) => {
            setNewTask(event.target.value);
    }

    return (

        <div className="App">
            <div className="addTask">
               <input onChange={handleChange} />
               <button>Add Task</button>
               {newTask}
            </div>
        </div>

    );
}

export default ToDoTasks;