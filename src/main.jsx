import React from "react";
import ReactDOM from "react-dom";
import globalStyles from "./styles/globalStyles";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {globalStyles()}
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
