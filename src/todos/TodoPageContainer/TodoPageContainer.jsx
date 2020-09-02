import React, { useState, useEffect } from "react";
import TodoList from "./TodoList/TodoList";
import AddTodo from "./AddTodo/AddTodo";
import TodoTypeFilter from "../TodoTypeFilter/TodoTypeFilter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  todosFetched,
  todoAdded,
  todoDeleted,
  todoToggled,
} from "../todoDucks";
import { fetchTodos, addTodo, deleteTodo, toggleTodo } from "../todoWebApi";
import { showLoading, hideLoading } from "../../app/loading/loadingDucks";

import "./todoPageContainer.css";

const FILTER_TYPE = {
  ALL: "ALL",
  NOT_COMPLETED: "NOT_COMPLETED",
  COMPLETED: "COMPLETED",
};
const FILTER_TYPES = Object.values(FILTER_TYPE);

function TodoPage({
  todoList,
  todosFetched,
  showLoading,
  hideLoading,
  todoAdded,
  todoDeleted,
  todoToggled,
}) {
  const [filterType, setFilterType] = useState(FILTER_TYPE.ALL);

  useEffect(() => {
    if (todoList === null) {
      showLoading();
      fetchTodos()
        .then((response) => {
          todosFetched(response.data);
        })
        .finally(() => {
          hideLoading();
        });
    }
  }, [todoList, hideLoading, showLoading, todosFetched]);

  // TODO implement logic
  const onTodoAdd = (title) => {
    showLoading();
    // FIXME fix order
    const newItem = { title, completed: false, order: 1 };
    addTodo(newItem)
      .then((response) => {
        todoAdded(response.data);
      })
      .finally(() => hideLoading());
  };

  //TODO implement logic
  const onFilterChange = (newFilter) => {
    console.log(newFilter);
  };

  const onTodoItemToggle = (id, newState) => {
    showLoading();
    toggleTodo(id, newState)
      .then((response) => {
        todoToggled(id, response.data);
      })
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
      .finally(() => hideLoading());
  };

  return (
    <div className="todo-page-container-wrapper">
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList
        items={todoList}
        onTodoItemToggle={onTodoItemToggle}
        onTodoItemDelete={onTodoItemDelete}
      />
      <TodoTypeFilter
        filterTypes={FILTER_TYPES}
        selectedFilterType={filterType}
        onFilterChange={onFilterChange}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return { todoList: state.todos.todoList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      todosFetched,
      showLoading,
      hideLoading,
      addTodo,
      todoAdded,
      todoDeleted,
      todoToggled,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
