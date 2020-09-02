import React from "react";
import TodoPageContainer from "../todos/TodoPageContainer/TodoPageContainer";
import FadeLoader from "react-spinners/FadeLoader";
import "./App.css";

function App() {
  return (
    <div className="container">
      <TodoPageContainer />
      <div className="loader-container">
        <div className="loader-wrapper">
          <FadeLoader style={{top: "50%"}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
