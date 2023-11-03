import React, { useState } from "react";
import TodoList from "./TodoList";
import TaskInput from "./TaskInput";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Function to handle task input change
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  // Function to handle adding a new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <TaskInput
        task={task}
        onTaskChange={handleTaskChange}
        onAddTask={addTask}
      />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
