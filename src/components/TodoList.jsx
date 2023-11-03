// TodoList.js
import React from "react";

function TodoList({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
