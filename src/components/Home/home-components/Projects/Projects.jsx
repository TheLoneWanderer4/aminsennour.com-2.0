import React from "react";
import "./Projects.css";

const Projects = props => (
  <div class="projects p-4 d-flex justify-content-center">
    <div className="card bg-light">
      <div className="card-body">
        <h4 className="card-title">Look at the things I've made</h4>
        <div class="d-flex flex-row justify-content-center">
          {props.projectsList.map(item => (
            <a
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
