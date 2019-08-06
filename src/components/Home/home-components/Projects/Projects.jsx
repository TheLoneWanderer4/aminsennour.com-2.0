import React from "react";
import "./Projects.css";

const Projects = props => (
  <div className="projects home-card p-4">
    <div className="card shadow-lg">
      <div className="card-body border-bottom bg-light">
        <h4 className="card-title m-0">Look at the things I've made</h4>
      </div>
      <div className="card-body">
        <div className="d-flex flex-row justify-content-center">
          {props.projectsList.map(item => (
            <a
              key={item.label}
              className="btn btn-primary m-2 shadow-sm "
              href={"/#/" + item.label}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
