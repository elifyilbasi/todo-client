import React, { useState, useEffect, useMemo } from "react";
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
