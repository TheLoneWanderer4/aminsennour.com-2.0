import React from "react";
import "./Welcome.css";

const Welcome = () => (
  <div className="p-4 home-card intro-section">
    <div className="intro-card-wrapper d-flex flex-column justify-content-center">
      <div className="card p-2 shadow-lg">
        <div className="card-body border-bottom bg-light">
          <h1 className="card-title m-0">Hi, I'm Amin Sennour.</h1>
        </div>
        <div className="card-body">
          <p>{"{developer}"}</p>
          <p>{"{CS major at the UofA}"}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Welcome;
