// TodoList.jsx
import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, onRemove }) {
  return (
    <div>
      <ul>
        {tasks.map((item, index) => (
          <TodoItem key={index} task={item} onRemove={onRemove} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
