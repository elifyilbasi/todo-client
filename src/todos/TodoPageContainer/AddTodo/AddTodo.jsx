import React, { useState } from "react";

export default function AddTodo({ onTodoAdd }) {
  const [title, setTitle] = useState("");
  const onTitleChange = (event) => setTitle(event.target.value);

  const submitForm = (event) => {
    event.preventDefault();
    onTodoAdd(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter description for todo"
          className="form-control"
          name="addedTodo"
          value={title}
          onChange={onTitleChange}
        />
      </form>
    </div>
  );
}
