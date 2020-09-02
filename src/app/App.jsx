import React from "react";
import TodoPageContainer from "../todos/TodoPageContainer/TodoPageContainer";

import "./App.css";
import { Provider } from "react-redux";
import reduxStore from "./reduxStore";
import LoadingContainer from "./loading/LoadingContainer";

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="container">
        <TodoPageContainer />
        <LoadingContainer />
      </div>
    </Provider>
  );
}

export default App;
