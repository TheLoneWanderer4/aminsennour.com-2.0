import React from "react";
import ProjectList from "../ProjectList/ProjectList.jsx";
import "./ProjectPage.css";

const ProjectPage = props => (
  <div className="mt-2 mb-2">
    <ProjectList projects={props.projectsJSON.projects} />
  </div>
);

export default ProjectPage;
