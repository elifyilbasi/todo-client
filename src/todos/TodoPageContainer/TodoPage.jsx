import React, { useState, useEffect, useMemo } from "react";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";
import TodoTypeFilter from "../TodoTypeFilter/TodoTypeFilter";
import { fetchTodos, addTodo, deleteTodo, toggleTodo } from "../todoWebApi";

import "./TodoPage.css";

const FILTER_TYPE = {
  ALL: "ALL",
  NOT_COMPLETED: "NOT_COMPLETED",
  COMPLETED: "COMPLETED",
};

const FILTER_TYPES = Object.values(FILTER_TYPE);

const showErrorAlert = () => {
  alert("An unexpected error occured");
};

export default function TodoPage({
  todoList,
  todosFetched,
  showLoading,
  hideLoading,
  todoAdded,
  todoDeleted,
  todoToggled,
}) {
  const [filterType, setFilterType] = useState(FILTER_TYPE.ALL);

  const visibleTodoList = useMemo(() => {
    if (!todoList) {
      return null;
    }

    switch (filterType) {
      case FILTER_TYPE.COMPLETED:
        return todoList.filter((todo) => todo.completed);
      case FILTER_TYPE.NOT_COMPLETED:
        return todoList.filter((todo) => !todo.completed);
      case FILTER_TYPE.ALL:
      default:
        return todoList;
    }
  }, [todoList, filterType]);

  useEffect(() => {
    if (todoList === null) {
      showLoading();
      fetchTodos()
        .then((response) => {
          todosFetched(response.data);
        })
        .catch(showErrorAlert)
        .finally(() => {
          hideLoading();
        });
    }
  }, [todoList, hideLoading, showLoading, todosFetched]);

  const onTodoAdd = (title) => {
    showLoading();
    const highestOrderItem = todoList.slice(-1)[0];
    const highestOrder = highestOrderItem ? highestOrderItem.order : 0;
    const newItem = { title, completed: false, order: highestOrder + 1 };
    addTodo(newItem)
      .then((response) => {
        todoAdded(response.data);
      })
      .catch(showErrorAlert)
      .finally(() => hideLoading());
  };

  const onFilterChange = (newFilter) => {
    setFilterType(newFilter);
  };

  const onTodoItemToggle = (id, newState) => {
    showLoading();
    toggleTodo(id, newState)
      .then((response) => {
        todoToggled(id, response.data);
      })
      .catch(showErrorAlert)
      .finally(() => hideLoading());
  };

  const onTodoItemDelete = (id) => {
    showLoading();
    deleteTodo(id)
      .then((response) => {
        if (response.data.success) {
          todoDeleted(id);
        }
      })
      .catch(showErrorAlert)
      .finally(() => hideLoading());
  };

  return (
    <div className="todo-page-wrapper">
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList
        items={visibleTodoList}
        onTodoItemToggle={onTodoItemToggle}
        onTodoItemDelete={onTodoItemDelete}
      />
      <TodoTypeFilter
        filterTypes={FILTER_TYPES}
        selectedFilterType={filterType}
        visibleItemCount={visibleTodoList ? visibleTodoList.length : 0}
        onFilterChange={onFilterChange}
      />
    </div>
  );
}
