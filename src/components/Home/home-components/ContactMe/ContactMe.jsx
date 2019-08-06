import React from "react";
import "./ContactMe.css";
import contacts from "./contacts.json";

console.log(contacts);

const ContactMe = props => (
  <div className="home-card p-4">
    <div className="card shadow-lg">
      <div className="card-body border-bottom bg-light text-center">
        <h3 className="card-title m-0">Contact Me</h3>
      </div>
      <div className="card-body d-flex flex-column align-items-center">
        <div>
          {contacts.map(contact => (
            <li>
              <a className="" href={contact.url}>
                {contact.label}{" "}
              </a>
            </li>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ContactMe;
