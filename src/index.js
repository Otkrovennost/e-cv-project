import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App.jsx";
import "./index.scss";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
