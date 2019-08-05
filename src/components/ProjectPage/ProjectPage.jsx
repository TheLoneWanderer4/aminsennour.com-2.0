import React from "react";
import ProjectList from "../ProjectList/ProjectList.jsx";
import "./ProjectPage.css";

const ProjectPage = props => (
  <div>
    <div className="p-4 project-card-wrapper d-flex flex-column justify-content-center">
      <div className="card project-card shadow-sm">
        <div className="card-body text-dark bg-light border-bottom">
          <h3 className="card-title">{props.projectsJSON.label}</h3>
        </div>
        <div className="card-body">{props.projectsJSON.desc}</div>
      </div>
    </div>
    <ProjectList projects={props.projectsJSON.projects} />
  </div>
);

export default ProjectPage;
