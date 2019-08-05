import React from "react";
import "./ContactMe.css";
import contacts from "./contacts.json";

console.log(contacts);

const ContactMe = props => (
  <div className="contactme home-card p-4">
    <div className="card bg-light">
      <div className="card-body">
        <h3 className="card-title">Contact Me</h3>
      </div>
      <ul className="list-group list-group-flush">
        {contacts.map(contact => (
          <a className="list-group-item" href={contact.url}>
            {contact.label}{" "}
          </a>
        ))}
      </ul>
    </div>
  </div>
);

export default ContactMe;
