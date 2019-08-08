import React from "react";

var marked = require("marked");

const ProjectPageTopCard = ({ title, desc }) => (
  <div className="p-4">
    <div className="d-flex flex-column justify-content-center">
      <div className="card project-card shadow-sm">
        <div className="card-body text-dark bg-light border-bottom">
          <h3 className="card-title m-0">{title}</h3>
        </div>
        <div
          className="p-3"
          dangerouslySetInnerHTML={{
            __html: marked(desc)
          }}
        />
      </div>
    </div>
  </div>
);

export default ProjectPageTopCard;
