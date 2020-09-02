import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import "./todoItem.css";

export default function TodoItem({ item, onTodoItemToggle, onTodoItemDelete }) {
  return (
    <div className="todo-item-wrapper">
      <input
        className="checkbox"
        type="checkbox"
        onChange={() => {
          onTodoItemToggle(item.id, !item.completed);
        }}
        checked={item.completed}
      ></input>
      <div
        className="todo-item-title"
        style={{ textDecoration: item.completed ? "line-through" : "none" }}
      >
        {item.title}
      </div>
      <button
        className="todo-item-delete-btn btn"
        onClick={() => onTodoItemDelete(item.id)}
      >
        <i>
          <FontAwesomeIcon icon={faMinusCircle} color="Tomato" />
        </i>
      </button>
    </div>
  );
}
