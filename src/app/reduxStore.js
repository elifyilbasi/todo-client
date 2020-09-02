import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as loadingReducer } from "./loading/loadingDucks";

const rootReducer = combineReducers({
  loading: loadingReducer,
});

export default createStore(rootReducer, composeWithDevTools());
