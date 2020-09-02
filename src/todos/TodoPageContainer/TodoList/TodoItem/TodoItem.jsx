import React from "react";

export default function TodoItem({ item }) {
  return (
    <div>
      <p>{item.title}</p>
    </div>
  );
}
