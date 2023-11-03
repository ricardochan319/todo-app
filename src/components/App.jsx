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

  // Function to handle removing a task
  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
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
      <TodoList tasks={tasks} onRemove={removeTask} />
    </div>
  );
}

export default App;
