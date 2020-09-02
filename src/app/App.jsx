import React from "react";
import TodoPageContainer from "../todos/TodoPageContainer/TodoPageContainer";
import FadeLoader from "react-spinners/FadeLoader";
import "./App.css";
import { Provider } from "react-redux";
import reduxStore from "./reduxStore";

function App() {
  return (
    <Provider store={reduxStore}>
      <div className="container">
        <TodoPageContainer />
        <div className="loader-container">
          <div className="loader-wrapper">
            <FadeLoader/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
