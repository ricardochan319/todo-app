// TaskInput.jsx
import React from "react";

function TaskInput({ task, onTaskChange, onAddTask }) {
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={onTaskChange}
      />
      <button onClick={onAddTask}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default TaskInput;
