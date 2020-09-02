import React, { useState } from "react";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";
import TodoTypeFilter from "../TodoTypeFilter/TodoTypeFilter";

const todoItems = [
  {
    id: 5373,
    title: "dsadsa",
    url: "https://todo-hapi-postgres.herokuapp.com/5373",
    completed: false,
    order: 1,
    object: "todo",
  },
  {
    id: 5374,
    title: "dsadsa",
    url: "https://todo-hapi-postgres.herokuapp.com/5374",
    completed: false,
    order: 1,
    object: "todo",
  },
  {
    id: 5375,
    title: "dsadsa",
    url: "https://todo-hapi-postgres.herokuapp.com/5375",
    completed: false,
    order: 2,
    object: "todo",
  },
  {
    id: 5376,
    title: "dsdadasdsa",
    url: "https://todo-hapi-postgres.herokuapp.com/5376",
    completed: false,
    order: 3,
    object: "todo",
  },
  {
    id: 5377,
    title: "ddsfsdfsdfds",
    url: "https://todo-hapi-postgres.herokuapp.com/5377",
    completed: false,
    order: 4,
    object: "todo",
  },
  {
    id: 5378,
    title: "test 2",
    url: "https://todo-hapi-postgres.herokuapp.com/5378",
    completed: false,
    order: 5,
    object: "todo",
  },
  {
    id: 5379,
    title: "test",
    url: "https://todo-hapi-postgres.herokuapp.com/5379",
    completed: false,
    order: 1,
    object: "todo",
  },
  {
    id: 5380,
    title: "test 3",
    url: "https://todo-hapi-postgres.herokuapp.com/5380",
    completed: false,
    order: 6,
    object: "todo",
  },
];

const FILTER_TYPE = {
  ALL: "ALL",
  NOT_COMPLETED: "NOT_COMPLETED",
  COMPLETED: "COMPLETED",
};
const FILTER_TYPES = Object.values(FILTER_TYPE);

export default function TodoPageContainer() {
  const [filterType, setFilterType] = useState(FILTER_TYPE.ALL);

  // TODO implement logic
  const onTodoAdd = (title) => {
    console.log(title);
  };

  //TODO implement logic
  const onFilterChange = (newFilter) => {
    console.log(newFilter);
  };

  return (
    <div>
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList items={todoItems} />
      <TodoTypeFilter
        filterTypes={FILTER_TYPES}
        selectedFilterType={filterType}
        onFilterChange={onFilterChange}
      />
    </div>
  );
}
