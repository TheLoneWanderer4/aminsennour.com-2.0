import React from "react";
import "./Welcome.css";

const Welcome = () => (
  <div className="p-4 home-card intro-section">
    <div className="intro-card-wrapper d-flex flex-column justify-content-center">
      <div className="card shadow-lg">
        <div className="card-body border-bottom bg-light">
          <h1 className="card-title m-0">Hi, I'm Amin Sennour.</h1>
        </div>
        <div className="card-body m-0 p-0 d-flex flex-column justify-content-center align-items-center">
          <a
            href="https://github.com/TheLoneWanderer4"
            target="_blank"
            className="badge badge-primary p-2 m-4 "
          >
            Software Developer
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Welcome;
