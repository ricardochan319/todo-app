// TodoItem.jsx
import React, { useState } from "react";

function TodoItem({ task }) {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <li
      style={{
        textDecoration: completed ? "line-through" : "none",
        cursor: "pointer"
      }}
      onClick={toggleCompleted}
    >
      {task}
    </li>
  );
}

export default TodoItem;
