import React from "react";

function TodoItem({ task, onRemove }) {
  const removeItem = () => {
    onRemove(task);
  };

  return (
    <li onClick={removeItem} style={{ cursor: "pointer" }}>
      {task}
    </li>
  );
}

export default TodoItem;
