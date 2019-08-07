import React from "react";
import "./ContactMe.css";

class ContactMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
  }

  componentWillMount() {
    fetch(
      "https://raw.githubusercontent.com/TheLoneWanderer4/aminsennour.com-2.0/master/data/contacts.json"
    )
      .then(response => response.json())
      .then(contacts => {
        this.setState({ contacts });
      });
  }

  render() {
    return (
      <div className="home-card p-4">
        <div className="card shadow-lg">
          <div className="card-body border-bottom bg-light text-center">
            <h3 className="card-title m-0">Contact Me</h3>
          </div>
          <div className="card-body d-flex flex-column align-items-center">
            <div className="list-group w-100 text-center">
              {this.state.contacts.map(contact => (
                <a
                  key={contact.label}
                  className="list-group-item list-group-item-action"
                  href={contact.url}
                >
                  {contact.label}{" "}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
