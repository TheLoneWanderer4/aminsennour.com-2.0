import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router basename="/">
    <App />
  </Router>,
  document.getElementById("root")
);
