import React from "react";
import "./ContactMe.css";

const content = "d-flex align-items-center justify-content-center flex-column";

const ContactMe = props => (
  <div class="contactme p-4">
    <div class="card bg-light">
      <div class="card-body">
        <h3 class="card-title">Contact Me</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  </div>
);

export default ContactMe;
