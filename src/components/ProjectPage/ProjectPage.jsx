import React from "react";
import ProjectList from "../ProjectList/ProjectList.jsx";
import "./ProjectPage.css";

const ProjectPage = props => (
  <ProjectList projects={props.projectsJSON.projects} />
);

export default ProjectPage;
