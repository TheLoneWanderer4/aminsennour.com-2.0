import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import createHashHistory from "history/createHashHistory";

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
  <Router history={hashHistory}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
