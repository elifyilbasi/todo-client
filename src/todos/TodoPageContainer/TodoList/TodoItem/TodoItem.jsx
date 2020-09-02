import React from "react";

export default function TodoItem({ item, onTodoItemToggle, onTodoItemDelete }) {
  return (
    <div style={{ display: "inline" }}>
      <p>{item.title}</p>
      <button onClick={() => onTodoItemToggle(item.id)}>
        {item.completed ? "Set Undone" : "Set Done"}
      </button>
      <button onClick={() => onTodoItemDelete(item.id)}>Delete</button>
    </div>
  );
}
