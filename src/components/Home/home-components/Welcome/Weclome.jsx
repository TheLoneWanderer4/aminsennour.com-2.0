import React from "react";
import "./Welcome.css";

const Welcome = () => (
  <div className="p-4 home-card intro-section d-flex flex-column justify-content-center">
    <div className="bg-light card p-2">
      <div className="card-body">
        <h1 className="card-title">Hi, I'm Amin Sennour.</h1>
        <p>{"{developer}"}</p>
        <p>{"{CS major at the UofA}"}</p>
      </div>
    </div>
  </div>
);

export default Welcome;
