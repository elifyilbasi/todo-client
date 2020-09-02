import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as loadingReducer } from "./loading/loadingDucks";
import { reducer as todosReducer } from "../todos/todoDucks";

const rootReducer = combineReducers({
  loading: loadingReducer,
  todos: todosReducer,
});

export default createStore(rootReducer, composeWithDevTools());
