import React from "react";
import "./ProjectPage.css";
import ProjectCard from "../ProjectCard/ProjectCard.jsx";
import ProjectPageTopCard from "../ProjectPageTopCard/ProjectPageTopCard.jsx";

import Effect from "react-reveal/Fade";

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Effect duration={30} className="m-0">
        <ProjectPageTopCard
          title={this.props.projectsJSON.label}
          desc={this.props.projectsJSON.desc}
        />
        <div>
          {this.props.projectsJSON.projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Effect>
    );
  }
}

export default ProjectPage;
