import React, { useState } from "react";
import TodoList from "./TodoList";
import TaskInput from "./TaskInput";

function App() {
  const [task, setTask] = useState(""); // State to manage the task input
  const [tasks, setTasks] = useState([]); // State to store the list of tasks

  // Function to handle task input change
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  // Function to handle adding a new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]); // Add the new task to the tasks array
      setTask(""); // Clear the task input
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
