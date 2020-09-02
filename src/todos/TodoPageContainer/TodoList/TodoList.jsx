import React from "react";
import TodoItem from "./TodoItem/TodoItem";

export default function TodoList({
  items,
  onTodoItemToggle,
  onTodoItemDelete,
}) {
  return (
    items.length && (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <TodoItem
              item={item}
              onTodoItemToggle={onTodoItemToggle}
              onTodoItemDelete={onTodoItemDelete}
            />
          </li>
        ))}
      </ul>
    )
  );
}
