import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import "./Loading.css";

export default ({ loadingCounter }) => {
  return loadingCounter > 0 ? (
    <div className="loader-container">
      <div className="loader-wrapper">
        <FadeLoader />
      </div>
    </div>
  ) : null;
};
