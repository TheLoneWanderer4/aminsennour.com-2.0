import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="p-4">
      <a
        className="card project-card shadow-lg p-0 bord text-decoration-none text-dark"
        target="_blank"
        rel="noopener noreferrer"
        href={
          props.project.projectURL
            ? props.project.projectURL
            : "#/react-" + props.project.title
        }
      >
        <div className="card-body text-dark bg-light border-bottom">
          <h3 className="card-title m-0">{props.project.title}</h3>
        </div>
        <div className="row no-gutters bg">
          <div className="col-md-4 m-auto project-img-wrapper">
            <img
              id="project-img"
              className="card-img-top"
              src={props.project.imageURL}
              alt={props.project.imageURL}
            />
          </div>
          <div className="col-md-8 border-left d-flex align-items-center">
            <ul className="list-group list-group-flush">
              {props.project.listItems.map(item => (
                <li key={item} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
