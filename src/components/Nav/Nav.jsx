import React from "react";
import "./Nav.css";

const Nav = props => (
  <div className="navWrap">
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <a className="navbar-brand" href="/#/">
        Amin Sennour
      </a>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Using
        </button>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton"
        >
          <a
            href="https://reactjs.org/"
            className="dropdown-item"
            target="_blank"
          >
            React
          </a>
          <a
            href="https://reacttraining.com/react-router/"
            className="dropdown-item"
            target="_blank"
          >
            React-Router
          </a>
          <a
            href="https://www.react-reveal.com/"
            className="dropdown-item"
            target="_blank"
          >
            React-Reveal
          </a>
          <a
            href="https://getbootstrap.com/"
            className="dropdown-item"
            target="_blank"
          >
            Bootstrap
          </a>
        </div>
      </div>
    </nav>
  </div>
);

export default Nav;
