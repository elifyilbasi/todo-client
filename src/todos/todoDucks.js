const TYPES = {
  todosFetched: "todos/todosFetched",
  todoAdded: "todos/todoAdded",
  todoToggled: "todos/todoToggled",
  todoDeleted: "todos/todoDeleted",
};

export const todosFetched = (todoItems) => ({
  type: TYPES.todosFetched,
  payload: todoItems,
});

export const todoAdded = (newItem) => ({
  type: TYPES.todoAdded,
  payload: newItem,
});

export const todoToggled = (toggledItemId, newItemState) => ({
  type: TYPES.todoToggled,
  payload: {id: toggledItemId, newItemState }
});

export const todoDeleted = (deletedItemId) => ({
  type: TYPES.todoDeleted,
  payload: deletedItemId,
});

const INITIAL_STATE = {
  todoList: null,
};

const reducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.todosFetched: {
      const orderedList = [...action.payload].sort(
        (left, right) => left.order - right.order
      );
      return { ...state, todoList: orderedList };
    }
    case TYPES.todoAdded: {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }
    case TYPES.todoToggled: {
      const {id, newItemState } = action.payload;
      const itemIndex = state.todoList.findIndex((item) => item.id === id);

      const newList = [...state.todoList];
      newList[itemIndex] = newItemState;

      return { ...state, todoList: newList };
    }
    case TYPES.todoDeleted: {
      const deletedItemId = action.payload;
      const newList = state.todoList.filter(
        (todoItem) => todoItem.id !== deletedItemId
      );
      return { ...state, todoList: newList };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
