import React from "react";
import "./ProjectPage.css";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";

import Effect from "react-reveal/Fade";

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Effect duration={30} className="m-0">
        <div>
          <div className="p-4">
            <div className="d-flex flex-column justify-content-center">
              <div className="card project-card shadow-sm">
                <div className="card-body text-dark bg-light border-bottom">
                  <h3 className="card-title">
                    {this.props.projectsJSON.label}
                  </h3>
                </div>
                <div className="card-body">{this.props.projectsJSON.desc}</div>
              </div>
            </div>
          </div>
          {this.props.projectsJSON.projects.map(project => (
            <div>
              <ProjectCard key={project.label} project={project} />
            </div>
          ))}
        </div>
      </Effect>
    );
  }
}

export default ProjectPage;
