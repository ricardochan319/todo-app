import React from "react";

function TodoItem({ task, onRemove }) {
  const removeItem = () => {
    onRemove(task); // Call the onRemove callback with the task to remove
  };

  return (
    <li onClick={removeItem} style={{ cursor: "pointer" }}>
      {task}
    </li>
  );
}

export default TodoItem;
