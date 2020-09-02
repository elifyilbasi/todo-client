import React from "react";
import TodoItem from "./TodoItem/TodoItem";

export default function TodoList({ items }) {
  return (
    items.length && (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <TodoItem item={item} />
          </li>
        ))}
      </ul>
    )
  );
}
