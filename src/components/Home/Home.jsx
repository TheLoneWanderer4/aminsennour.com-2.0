import React from "react";
import "./Home.css";

import Welcome from "./home-components/Welcome/Weclome.jsx";
import Education from "./home-components/Education/Education.jsx";
import Projects from "./home-components/Projects/Projects.jsx";
import ContactMe from "./home-components/ContactMe/ContactMe.jsx";

const Home = props => (
  <div className="bg-secondary">
    <div className="homeGrid">
      <div>
        <Welcome />
        <Education />
      </div>
      <ContactMe />
    </div>
    <Projects projectsList={props.projectsList} />
  </div>
);

export default Home;
