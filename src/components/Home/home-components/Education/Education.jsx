import React from "react";
import "./Education.css";

const Education = () => (
  <div className="p-4 home-card text-center">
    <div className="card shadow-lg">
      <div className="card-body border-bottom bg-light">
        <h2 className="card-title m-0">Education</h2>
      </div>
      <div className="card-body">
        <div className="d-flex flex-column align-items-center text-left">
          <div>
            <li className="current">
              University of Arizona, Computer Science <span>(2018-2022)</span>
            </li>
            <li className="current">
              University of Arizona, Math <span>(2018-2022)</span>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
