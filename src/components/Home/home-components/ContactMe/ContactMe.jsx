import React from "react";
import "./ContactMe.css";

const ContactMe = props => (
  <div className="contactme home-card p-4">
    <div className="card bg-light">
      <div className="card-body">
        <h3 className="card-title">Contact Me</h3>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  </div>
);

export default ContactMe;
