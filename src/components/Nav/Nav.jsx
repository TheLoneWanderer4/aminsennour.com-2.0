import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./Nav.css";

const Nav = props => (
  <div>
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <ul className="navbar-nav mr-auto">
            {props.projects.map(item => (
              <li key={item.label} className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {item.label}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {item.projects.map(project => (
                    <a
                      key={project.title}
                      className="dropdown-item"
                      href={
                        project.projectURL
                          ? project.projectURL
                          : "#/react-" + project.title
                      }
                    >
                      {project.title}
                    </a>
                  ))}
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href={"/#/" + item.label}>
                    {item.label}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Amin Sennour
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  </div>
);

export default Nav;
