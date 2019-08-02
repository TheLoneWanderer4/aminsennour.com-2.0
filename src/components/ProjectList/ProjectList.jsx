import React from "react";
import "./ProjectList.css";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";

function ProjectList(props) {
  return (
    <div className="">
      {props.projects.map(project => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
