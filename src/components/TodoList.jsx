// TodoList.jsx
import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((item, index) => (
          <TodoItem key={index} task={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
